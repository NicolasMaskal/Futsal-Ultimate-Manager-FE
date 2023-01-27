import React from "react";
import SheetTable from "../components/Table/SheetTable";
import Grid from "@mui/material/Grid";
import PageTitle from "../components/PageTitle";
import { PlayerInLineup } from "../models";
import PageDescription from "../components/PageDescription";
import useMobileView from "../hooks/useMobileView";

const playersInLineup: PlayerInLineup[] = [
  {
    id: 26,
    name: "John Micks",
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
    playingPos: "Goalkeeper",
  },
  {
    id: 26,
    name: "John Micks",
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
    playingPos: "Defender Left",
  },
  {
    id: 26,
    name: "John Micks",
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
    playingPos: "Defender Right",
  },
  {
    id: 26,
    name: "John Micks",
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
    playingPos: "Attacker Right",
  },
  {
    id: 26,
    name: "John Micks",
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
    playingPos: "Attacker Left",
  },
];

const playersNotPlaying: PlayerInLineup[] = [
  {
    id: 26,
    name: "John Micks",
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
    playingPos: "Not Playing",
  },
  {
    id: 26,
    name: "John Micks",
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
    playingPos: "Not Playing",
  },
  {
    id: 26,
    name: "John Micks",
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
    playingPos: "Not Playing",
  },
  {
    id: 26,
    name: "John Micks",
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
    playingPos: "Not Playing",
  },
  {
    id: 26,
    name: "John Micks",
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
    playingPos: "Not Playing",
  },
];

const MatchCenter = () => {
  const isMobile = useMobileView()
  //TODO Fix broken mobile view
  return (
    <>
      <PageTitle title={"MATCH CENTER"} />
      <PageDescription>
        This page allows you to manage your team's lineup for your upcoming
        match, including the ability to switch players between the team sheet
        and non-playing list, and change their positions on the team sheet
        according to player's preferred position. Once you're ready, you can
        start a match!
      </PageDescription>
      <Grid container className="pt-8" columns={isMobile ? 8 : 12}>
        <Grid item xs={8}>
          <SheetTable
            displayPlayingPosition
            playersInLineup={playersInLineup}
          ></SheetTable>
        </Grid>
        <Grid item xs={4}>
          <SheetTable
            displayPlayingPosition={false}
            playersInLineup={playersNotPlaying}
          ></SheetTable>
        </Grid>
      </Grid>
    </>
  );
};

export default MatchCenter;
