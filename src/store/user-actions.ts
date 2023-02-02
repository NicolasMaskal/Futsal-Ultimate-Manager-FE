import { axiosInstance, BE_LOGOUT_URL } from "../constants/be-urls";
import { Dispatch } from "react";
import { setStatusLoaded, setStatusLoading, userLogout } from "./user-slice";
export const userLogoutThunk = () => {
  return async (
    dispatch: Dispatch<{
      payload: undefined;
      type:
        | "user/userLogout"
        | "user/setStatusLoading"
        | "user/setStatusLoaded";
    }>
  ) => {
    dispatch(setStatusLoading());
    await axiosInstance.post(BE_LOGOUT_URL);
    dispatch(userLogout());
    dispatch(setStatusLoaded());
  };
};
