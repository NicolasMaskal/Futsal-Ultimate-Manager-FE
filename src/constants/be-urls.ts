import axios from "axios";

const BASE_BE_URL = "http://127.0.0.1:8000/api"; // TODO fetch from env

export const BE_LOGIN_URL = "/auth/session/login/";
export const BE_LOGOUT_URL = "/auth/session/logout/";
export const BE_REGISTER_URL = "/auth/register/";

export const axiosInstance = axios.create({
  baseURL: BASE_BE_URL,
  withCredentials: true,
});
