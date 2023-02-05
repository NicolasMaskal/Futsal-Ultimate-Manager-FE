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
import { useAppDispatch, useAppSelector } from "../../hooks/Generic/hooks";
import { getTeamOrFail } from "../../selectors/user";
import { teamCoinsIncrease } from "../../store/user-slice";

const SCORER_HEIGHT = 225;
export const Match: React.FC<{
  matchData: MatchData;
  isSimulated?: boolean;
}> = ({ matchData, isSimulated = false }) => {
  const team = useAppSelector(getTeamOrFail);
  const [currentMinute, setCurrentMinute] = useState(0);
  const [timeoutTime, setTimeoutTime] = useState(1000);

  const playerMoments = matchData.goal_moments.filter(
    (moment) => moment.team.id === team.id && moment.minute <= currentMinute
  );
  const cpuMoments = matchData.goal_moments.filter(
    (moment) => moment.team.id !== team.id && moment.minute <= currentMinute
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

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isSimulated) {
      setCurrentMinute(41);
      return;
    }
    if (currentMinute > 40) {
      dispatch(teamCoinsIncrease({ coins: matchData.coins_reward }));
      return;
    }
    const timeoutId = setTimeout(() => {
      setCurrentMinute(currentMinute + 1);
    }, timeoutTime);

    return () => clearTimeout(timeoutId);
  }, [currentMinute, dispatch, isSimulated, matchData.coins_reward, timeoutTime]);
  const pageTitle =
    currentMinute <= 40 ? "Simulated Match (40 minutes)" : "Match Result Detail";

  const skipToEnd = () => setCurrentMinute(41);

  return (
    <>
      <PageTitle title={pageTitle} />
      <Divider sx={{ borderBottomWidth: 5 }} />
      {isSimulated && (
        <MatchStatus
          skipToEnd={skipToEnd}
          currentMinute={currentMinute}
          matchData={matchData}
        />
      )}
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
        {isSimulated && (
          <Grid item xs={5} className="pt-20">
            <Box sx={{ minHeight: 150 }}>
              {currentMinute < 40 ? (
                <GoalDescription goalMoment={currentMoment} />
              ) : (
                <MatchRewards coinReward={matchData.coins_reward} />
              )}
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
};
