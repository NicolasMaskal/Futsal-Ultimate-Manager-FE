import axios from "axios";

const BASE_BE_URL = process.env.REACT_APP_BE_URL;

export const BE_LOGIN_URL = "auth/session/login/";
export const BE_LOGOUT_URL = "auth/session/logout/";
export const BE_REGISTER_URL = "auth/register/";
export const BE_CHANGE_PASSWORD_URL = "auth/change-password/";

export const BE_TEAMS_URL = "teams/";

export const BE_PLAYERS_URL = "players/";

export const BE_AUTH_ME_URL = "auth/me/";

export const BE_ACTIVATE_EMAIL_URL = "users/activate/";

export const axiosInstance = axios.create({
  baseURL: BASE_BE_URL,
  withCredentials: true,
});
