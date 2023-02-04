import { BE_PLAYERS_URL, BE_TEAMS_URL } from "../constants/be-urls";

export const createTeamPlayersUrl = (teamId: number) => {
  return `${BE_TEAMS_URL}${teamId}/${BE_PLAYERS_URL}`;
};

export const createTeamSellPlayersUrl = (teamId: number) => {
  return `${BE_TEAMS_URL}${teamId}/sell-players/`;
};

export const createTeamMatchResultsUrl = (teamId: number) => {
  return `${BE_TEAMS_URL}${teamId}/match-results/`;
};

export const createTeamBuyPackUrl = (teamId: number) => {
  return `${BE_TEAMS_URL}${teamId}/buy-pack/`;
};

export const createTeamSheetsUrl = (teamId: number) => {
  return `${BE_TEAMS_URL}${teamId}/team-sheets/`;
};

export const createTeamSheetsDetailUrl = (teamId: number, teamSheetId: number) => {
  return `${BE_TEAMS_URL}${teamId}/team-sheets/${teamSheetId}/`;
};
