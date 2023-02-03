import {BE_PLAYERS_URL, BE_TEAMS_URL} from "../constants/be-urls";

export const createTeamPlayersUrl = (teamId: number) => {
    return `${BE_TEAMS_URL}${teamId}/${BE_PLAYERS_URL}`
}

export const createTeamSellPlayersUrl = (teamId: number) => {
    return `${BE_TEAMS_URL}${teamId}/sell-players/`
}

export const createTeamMatchResultsUrl = (teamId: number) => {
    return `${BE_TEAMS_URL}${teamId}/match-results/`
}