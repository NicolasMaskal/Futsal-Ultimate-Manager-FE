import { useParams } from "react-router";
import useFetchData from "../hooks/Generic/useFetchData";
import { createTeamMatchResultDetailUrl } from "../utils/url-helpers";
import { useAppSelector } from "../hooks/Generic/hooks";
import { getTeamOrFail } from "../selectors/user";
import React from "react";
import { MatchData } from "../models";
import { Match } from "../components/Match/Match";
import LoadingFullPage from "../components/Generic/LoadingFullPage";

const MatchDetailPage = () => {
  let { matchId } = useParams();
  const team = useAppSelector(getTeamOrFail);
  const { data, error } = useFetchData<MatchData>(
    createTeamMatchResultDetailUrl(team.id, parseInt(matchId as string))
  );
  if (error) {
    throw Error();
  }
  if (data) {
    return (
      <div className={"pb-48"}>
        <Match matchData={data} />{" "}
      </div>
    );
  }
  return <LoadingFullPage />;
};

export default MatchDetailPage;
