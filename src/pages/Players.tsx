import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Container, Skeleton } from "@mui/material";
import { HeadCellType } from "../components/Table/subComponents/MyTableHeader";
import { dummyPlayers } from "./dummyReturns";
import { Player } from "../models";
import PageTitle from "../components/PageTitle";
import PlayerRow from "../components/Table/rowComponents/PlayerRow";
import CustomTable from "../components/Table/CustomTable";

const headCells: HeadCellType[] = [
  {
    id: "",
    alignment: undefined,
    label: "",
  },
  {
    id: "name",
    alignment: "left",
    label: "Name",
  },
  {
    id: "preferred_position",
    alignment: "left",
    label: "Position",
  },
  {
    id: "skill",
    alignment: "right",
    label: "Skill",
  },

  {
    id: "matches_played",
    alignment: "right",
    label: "Matches Played",
  },
  {
    id: "goals_scored",
    alignment: "right",
    label: "Goals Scored",
  },
  {
    id: "assists_made",
    alignment: "right",
    label: "Assists Made",
  },
  {
    id: "stamina_left",
    alignment: "right",
    label: "Stamina left",
  },
  {
    id: "sell_price",
    alignment: "right",
    label: "Sell price",
  },
  {
    id: "",
    alignment: undefined,
    label: "",
  },
];

const Players = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [averageSkill, setAverageSkill] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPlayers(dummyPlayers);
      setAverageSkill(65);
    }, 1000);
  }, []);

  return (
    <>
      <PageTitle title="Players" />
      {players && averageSkill ? (
        <>
          <Typography sx={{ textAlign: "center" }} variant="body1">
            Squad size: {players ? players.length : ""}
          </Typography>
          <Typography sx={{ textAlign: "center", pb: 1 }}>
            Average skill: {averageSkill}
          </Typography>
        </>
      ) : (
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Skeleton width={200} />
          <Skeleton width={200} />
        </Container>
      )}
      <CustomTable
        RowComponent={PlayerRow}
        objects={players}
        headCells={headCells}
        pagination={false}
        size={10}
        additionalInfo={averageSkill}
      />
    </>
  );
};

export default Players;
