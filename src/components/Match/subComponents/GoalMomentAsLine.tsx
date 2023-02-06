import React from "react";
import { GoalMoment } from "../../../models";
import Typography from "@mui/material/Typography";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const GoalMomentAsLine: React.FC<{
  goalMoment: GoalMoment;
  currentMinute: number;
}> = ({ goalMoment, currentMinute }) => {
  return (
    <Typography
      className="pl-5"
      color={currentMinute === goalMoment.minute ? "red" : "black"}
    >
      <Typography component={"span"} display={"inline"} className={"font-bold"}>
        {`${goalMoment.minute}'  `.padStart(5, "0")}
      </Typography>
      <SportsSoccerIcon sx={{ verticalAlign: "text-bottom" }} />
      {goalMoment.goal_scorer.name}
      {goalMoment.assister && `(${goalMoment.assister.name})`}
    </Typography>
  );
};
export default GoalMomentAsLine;
