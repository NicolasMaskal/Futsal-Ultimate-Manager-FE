import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models";

export interface UserState {
  user: User | undefined;
  appStatus: undefined | "loading" | "loaded";
}

const initialState: UserState = {
  user: undefined,
  appStatus: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
    },
    userLogout: (state) => {
      state.user = undefined;
      state.appStatus = undefined;
    },
    teamCoinsIncrease: (state, action: PayloadAction<{ coins: number }>) => {
      state.user!.active_team.coins += action.payload.coins;
    },
    teamCoinsDecrease: (state, action: PayloadAction<{ coins: number }>) => {
      state.user!.active_team.coins -= action.payload.coins;
    },
    setStatusLoading: (state) => {
      state.appStatus = "loading";
    },
    setStatusLoaded: (state) => {
      state.appStatus = "loaded";
    },
  },
});

export const {
  setUser,
  setStatusLoading,
  setStatusLoaded,
  userLogout,
  teamCoinsIncrease,
  teamCoinsDecrease,
} = userSlice.actions;
export default userSlice;
