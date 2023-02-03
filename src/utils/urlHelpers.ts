import {BE_PLAYERS_URL, BE_TEAMS_URL} from "../constants/be-urls";

export const createTeamPlayersUrl = (teamId: number) => {
    return `${BE_TEAMS_URL}${teamId}/${BE_PLAYERS_URL}`
}
