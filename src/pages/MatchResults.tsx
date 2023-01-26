import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import PageTitle from "../components/PageTitle";

import { dummyMatchResults } from "./dummyReturns";
import { HeadCellType } from "../components/Table/subComponents/MyTableHeader";
import { MatchResult } from "../models";
import { Container, Skeleton } from "@mui/material";
import CustomTable from "../components/Table/CustomTable";
import MatchRow from "../components/Table/rowComponents/MatchRow";
import PageDescription from "../components/PageDescription";

const headCells: HeadCellType[] = [
  {
    id: null,
    alignment: undefined,
    label: "",
  },
  {
    id: "cpu_team_name", // TODO add parsing
    alignment: "left",
    label: "Opponent Name",
  },
  {
    id: null,
    alignment: "center",
    label: "Score",
  },
  // {
  //   id: "cpu_average_skill",
  //   alignment: "right",
  //   label: "Opponent Skill",
  // },
  {
    id: "date",
    alignment: "center",
    label: "Date & Time",
  },
];

const MatchResults = () => {
  const [matchResults, setMatchResults] = useState<MatchResult[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setMatchResults(dummyMatchResults);
    }, 500);
  }, []);

  return (
    <>
      <PageTitle title="MATCH RESULTS" />
      <PageDescription>
        Here you can see a list of match results of your team. More info about
        each match is available in their detail.
      </PageDescription>
      {matchResults ? (
        <div className={"text-center pb-4"}>
          <div>
            <Typography display="inline" className="font-bold pb-4">
              {"Wins: "}
            </Typography>
            <Typography display="inline">{52}</Typography>
          </div>
          <div>
            <Typography display="inline" className="font-bold pb-4">
              {"Draws: "}
            </Typography>
            <Typography display="inline">{41}</Typography>
          </div>
          <div>
            <Typography display="inline" className="font-bold pb-4">
              {"Loses: "}
            </Typography>
            <Typography display="inline">{19}</Typography>
          </div>
        </div>
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
          <Skeleton width={200} />
        </Container>
      )}
      <CustomTable
        RowComponent={MatchRow}
        objects={matchResults}
        headCells={headCells}
        defaultOrderBy={"date"}
        defaultOrder={"desc"}
        pagination={true}
        size={10}
        additionalInfo={undefined} //TODO find about default props
      />
    </>
  );
};

export default MatchResults;
