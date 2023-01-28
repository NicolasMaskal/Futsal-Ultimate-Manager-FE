import React, { useEffect, useState } from "react";
import SheetTable from "../components/Table/SheetTable";
import Grid from "@mui/material/Grid";
import PageTitle from "../components/PageTitle";
import { PlayerInLineup } from "../models";
import PageDescription from "../components/PageDescription";
import useMobileView from "../hooks/useMobileView";
import Typography from "@mui/material/Typography";

const dummyPlayersInLineup: PlayerInLineup[] = [
  {
    id: 26,
    player: {
      id: 26,
      name: "John 1",
      preferred_position: "attacker",
      skill: 13,
      matches_played: 0,
      goals_scored: 0,
      assists_made: 0,
      sell_price: 15,
      team: {
        id: 10,
        name: "new team",
        owner: 4,
      },
    },
    playingPosition: "Goalkeeper",
  },
  {
    id: 27,
    player: {
      id: 27,
      name: "John 2",
      preferred_position: "goalkeeper",
      skill: 13,
      matches_played: 0,
      goals_scored: 0,
      assists_made: 0,
      sell_price: 15,
      team: {
        id: 10,
        name: "new team",
        owner: 4,
      },
    },
    playingPosition: "Defender Left",
  },
  {
    id: 28,
    player: {
      id: 28,
      name: "John 3",
      preferred_position: "goalkeeper",
      skill: 13,
      matches_played: 0,
      goals_scored: 0,
      assists_made: 0,
      sell_price: 15,
      team: {
        id: 10,
        name: "new team",
        owner: 4,
      },
    },
    playingPosition: "Defender Right",
  },
  {
    id: 29,
    player: {
      id: 29,
      name: "John 4",
      preferred_position: "attacker",
      skill: 13,
      matches_played: 0,
      goals_scored: 0,
      assists_made: 0,
      sell_price: 15,
      team: {
        id: 10,
        name: "new team",
        owner: 4,
      },
    },
    playingPosition: "Attacker Left",
  },
  {
    id: 30,
    player: {
      id: 30,
      name: "John 5",
      preferred_position: "defender",
      skill: 13,
      matches_played: 0,
      goals_scored: 0,
      assists_made: 0,
      sell_price: 15,
      team: {
        id: 10,
        name: "new team",
        owner: 4,
      },
    },
    playingPosition: "Attacker Right",
  },
];

const dummyPlayersNotPlaying: PlayerInLineup[] = [
  {
    id: 31,
    player: {
      id: 31,
      name: "John 6",
      preferred_position: "goalkeeper",
      skill: 13,
      matches_played: 0,
      goals_scored: 0,
      assists_made: 0,
      sell_price: 15,
      team: {
        id: 10,
        name: "new team",
        owner: 4,
      },
    },
    playingPosition: "Not Playing",
  },
  {
    id: 32,
    player: {
      id: 32,
      name: "John 7",
      preferred_position: "goalkeeper",
      skill: 13,
      matches_played: 0,
      goals_scored: 0,
      assists_made: 0,
      sell_price: 15,
      team: {
        id: 10,
        name: "new team",
        owner: 4,
      },
    },
    playingPosition: "Not Playing",
  },
  {
    id: 33,
    player: {
      id: 33,
      name: "John 8",
      preferred_position: "defender",
      skill: 13,
      matches_played: 0,
      goals_scored: 0,
      assists_made: 0,
      sell_price: 15,
      team: {
        id: 10,
        name: "new team",
        owner: 4,
      },
    },
    playingPosition: "Not Playing",
  },
  {
    id: 34,
    player: {
      id: 34,
      name: "John Micks 9",
      preferred_position: "goalkeeper",
      skill: 13,
      matches_played: 0,
      goals_scored: 0,
      assists_made: 0,
      sell_price: 15,
      team: {
        id: 10,
        name: "new team",
        owner: 4,
      },
    },
    playingPosition: "Not Playing",
  },
  {
    id: 35,
    player: {
      id: 35,
      name: "John Micks 10",
      preferred_position: "attacker",
      skill: 13,
      matches_played: 0,
      goals_scored: 0,
      assists_made: 0,
      sell_price: 15,
      team: {
        id: 10,
        name: "new team",
        owner: 4,
      },
    },
    playingPosition: "Not Playing",
  },
  {
    id: 36,
    player: {
      id: 36,
      name: "John Micks 11",
      preferred_position: "goalkeeper",
      skill: 13,
      matches_played: 0,
      goals_scored: 0,
      assists_made: 0,
      sell_price: 15,
      team: {
        id: 10,
        name: "new team",
        owner: 4,
      },
    },
    playingPosition: "Not Playing",
  },
];

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

  const playersInLineup = playersOnScreen?.filter(
    (playerInLineup) => playerInLineup.playingPosition !== "Not Playing"
  );
  const playersNotInLineup = playersOnScreen?.filter(
    (playerInLineup) =>
      playerInLineup.playingPosition === "Not Playing" && playerInLineup.player
  );

  console.log("playerIn: ", playersInLineup)
  console.log("playerNotIn: ", playersNotInLineup)
  console.log("playerScreen: ", playersOnScreen)

  return (
    <>
      <PageTitle title={"MATCH CENTER"} />
      <PageDescription>
        This page allows you to manage your team's lineup for your upcoming
        match, including the ability to switch players between the team lineup
        and non-playing list, and change their positions on the team lineup
        according to player's preferred position. Once you're ready, you can
        start a match!
      </PageDescription>
      <Grid container columns={isMobile ? 8 : 12} spacing={4} className="pt-8">
        <Grid item xs={8}>
          <Typography
            fontSize={"1.5rem"}
            className={"font-bold pb-1"}
            textAlign={"center"}
          >
            Lineup for next match
          </Typography>
          <SheetTable
            handleRowClicked={handleRowClicked}
            displayPlayingPosition
            playersInLineup={playersInLineup}
            selectedRow={selectedRow}
          ></SheetTable>
        </Grid>
        <Grid item xs={isMobile ? 8 : 4}>
          <Typography
            fontSize={"1.5rem"}
            className={"font-bold pb-1"}
            textAlign={"center"}
          >
            Not playing in next match
          </Typography>
          <SheetTable
            handleRowClicked={handleRowClicked}
            displayPlayingPosition={false}
            playersInLineup={playersNotInLineup}
            selectedRow={selectedRow}
          ></SheetTable>
        </Grid>
      </Grid>
    </>
  );
};

export default MatchCenter;
