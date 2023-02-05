import React, { useState } from "react";
import SheetTable from "../components/Table/SheetTable";
import Grid from "@mui/material/Grid";
import PageTitle from "../components/Generic/PageTitle";
import { MatchData } from "../models";
import PageDescription from "../components/Generic/PageDescription";
import useMobileView from "../hooks/Generic/useMobileView";
import { useSnackbar } from "notistack";
import SubPageTitle from "../components/Generic/SubPageTitle";
import SimulateMatchOptions from "../components/PreMatch/SimulateMatchOptions";
import { Match } from "../components/Match/Match";
import SaveButton from "../components/Buttons/SaveButton";
import { createTeamMatchResultsUrl } from "../utils/url-helpers";
import { useSelector } from "react-redux";
import { getTeamOrFail } from "../selectors/user";
import useSendData from "../hooks/Generic/useSendData";
import useTeamLineup from "../hooks/PreMatch/useTeamLineup";
import { getFirstErrorMessage } from "../utils/be-error-helpers";

export const matchCenterPageDescription =
  "This page allows you to manage your team's lineup for your upcoming\n" +
  "        match, including the ability to switch players between the team lineup\n" +
  "        and non-playing list, and change their positions on the team lineup\n" +
  "        according to player's preferred position. Once you're ready, you can\n" +
  "        start a match!";
const MatchCenter = () => {
  const isMobile = useMobileView();
  const team = useSelector(getTeamOrFail);
  const {
    saveLineup,
    handleRowClicked,
    teamSheetId,
    selectedRow,
    lineupIsReady,
    lineupIsLoading,
    playersInLineup,
    playersNotInLineup,
    averageSkill,
  } = useTeamLineup(team.id);
  const {
    response: responseMatch,
    loading: matchIsLoading,
    sendData: sendStartMatch,
  } = useSendData<{ difficulty_rating: number; team_sheet: number }, MatchData>(
    createTeamMatchResultsUrl(team.id),
    "post"
  );
  const { enqueueSnackbar } = useSnackbar();
  const [difficulty, setDifficulty] = useState(5);

  const handleOnSaveClick = () => {
    return saveLineup()
      .then(() => {
        enqueueSnackbar("Lineup successfully saved!", { variant: "success" });
      })
      .catch((e) =>
        enqueueSnackbar(getFirstErrorMessage(e, "Error saving lineup!"), {
          variant: "error",
        })
      );
  };

  const handleMatchStartClick = () => {
    handleOnSaveClick().then(() => {
      sendStartMatch({
        difficulty_rating: difficulty,
        team_sheet: teamSheetId as number,
      }).catch((e) => {
        enqueueSnackbar(getFirstErrorMessage(e, "Error starting match!"), {
          variant: "error",
        });
      });
    });
  };

  if (responseMatch) {
    return <Match isSimulated matchData={responseMatch} />;
  }

  const onDifficultyChange = (difficulty: number) => {
    setDifficulty(difficulty);
  };

  const isLoading = lineupIsLoading || matchIsLoading;
  return (
    <>
      <PageTitle title={"MATCH CENTER"} />
      <PageDescription>{matchCenterPageDescription}</PageDescription>
      <PageDescription>
        To switch players between the lists, <span className={"font-bold"}> click </span>{" "}
        on the two specific players you want to switch.
      </PageDescription>
      <PageDescription>
        Keep in mind, that players with <span className={"font-bold"}> low stamina </span>{" "}
        don't perform well!
      </PageDescription>
      <Grid container columns={isMobile ? 6 : 10} spacing={8} className="pt-8 px-10">
        <Grid item xs={6}>
          <SubPageTitle content="Lineup for next match" />
          <SheetTable
            averageSkill={averageSkill}
            handleRowClicked={handleRowClicked}
            displayPlayingPosition
            playersInLineup={playersInLineup}
            selectedRow={selectedRow}
            defaultOrderBy="playingPosition"
          />
          {playersInLineup && (
            <div className={"flex mt-8 items-center justify-around"}>
              <div>
                <SaveButton onClick={handleOnSaveClick} loading={isLoading} />
              </div>
              <div>
                <SimulateMatchOptions
                  onDifficultyChange={onDifficultyChange}
                  difficulty={difficulty}
                  handleClick={handleMatchStartClick}
                  isLoading={isLoading}
                  lineupIsReady={lineupIsReady}
                />
              </div>
            </div>
          )}
        </Grid>
        <Grid item xs={isMobile ? 8 : 4}>
          <SubPageTitle content="Not playing in next match" />
          <SheetTable
            averageSkill={averageSkill}
            handleRowClicked={handleRowClicked}
            displayPlayingPosition={false}
            playersInLineup={playersNotInLineup}
            selectedRow={selectedRow}
            defaultOrderBy="player.preferred_position"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MatchCenter;
