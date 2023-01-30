import PageTitle from "../components/Generic/PageTitle";
import Grid from "@mui/material/Grid";
import React from "react";
import HomePageCard from "../components/HomePageCard";
import { playersPageDescription } from "./Players";
import {
  matchCenterUrl,
  matchResultsUrl,
  playersUrl,
  shopUrl,
} from "../constants/urls";
import playersImg from "../images/Players.png";
import matchResultsImg from "../images/Match Results.png";
import matchCenterImg from "../images/Match.png";
import shopImg from "../images/Packs.png";
import { shopPageDescription } from "./Shop";
import { matchCenterPageDescription } from "./MatchCenter";
import { resultsPageDescription } from "./MatchResults";

const HomePage = () => {
  return (
    <>
      <PageTitle title="HOME PAGE" />
      <Grid container className="pt-8" spacing={8} justifyContent={"center"}>
        <Grid item >
          <HomePageCard
            imgSrc={playersImg}
            cardTitle={"Players"}
            cardDescription={playersPageDescription}
            href={playersUrl}
            animationDuration={300}
          />
        </Grid>
        <Grid item >
          <HomePageCard
            imgSrc={matchResultsImg}
            cardTitle={"Match Results"}
            cardDescription={resultsPageDescription}
            href={matchResultsUrl}
            animationDuration={600}
          />
        </Grid>
        <Grid item>
          <HomePageCard
            imgSrc={shopImg}
            cardTitle={"Shop"}
            cardDescription={shopPageDescription}
            href={shopUrl}
            animationDuration={900}
          />
        </Grid>
        <Grid item >
          <HomePageCard
            imgSrc={matchCenterImg}
            cardTitle={"Match Center"}
            cardDescription={matchCenterPageDescription}
            href={matchCenterUrl}
            animationDuration={1200}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
