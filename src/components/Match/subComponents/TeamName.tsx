import { GoalMoment, TeamShortDetail } from "../../../models";
import Typography from "@mui/material/Typography";
import React from "react";

const TeamName: React.FC<{
  team: TeamShortDetail;
  goalAmount: number;
  currentMoment: GoalMoment | undefined;
}> = ({ team, goalAmount, currentMoment }) => {
  const scoreFreshUpdate =
    currentMoment && currentMoment.goal_scorer.team.id === team.id;
  return (
    <Typography
      fontSize={"1.5rem"}
      className={"font-bold pb-1"}
      textAlign={"center"}
    >
      {`${team.name} `}
      <Typography
        display={"inline"}
        fontSize={"1.5rem"}
        className={"font-bold pb-1"}
        color={scoreFreshUpdate ? "red" : "black"}
      >
        {`(${goalAmount})`}
      </Typography>
    </Typography>
  );
};

export default TeamName;
