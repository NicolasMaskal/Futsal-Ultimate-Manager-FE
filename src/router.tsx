import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Players from "./pages/Players";
import MatchResults from "./pages/MatchResults";
import React from "react";
import Shop from "./pages/Shop";
import LineupPage from "./pages/MatchCenter";
import {
  EDIT_USER_URL,
  EMAIL_VERIFICATION_REQUIRED_URL,
  INDEX_URL,
  LOGIN_URL,
  MATCH_CENTER_URL,
  MATCH_RESULTS_URL,
  PLAYERS_URL,
  REGISTER_URL,
  SHOP_URL,
} from "./constants/urls";
import UserSettingsPage from "./pages/UserSettings";
import IndexPage from "./pages/IndexPage";
import PrivateRoute from "./components/Routing/PrivateRoute";
import AnonymousOnlyRoute from "./components/Routing/AnonymousOnlyRoute";
import EmailVerificationRequiredPage from "./pages/EmailVerificationRequiredPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: INDEX_URL,
        element: <IndexPage />,
      },
      {
        path: LOGIN_URL,
        element: (
          <AnonymousOnlyRoute>
            <SignIn />
          </AnonymousOnlyRoute>
        ),
      },
      {
        path: REGISTER_URL,
        element: (
          <AnonymousOnlyRoute>
            <SignUp />
          </AnonymousOnlyRoute>
        ),
      },
      {
        path: PLAYERS_URL,
        element: (
          <PrivateRoute>
            <Players />
          </PrivateRoute>
        ),
      },
      {
        path: MATCH_RESULTS_URL,
        element: (
          <PrivateRoute>
            <MatchResults />
          </PrivateRoute>
        ),
      },
      {
        path: SHOP_URL,
        element: (
          <PrivateRoute>
            <Shop />
          </PrivateRoute>
        ),
      },
      {
        path: MATCH_CENTER_URL,
        element: (
          <PrivateRoute>
            <LineupPage />
          </PrivateRoute>
        ),
      },
      {
        path: EDIT_USER_URL,
        element: (
          <PrivateRoute>
            <UserSettingsPage />
          </PrivateRoute>
        ),
      },
      {
        path: EMAIL_VERIFICATION_REQUIRED_URL,
        element: <EmailVerificationRequiredPage />,
      },
    ],
  },
]);

export default router;
