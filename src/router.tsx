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
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/players",
        element: <Players />,
      },
      {
        path: "/match-results",
        element: <MatchResults />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/pre-match",
        element: <LineupPage />,
      },
    ],
  },
]);

export default router;
