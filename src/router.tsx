import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import WelcomePage from "./pages/WelcomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Players from "./pages/Players";
import MatchResults from "./pages/MatchResults";
import React from "react";
import Shop from "./pages/Shop";
import LineupPage from "./pages/MatchCenter";
import {
  matchCenterUrl,
  shopUrl,
  playersUrl,
  matchResultsUrl,
  loginUrl,
  registerUrl, editUserUrl,
} from "./constants/urls";
import UserSettings from "./pages/UserSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: loginUrl,
        element: <SignIn />,
      },
      {
        path: registerUrl,
        element: <SignUp />,
      },
      {
        path: playersUrl,
        element: <Players />,
      },
      {
        path: matchResultsUrl,
        element: <MatchResults />,
      },
      {
        path: shopUrl,
        element: <Shop />,
      },
      {
        path: matchCenterUrl,
        element: <LineupPage />,
      },
      {
        path: editUserUrl,
        element: <UserSettings />
      }
    ],
  },
]);

export default router;
