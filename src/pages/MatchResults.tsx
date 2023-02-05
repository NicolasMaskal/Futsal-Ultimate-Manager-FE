import React from "react";
import Typography from "@mui/material/Typography";
import PageTitle from "../components/Generic/PageTitle";
import { HeadCellType } from "../components/Table/subComponents/MyTableHeader";
import { MatchResult } from "../models";
import CustomTable from "../components/Table/CustomTable";
import MatchRow from "../components/Table/rowComponents/MatchRow";
import PageDescription from "../components/Packs/PageDescription";
import useFetchData from "../hooks/Generic/useFetchData";
import { createTeamMatchResultsUrl } from "../utils/url-helpers";
import { useAppSelector } from "../hooks/Generic/hooks";
import { getTeamOrFail } from "../selectors/user";
import { Link } from "react-router-dom";
import { MATCH_CENTER_URL } from "../constants/urls";

const headCells: HeadCellType[] = [
  {
    id: null,
    alignment: undefined,
    label: "",
  },
  {
    id: "cpu_team.name",
    alignment: "left",
    label: "Opponent Name",
  },
  {
    id: null,
    alignment: "center",
    label: "Score",
  },
  {
    id: "date",
    alignment: "center",
    label: "Date & Time",
  },
];

export const resultsPageDescription =
  "Here you can see a list of match results of your team. More info about\n" +
  "        each match is available in their detail.";

const MatchResults = () => {
  const team = useAppSelector(getTeamOrFail);
  const { data } = useFetchData<MatchResult[]>(createTeamMatchResultsUrl(team.id));

  return (
    <>
      <PageTitle title="MATCH RESULTS" />
      <PageDescription>{resultsPageDescription}</PageDescription>
      <div className={"text-center pb-4"}>
        <div>
          <Typography display="inline" className="font-bold pb-4">
            {"Wins: "}
          </Typography>
          <Typography display="inline">{team.wins}</Typography>
        </div>
        <div>
          <Typography display="inline" className="font-bold pb-4">
            {"Draws: "}
          </Typography>
          <Typography display="inline">{team.draws}</Typography>
        </div>
        <div>
          <Typography display="inline" className="font-bold pb-4">
            {"Loses: "}
          </Typography>
          <Typography display="inline">{team.loses}</Typography>
        </div>
      </div>
      {data && data.length === 0 && (
        <PageDescription className="font-bold py-44">
          No matches played yet? Head over to the{" "}
          <Link className="text-sky-500 hover:text-sky-700" to={MATCH_CENTER_URL}>
            match center
          </Link>{" "}
          to play one!
        </PageDescription>
      )}
      {data?.length === 0 || (
        <CustomTable
          RowComponent={MatchRow}
          objects={data}
          headCells={headCells}
          defaultOrderBy={"date"}
          defaultOrder={"desc"}
          pagination={true}
          tableWidthInGrid={10}
          additionalInfo={undefined}
        />
      )}
    </>
  );
};

export default MatchResults;
