import { MatchData } from "../../../models";
import SubPageTitle from "../../Generic/SubPageTitle";
import React from "react";

const MatchStatus: React.FC<{
  currentMinute: number;
  matchData: MatchData;
}> = ({ currentMinute, matchData}) => {
  if (currentMinute <= 40) {
    return <SubPageTitle content={`${currentMinute}'`} />;
  }

  let summary = "It's a draw!";
  if (matchData.player_goals > matchData.cpu_goals) {
    summary = "Congratulations, you've won!";
  }
  if (matchData.player_goals < matchData.cpu_goals) {
    summary = "Unfortunately, you've lost.";
  }
  return <SubPageTitle content={summary} />;
};

export default MatchStatus;
