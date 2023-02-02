import React from "react";
import { Link } from "react-router-dom";
import {LOGIN_URL, REGISTER_URL} from "../constants/urls";
import Grid from "@mui/material/Grid";
import footballPlayer from "../images/football-player-black.png";

const WelcomePage: React.FC = () => {
  return (
    <Grid container className="px-16">
      <Grid item xs={8}>
        <article className="py-40 px-8">
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
            Already have an account? {" "}
            <Link className="text-sky-500 hover:text-sky-700" to={LOGIN_URL}>
              Sign in
            </Link>{" "}
            here to continue building your team!
          </p>
        </article>
      </Grid>
      <Grid item xs={4}>
        <img
          src={footballPlayer}
          alt={`Football Player`}
          style={{ maxHeight: "25rem" }}
          className="flex flex-grow mr-auto ml-auto pt-6 mt-20"
        />
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
