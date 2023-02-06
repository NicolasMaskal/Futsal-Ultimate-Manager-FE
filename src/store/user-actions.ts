import { axiosInstance, BE_AUTH_ME_URL, BE_LOGOUT_URL } from "../constants/be-urls";
import { Dispatch } from "react";
import { setStatusLoaded, setStatusLoading, setUser, userLogout } from "./user-slice";
import { User } from "../models";

export const userLogoutThunk = () => {
  return async (
    dispatch: Dispatch<{
      payload: undefined;
      type: "user/userLogout" | "user/setStatusLoading" | "user/setStatusLoaded";
    }>
  ) => {
    dispatch(setStatusLoading());
    await axiosInstance.post(BE_LOGOUT_URL);
    dispatch(userLogout());
    dispatch(setStatusLoaded());
  };
};

export const refreshUserInfoThunk = () => {
  return async (
    dispatch: Dispatch<{
      payload: any;
      type: "user/setUser" | "user/setStatusLoading" | "user/setStatusLoaded";
    }>
  ) => {
    dispatch(setStatusLoading());
    try {
      const userResponse = await axiosInstance.get<User>(BE_AUTH_ME_URL, {
        withCredentials: true,
      });
      dispatch(setUser({ user: userResponse.data }));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setStatusLoaded());
    }
  };
};
