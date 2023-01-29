import React, { useEffect, useState } from "react";
import { MatchData } from "../../models";
import PageTitle from "../Generic/PageTitle";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import GoalMomentAsLine from "./subComponents/GoalMomentAsLine";
import GoalDescription from "./subComponents/GoalDescription";
import TeamNameMatch from "./subComponents/TeamName";
import MatchRewards from "./subComponents/MatchRewards";
import MatchStatus from "./subComponents/MatchStatus";
import Box from "@mui/material/Box";

const SCORER_HEIGHT = 225;
export const Match: React.FC<{ matchData: MatchData, handleMatchFinishClick: React.MouseEventHandler }> = ({ matchData, handleMatchFinishClick }) => {
  const [currentMinute, setCurrentMinute] = useState(0);
  const [timeoutTime, setTimeoutTime] = useState(1000);

  const playerMoments = matchData.goal_moments.filter(
    (moment) =>
      moment.goal_scorer.team.id === 10 && moment.minute <= currentMinute
  );
  const cpuMoments = matchData.goal_moments.filter(
    (moment) =>
      moment.goal_scorer.team.id !== 10 && moment.minute <= currentMinute
  );

  const currentMoment = matchData.goal_moments.find(
    (moment) => moment.minute === currentMinute
  );

    useEffect(() => {
      if (currentMoment) {
        setTimeoutTime(4000);
      } else {
        setTimeoutTime(1000);
      }
    }, [currentMoment]);

    useEffect(() => {
      if (currentMinute > 40) {
        return;
      }
      const timeoutId = setTimeout(() => {
        setCurrentMinute(currentMinute + 1);
      }, timeoutTime);

      return () => clearTimeout(timeoutId);
    }, [currentMinute, timeoutTime]);

  return (
    <>
      <PageTitle title="Simulated Match (40 minutes)" />
      <Divider sx={{ borderBottomWidth: 5 }} />
      <MatchStatus currentMinute={currentMinute} matchData={matchData} />
      <Grid
        container
        columns={12}
        className="pt-10"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={5}>
          <TeamNameMatch
            team={matchData.player_team}
            goalAmount={playerMoments.length}
            currentMoment={currentMoment}
          />
          <Divider sx={{ borderBottomWidth: 5 }} />
        </Grid>
        <Grid item xs={5}>
          <TeamNameMatch
            team={matchData.cpu_team}
            goalAmount={cpuMoments.length}
            currentMoment={currentMoment}
          />
          <Divider sx={{ borderBottomWidth: 5 }} />
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ minHeight: SCORER_HEIGHT }}>
          {playerMoments.map((moment) => (
            <GoalMomentAsLine
              key={`Player_${moment.goal_scorer.id}_${moment.minute}`}
              goalMoment={moment}
              currentMinute={currentMinute}
            />
          ))}
          </Box>
        </Grid>
        <Divider
          orientation={"vertical"}
          variant="middle"
          flexItem
          sx={{ my: -5, borderRightWidth: 5 }}
        />
        <Grid item xs={5}>
          <Box sx={{ minHeight: SCORER_HEIGHT }}>
          {cpuMoments.map((moment) => (
            <GoalMomentAsLine
              key={`CPU_${moment.goal_scorer.id}_${moment.minute}`}
              goalMoment={moment}
              currentMinute={currentMinute}
            />
          ))}
          </Box>
        </Grid>
        <Grid item xs={5} className="pt-20">
          <Box sx={{ minHeight: 150 }}>
          {currentMinute < 40 ? (
            <GoalDescription key={currentMinute} goalMoment={currentMoment} />
          ) : (
            <MatchRewards coinReward={matchData.coins_reward} onProceedClick={handleMatchFinishClick} />
          )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
