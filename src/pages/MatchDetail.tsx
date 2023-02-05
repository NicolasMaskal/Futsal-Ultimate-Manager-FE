import { useParams } from "react-router";
import useFetchData from "../hooks/Generic/useFetchData";
import { createTeamMatchResultDetailUrl } from "../utils/url-helpers";
import { useAppDispatch, useAppSelector } from "../hooks/Generic/hooks";
import { getTeamOrFail } from "../selectors/user";
import React, { useEffect } from "react";
import { MatchData } from "../models";
import { Match } from "../components/Match/Match";

const MatchDetail = () => {
  let { matchId } = useParams();
  const team = useAppSelector(getTeamOrFail);
  const { data, isLoading } = useFetchData<MatchData>(
    createTeamMatchResultDetailUrl(team.id, parseInt(matchId as string))
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading) {
      // dispatch(setStatusLoading());
    } else {
      // dispatch(setStatusLoaded());
    }
  }, [dispatch, isLoading]);
  if (data) {
    return (
      <div className={"pb-48"}>
        <Match matchData={data!} />{" "}
      </div>
    );
  }
  return <></>;
};

export default MatchDetail;
