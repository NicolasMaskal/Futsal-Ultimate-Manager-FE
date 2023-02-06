import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PlayersPage from "./pages/PlayersPage";
import MatchResultsPage from "./pages/MatchResultsPage";
import React from "react";
import ShopPage from "./pages/ShopPage";
import LineupPage from "./pages/MatchCenterPage";
import {
  EDIT_USER_URL,
  EMAIL_ACTIVATION_URL,
  EMAIL_VERIFICATION_REQUIRED_URL,
  INDEX_URL,
  LOGIN_URL,
  MATCH_CENTER_URL,
  MATCH_RESULTS_URL,
  PLAYERS_URL,
  REGISTER_URL,
  SHOP_URL,
} from "./constants/urls";
import UserSettingsPage from "./pages/UserSettingsPage";
import IndexPage from "./pages/IndexPage";
import PrivateRoute from "./components/Routing/PrivateRoute";
import AnonymousOnlyRoute from "./components/Routing/AnonymousOnlyRoute";
import EmailVerificationRequiredPage from "./pages/EmailVerificationRequiredPage";
import MatchDetailPage from "./pages/MatchDetailPage";
import EmailActivationPage from "./pages/EmailActivationPage";

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
            <SignInPage />
          </AnonymousOnlyRoute>
        ),
      },
      {
        path: REGISTER_URL,
        element: (
          <AnonymousOnlyRoute>
            <SignUpPage />
          </AnonymousOnlyRoute>
        ),
      },
      {
        path: PLAYERS_URL,
        element: (
          <PrivateRoute>
            <PlayersPage />
          </PrivateRoute>
        ),
      },
      {
        path: MATCH_RESULTS_URL,
        element: (
          <PrivateRoute>
            <MatchResultsPage />
          </PrivateRoute>
        ),
      },
      {
        path: SHOP_URL,
        element: (
          <PrivateRoute>
            <ShopPage />
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
      {
        path: `${EMAIL_ACTIVATION_URL}/:uid/:token`,
        element: <EmailActivationPage />,
      },
      {
        path: `${MATCH_RESULTS_URL}/:matchId`,
        element: (
          <PrivateRoute>
            <MatchDetailPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
