import { RootState } from "../store";

export const getUser = (state: RootState) => {
  return state.user.user;
};

export const getTeam = (state: RootState) => {
  return state.user.user?.active_team;
};

export const getTeamOrFail = (state: RootState) => {
  return state.user.user!.active_team!;
};

export const getAppStatus = (state: RootState) => {
  return state.user.appStatus;
};
