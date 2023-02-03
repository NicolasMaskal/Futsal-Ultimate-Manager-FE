import React, { useEffect, useState } from "react";
import SheetTable from "../components/Table/SheetTable";
import Grid from "@mui/material/Grid";
import PageTitle from "../components/Generic/PageTitle";
import { MatchData, PlayerInLineup } from "../models";
import PageDescription from "../components/Packs/PageDescription";
import useMobileView from "../hooks/Generic/useMobileView";
import { useSnackbar } from "notistack";
import SubPageTitle from "../components/Generic/SubPageTitle";
import SimulateMatchOptions from "../components/PreMatch/SimulateMatchOptions";
import {
  dummyMatchData,
  dummyPlayersInLineup,
  dummyPlayersNotPlaying,
} from "./dummyReturns";
import { Match } from "../components/Match/Match";
import SaveButton from "../components/Buttons/SaveButton";

export const matchCenterPageDescription =
  "This page allows you to manage your team's lineup for your upcoming\n" +
  "        match, including the ability to switch players between the team lineup\n" +
  "        and non-playing list, and change their positions on the team lineup\n" +
  "        according to player's preferred position. Once you're ready, you can\n" +
  "        start a match!";
const MatchCenter = () => {
  const isMobile = useMobileView();
  const [playersOnScreen, setPlayersOnScreen] = useState<
    PlayerInLineup[] | null
  >(null);

  const [selectedRow, setSelectedRow] = useState<PlayerInLineup | null>(null);

  const findIndexInArray = (playerToFind: PlayerInLineup) => {
    return playersOnScreen?.findIndex(
      (player) => player.id === playerToFind.id
    )!;
  };
  const handleRowClicked = (clickedRow: PlayerInLineup) => {
    if (!selectedRow) {
      setSelectedRow(clickedRow);
    } else {
      const index1 = findIndexInArray(selectedRow);
      const index2 = findIndexInArray(clickedRow);
      const newPlayersOnScreen = [...playersOnScreen!];
      newPlayersOnScreen[index1] = new PlayerInLineup(
        clickedRow.player,
        selectedRow.playingPosition
      );
      newPlayersOnScreen[index2] = new PlayerInLineup(
        selectedRow.player,
        clickedRow.playingPosition
      );
      setPlayersOnScreen(newPlayersOnScreen);
      setSelectedRow(null);
    }
  };

  useEffect(() => {
    // TODO Fetch all players, then filter out those that exist in the sheet, then wrap around each class with PlayerLineup
    setTimeout(() => {
      setPlayersOnScreen(dummyPlayersInLineup.concat(dummyPlayersNotPlaying));
    }, 500);
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [matchData, setMatchData] = useState<MatchData | null>(null);

  const handleOnSaveClick = () => {
    // TODO Add api functionality
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      enqueueSnackbar("Lineup successfully saved!", { variant: "success" });
    }, 500);
  };

  const handleMatchStartClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMatchData(dummyMatchData);
    }, 500);
  };

  const handleMatchFinishClick = () => {
    setMatchData(null);
  };

  const playersInLineup = playersOnScreen?.filter(
    (playerInLineup) => playerInLineup.playingPosition !== "Not Playing"
  );
  const playersNotInLineup = playersOnScreen?.filter(
    (playerInLineup) =>
      playerInLineup.playingPosition === "Not Playing" && playerInLineup.player
  );

  if (matchData) {
    return (
      <Match
        handleMatchFinishClick={handleMatchFinishClick}
        matchData={matchData}
      />
    );
  }

  return (
    <>
      <PageTitle title={"MATCH CENTER"} />
      <PageDescription>{matchCenterPageDescription}</PageDescription>
      <PageDescription>
        To switch players between the lists, click on the two specific players
        you want to switch
      </PageDescription>
      <Grid
        container
        columns={isMobile ? 8 : 12}
        spacing={8}
        className="pt-8 px-10"
      >
        <Grid item xs={8}>
          <SubPageTitle content="Lineup for next match" />
          <SheetTable
            handleRowClicked={handleRowClicked}
            displayPlayingPosition
            playersInLineup={playersInLineup}
            selectedRow={selectedRow}
          />
          {playersOnScreen && (
            <div className={"flex mt-8 items-center justify-around"}>
              <div>
                <SaveButton
                  handleOnSaveClick={handleOnSaveClick}
                  isLoading={isLoading}
                />
              </div>
              <div>
                <SimulateMatchOptions
                  handleClick={handleMatchStartClick}
                  isLoading={isLoading}
                />
              </div>
            </div>
          )}
        </Grid>
        <Grid item xs={isMobile ? 8 : 4}>
          <SubPageTitle content="Not playing in next match" />
          <SheetTable
            handleRowClicked={handleRowClicked}
            displayPlayingPosition={false}
            playersInLineup={playersNotInLineup}
            selectedRow={selectedRow}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MatchCenter;
