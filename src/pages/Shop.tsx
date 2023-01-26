import PageTitle from "../components/PageTitle";
import React from "react";
import Grid from "@mui/material/Grid";
import GoldPackCard from "../components/Packs/GoldPackCard";
import SilverPackCard from "../components/Packs/SilverPackCard";
import BronzePackCard from "../components/Packs/BronzePackCard";
import Typography from "@mui/material/Typography";

const Shop = () => {
  return (
    <>
      <PageTitle title="PACKS" />
      <Typography align={"center"}>
        Our shop offers a wide range of player packs for all types of teams.
        Choose from our budget-friendly bronze packs, solid silver packs, or
        elite gold packs.
      </Typography>
      <Grid container justifyContent="center" className="pt-16" spacing={5}>
        <Grid key={"bronze"} item>
          <BronzePackCard animationDuration={300} />
        </Grid>
        <Grid key={"silver"} item>
          <SilverPackCard animationDuration={600}/>
        </Grid>
        <Grid key={"gold"} item>
          <GoldPackCard animationDuration={900}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
