import { GoalMoment, TeamShortDetail } from "../../../models";
import Typography from "@mui/material/Typography";
import React from "react";
import useMobileView from "../../../hooks/Generic/useMobileView";

const TeamName: React.FC<{
  team: TeamShortDetail;
  goalAmount: number;
  currentMoment: GoalMoment | undefined;
}> = ({ team, goalAmount, currentMoment }) => {
  const scoreFreshUpdate = currentMoment && currentMoment.goal_scorer.team.id === team.id;
  const mobileView = useMobileView();
  const fontSize = mobileView ? "1rem" : "1.5rem";
  return (
    <Typography fontSize={fontSize} className={"font-bold pb-1"} textAlign={"center"}>
      {`${team.name} `}
      <Typography
        component={"span"}
        display={mobileView ? "block" : "inline"}
        fontSize={fontSize}
        className={"font-bold pb-1"}
        color={scoreFreshUpdate ? "red" : "black"}
      >
        {`(${goalAmount})`}
      </Typography>
    </Typography>
  );
};

export default TeamName;
