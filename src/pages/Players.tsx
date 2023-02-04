import React, { useCallback } from "react";
import { HeadCellType } from "../components/Table/subComponents/MyTableHeader";
import { Player } from "../models";
import PageTitle from "../components/Generic/PageTitle";
import PlayerRow from "../components/Table/rowComponents/PlayerRow";
import CustomTable from "../components/Table/CustomTable";
import PageDescription from "../components/Packs/PageDescription";
import useFetchData from "../hooks/Generic/useFetchData";
import { createTeamPlayersUrl } from "../utils/url-helpers";
import { useAppSelector } from "../hooks/Generic/hooks";
import { getTeamOrFail } from "../selectors/user";
import PlayersInfo from "../components/Players/PlayersInfo";

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

export const playersPageDescription =
  "Here you can see a comprehensive table of all players currently on the\n" +
  "        user's team. The table includes important information providing a clear\n" +
  "        and easy way to track the performance of the team.";

export interface FetchedPlayers {
  team_skill: number;
  average_skill: number;
  player_amount_considered: number;
  players: Player[];
}

const Players = () => {
  const team = useAppSelector(getTeamOrFail);
  const { data, fetchData } = useFetchData<FetchedPlayers>(createTeamPlayersUrl(team.id));
  const onSellCallback = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <PageTitle title="PLAYERS" />
      <PageDescription>{playersPageDescription}</PageDescription>
      <PlayersInfo data={data} />
      <CustomTable
        RowComponent={PlayerRow}
        objects={data?.players}
        headCells={headCells}
        defaultOrderBy={"preferred_position"}
        defaultOrder={"desc"}
        pagination={true}
        tableWidthInGrid={10}
        onRowDeleteCallback={onSellCallback}
        additionalInfo={{
          averageSkill: data?.average_skill,
          showHistory: true,
        }}
      />
    </>
  );
};

export default Players;
