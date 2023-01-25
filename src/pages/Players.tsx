import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Container, Skeleton } from "@mui/material";
import { HeadCellType } from "../components/Table/subComponents/MyTableHeader";
import { dummyPlayers } from "./dummyReturns";
import { Player } from "../models";
import PageTitle from "../components/PageTitle";
import PlayerRow from "../components/Table/rowComponents/PlayerRow";
import CustomTable from "../components/Table/CustomTable";
import SportsSoccerRoundedIcon from "@mui/icons-material/SportsSoccerRounded";
import Footer from "../components/Footer";

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

const getIconForHeader: (headerText: string | null) => JSX.Element = (
  headerText
) => {
  if (headerText === "goals_scored") {
    return <SportsSoccerRoundedIcon />;
  }
  return <></>;
};

const Players = () => {
  const [players, setPlayers] = useState<Player[] | null>(null);
  const [averageSkill, setAverageSkill] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPlayers(dummyPlayers);
      setAverageSkill(65);
    }, 1000);
  }, []);

  return (
    <>
      <PageTitle title="PLAYERS" />
      <Typography sx={{ textAlign: "center", pb: 2 }}>
        Here you can see a list of players playing for your team. More info
        about each player is available in their detail.
      </Typography>
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
            <Typography display="inline">{players ? players.length : ""}</Typography>
          </div>

          <Typography
              display="inline"
            className="font-bold pb-4"
          >
            {"Average skill: "}
          </Typography>
          <Typography display="inline">{averageSkill}</Typography>
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
        pagination={true}
        size={10}
        additionalInfo={averageSkill}
        iconHeaderMapper={getIconForHeader}
      />
    </>
  );
};

export default Players;
