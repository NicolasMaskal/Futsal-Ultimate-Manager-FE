import React from "react";
import { Link } from "react-router-dom";
import { LOGIN_URL, REGISTER_URL } from "../constants/urls";
import Grid from "@mui/material/Grid";
import footballPlayer from "../images/football-player-black.png";
import useMobileView from "../hooks/Generic/useMobileView";
import Box from "@mui/material/Box";
import PageTitle from "../components/Generic/PageTitle";

const WelcomePage: React.FC = () => {
  const mobileView = useMobileView();
  return (
    <Grid
      container
      sx={{ px: mobileView ? 4 : 16, py: 10 }}
      columns={mobileView ? 8 : 12}
    >
      <Grid item xs={8}>
        <Box component="article" sx={{ px: mobileView ? 2 : 8 }}>
          <h1 className="text-2xl mb-8">Welcome to Futsal Ultimate Manager.</h1>
          <p>
            With this game, you can build your ultimate team by creating your
            own squad and opening packs to acquire new players. Keep track of
            your team's progress by viewing your players and past matches. Test
            your team's mettle against our AI opponents by simulating matches.
          </p>
          <p>
            And that's not all - there's even more to discover. Don't have an
            account yet?{" "}
            <Link className="text-sky-500 hover:text-sky-700" to={REGISTER_URL}>
              Sign up
            </Link>{" "}
            now and join the fun!
          </p>
          <p>
            Already have an account?{" "}
            <Link className="text-sky-500 hover:text-sky-700" to={LOGIN_URL}>
              Sign in
            </Link>{" "}
            here to continue building your team!
          </p>
        </Box>
      </Grid>
      {!mobileView && (
        <Grid item xs={4}>
          <img
            src={footballPlayer}
            alt={`Football Player`}
            style={{ maxHeight: "25rem" }}
            className="flex flex-grow mr-auto ml-auto"
          />
        </Grid>
      )}
    </Grid>
  );
};

export default WelcomePage;
