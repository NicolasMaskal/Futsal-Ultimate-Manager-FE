import React from "react";
import SignIn from "./pages/SignIn";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import WelcomePage from "./pages/WelcomePage";
import SignUp from "./pages/SignUp";
import RootPage from "./pages/RootPage";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Players from "./pages/Players";

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
    ],
  },
]);

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      // main: "#2c84cb",
      main: "#161662",
    },
    secondary: {
      main: "#45458a",
    },
  },
  typography: {
    allVariants: {
      // fontFamily: 'roboto',
      textTransform: "none",
      // fontSize: 16,
    },
  },
};

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
