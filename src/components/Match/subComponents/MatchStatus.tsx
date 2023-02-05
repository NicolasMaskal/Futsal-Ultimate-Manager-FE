import { MatchData } from "../../../models";
import SubPageTitle from "../../Generic/SubPageTitle";
import React from "react";
import Button from "@mui/material/Button";

const MatchStatus: React.FC<{
  currentMinute: number;
  skipToEnd: () => void,
  matchData: MatchData;
}> = ({ currentMinute, matchData, skipToEnd }) => {
  if (currentMinute <= 40) {
    return (
      <>
        <SubPageTitle content={`${currentMinute}'`} />
        <div className="flex justify-center">
          <Button color="error" variant="contained" onClick={skipToEnd}>
            Skip to end
          </Button>
        </div>
      </>
    );
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
