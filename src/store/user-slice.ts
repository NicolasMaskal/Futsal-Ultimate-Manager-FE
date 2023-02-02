import { createSlice } from "@reduxjs/toolkit";
import { Team, User } from "../models";

export interface UserState {
  user: User | undefined;
  team: Team | undefined;
  appStatus: undefined | "loading" | "loaded";
}

const initialState: UserState = {
  user: undefined,
  team: undefined,
  appStatus: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.team = action.payload.team;
    },
    setTeam: (state, action) => {
      state.team = action.payload.team;
    },
    userLogout: (state) => {
      state.user = undefined;
      state.team = undefined;
      state.appStatus = undefined;
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
  setTeam,
  setStatusLoading,
  setStatusLoaded,
  userLogout,
} = userSlice.actions;
export default userSlice;
