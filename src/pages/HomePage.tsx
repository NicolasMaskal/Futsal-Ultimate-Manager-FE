import PageTitle from "../components/Generic/PageTitle";
import Grid from "@mui/material/Grid";
import React from "react";
import HomePageCard from "../components/HomePage/HomePageCard";
import { playersPageDescription } from "./PlayersPage";
import {
  MATCH_CENTER_URL,
  MATCH_RESULTS_URL,
  PLAYERS_URL,
  SHOP_URL,
} from "../constants/urls";
import playersImg from "../images/Players.png";
import matchResultsImg from "../images/Match Results.png";
import matchCenterImg from "../images/Match.png";
import shopImg from "../images/Packs.png";
import { shopPageDescription } from "./ShopPage";
import { matchCenterPageDescription } from "./MatchCenterPage";
import { resultsPageDescription } from "./MatchResultsPage";
import PageDescription from "../components/Generic/PageDescription";

const HomePage = () => {
  return (
    <>
      <PageTitle title="HOME PAGE" />
      <PageDescription>Welcome to Futsal Ultimate Manager!</PageDescription>
      <PageDescription>
        To see your players, visit the <span className={"font-bold"}>players</span> tab.
        To create a lineup and simulate a match, visit the{" "}
        <span className={"font-bold"}>match center</span> tab. To review the results from
        your previous matches, visit the{" "}
        <span className={"font-bold"}>match results</span> tab. If you feel like your
        squad needs improving, visit the <span className={"font-bold"}> shop</span> tab,
        to buy player packs.
      </PageDescription>
      <Grid container className="pt-8" spacing={8} justifyContent={"center"}>
        <Grid item>
          <HomePageCard
            imgSrc={playersImg}
            cardTitle={"Players"}
            cardDescription={playersPageDescription}
            href={PLAYERS_URL}
            animationDuration={300}
          />
        </Grid>
        <Grid item>
          <HomePageCard
            imgSrc={matchResultsImg}
            cardTitle={"Match Results"}
            cardDescription={resultsPageDescription}
            href={MATCH_RESULTS_URL}
            animationDuration={600}
          />
        </Grid>
        <Grid item>
          <HomePageCard
            imgSrc={shopImg}
            cardTitle={"Shop"}
            cardDescription={shopPageDescription}
            href={SHOP_URL}
            animationDuration={900}
          />
        </Grid>
        <Grid item>
          <HomePageCard
            imgSrc={matchCenterImg}
            cardTitle={"Match Center"}
            cardDescription={matchCenterPageDescription}
            href={MATCH_CENTER_URL}
            animationDuration={1200}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
