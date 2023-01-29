import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Container, Skeleton } from "@mui/material";
import { HeadCellType } from "../components/Table/subComponents/MyTableHeader";
import { dummyPlayers } from "./dummyReturns";
import { Player } from "../models";
import PageTitle from "../components/PageTitle";
import PlayerRow from "../components/Table/rowComponents/PlayerRow";
import CustomTable from "../components/Table/CustomTable";
import PageDescription from "../components/PageDescription";

const headCells: HeadCellType[] = [
  {
    id: null,
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
  // {
  //   id: "stamina_left",
  //   alignment: "right",
  //   label: "Stamina left",
  // },
  {
    id: "sell_price",
    alignment: "right",
    label: "Sell price",
  },
  {
    id: null,
    alignment: undefined,
    label: "",
  },
];

const Players = () => {
  const [players, setPlayers] = useState<Player[] | null>(null);
  const [averageSkill, setAverageSkill] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPlayers(dummyPlayers);
      setAverageSkill(15);
    }, 500);
  }, []);

  return (
    <>
      <PageTitle title="PLAYERS" />
      <PageDescription>
        Here you can see a comprehensive table of all players currently on the
        user's team. The table includes important information providing a clear
        and easy way to track the performance of the team.
      </PageDescription>
      {players && averageSkill ? (
        <article className={"text-center pb-4"}>
          <div>
            <Typography
              className="font-bold"
              variant="body1"
              display={"inline"}
            >
              {"Squad size: "}
            </Typography>
            <Typography display="inline">
              {players ? players.length : ""}
            </Typography>
          </div>
          <div>
            <Typography display="inline" className="font-bold pb-4">
              {"Average skill: "}
            </Typography>
            <Typography display="inline">{averageSkill}</Typography>
          </div>
        </article>
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
        defaultOrderBy={"preferred_position"}
        defaultOrder={"desc"}
        pagination={true}
        tableWidthInGrid={10}
        additionalInfo={{ averageSkill, showHistory: true }}
      />
    </>
  );
};

export default Players;
