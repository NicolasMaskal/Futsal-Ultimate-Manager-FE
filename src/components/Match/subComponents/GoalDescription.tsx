import PageDescription from "../../Packs/PageDescription";
import Typography from "@mui/material/Typography";
import React from "react";
import { GoalMoment, Player } from "../../../models";
import reactStringReplace from "react-string-replace";

const arrayGoalAssists = [
  "An outstanding goal was scored by [GOALSCORER], who put in a great effort, and it was all thanks to the assist from [ASSISTER], who set up the play perfectly!",
  "What an incredible goal, expertly executed by [GOALSCORER] and made possible by the skillful assist of [ASSISTER]!",
  "[GOALSCORER]'s goal was truly spectacular, an exemplar of the player's talent and hard work, and it was all made possible by [ASSISTER]'s contribution, who provided the assist that led to the successful scoring play!",
  "[GOALSCORER]'s goal was a thing of beauty, a testament to their skill and determination, and it was all made possible by the unselfish play of [ASSISTER], who delivered the perfect assist!",
  "[GOALSCORER]'s goal was a moment of brilliance, a showcase of their exceptional abilities, and it was all thanks to the visionary play of [ASSISTER], who provided the assist that set it all up!",
  "[GOALSCORER]'s goal was a true masterpiece, a display of their superior talent and effort, and it was all made possible by [ASSISTER]'s invaluable assist, who played a key role in the scoring play!",
  "Assisted by [ASSISTER], [GOALSCORER]'s goal was a true work of art!",
  "With a perfect assist by [ASSISTER], [GOALSCORER]'s goal was a moment of pure brilliance!",
  "Thanks to [ASSISTER]'s assist, [GOALSCORER]'s goal was a triumph of hard work and determination!",
  "[GOALSCORER]'s goal was a shining example of teamwork, assisted by [ASSISTER]!",
  "[GOALSCORER]'s goal was a triumph of focus and determination, thanks to [ASSISTER]'s assist!",
  "[GOALSCORER]'s goal was a true display of the player's superior talents, with [ASSISTER]'s help!",
  "[GOALSCORER]'s goal was a moment of pure magic on the field, assisted by [ASSISTER]!",
  "Assisted by [ASSISTER], [GOALSCORER]'s goal was a true masterpiece of precision and skill!",
  "With [ASSISTER]'s assist, [GOALSCORER]'s goal was a moment of pure joy for the team and fans!",
  "[GOALSCORER]'s goal was a perfect culmination of skill, effort and teamwork, with [ASSISTER]'s assist!",
];

const arraysGoals = [
  "[GOALSCORER]'s goal was a true work of art, a testament to their skill and precision!",
  "[GOALSCORER]'s goal was a moment of pure magic, a showcase of their exceptional abilities!",
  "[GOALSCORER]'s goal was a triumph of hard work and determination!",
  "[GOALSCORER]'s goal was a shining example of what can be achieved with focus and dedication!",
  "[GOALSCORER]'s goal was a true display of the player's talents and determination!",
  "[GOALSCORER]'s goal was a true masterpiece of precision and skill!",
  "[GOALSCORER]'s goal was a moment of pure brilliance on the field!",
  "[GOALSCORER]'s goal was a testament to their hard work and dedication!",
  "[GOALSCORER]'s goal was a shining example of the player's exceptional abilities!",
  "[GOALSCORER]'s goal was a triumph of focus and determination!",
  "[GOALSCORER]'s goal was a true display of the player's superior talents!",
  "[GOALSCORER]'s goal was a moment of pure magic on the field!",
  "[GOALSCORER]'s goal was a work of art, expertly executed by [GOALSCORER]!",
  "[GOALSCORER]'s goal was a moment of pure joy for the team and fans!",
  "[GOALSCORER]'s goal was a perfect culmination of skill, effort and teamwork!",
];

const generateRandomText = (assisterExists: boolean) => {
  if (assisterExists) {
    return arrayGoalAssists[Math.floor(Math.random() * arrayGoalAssists.length)];
  }
  return arraysGoals[Math.floor(Math.random() * arraysGoals.length)];
};

const getGoalText = (goalScorer: Player, assister: Player | null) => {
  const text = generateRandomText(assister !== null);
  let replaced = reactStringReplace(text, "[GOALSCORER]", () => (
    <span className="font-bold">{goalScorer.name}</span>
  ));
  if (assister) {
    replaced = reactStringReplace(replaced, "[ASSISTER]", () => (
      <span className="font-bold">{assister.name}</span>
    ));
  }
  return replaced;
};
const GoalDescription: React.FC<{ goalMoment: GoalMoment | undefined }> = ({
  goalMoment,
}) => {
  if (!goalMoment) {
    return (
      <>
        <Typography align="center" className="font-bold" fontSize={"1.5rem"}>
          Simulating...
        </Typography>
      </>
    );
  }
  const goalScorer = goalMoment.goal_scorer;
  const assister = goalMoment.assister;
  const goalText = getGoalText(goalScorer, assister);
  return (
    <>
      <Typography align="center" className="font-bold" fontSize={"1.5rem"}>
        Goal for {goalMoment.goal_scorer.team.name}!
      </Typography>

      <PageDescription>{goalText}</PageDescription>
    </>
  );
};

export default GoalDescription;
