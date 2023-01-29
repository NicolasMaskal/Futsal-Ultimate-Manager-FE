import PageTitle from "../components/PageTitle";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import GoldPackCard from "../components/Packs/GoldPackCard";
import SilverPackCard from "../components/Packs/SilverPackCard";
import BronzePackCard from "../components/Packs/BronzePackCard";
import PageDescription from "../components/PageDescription";
import { PackType, Player } from "../models";
import PackContent from "../components/PackContent";
import {CircularProgress, Stack} from "@mui/material";
import { dummyPackContent } from "./dummyReturns";

const Shop = () => {
  const [packData, setPackData] = useState<Player[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleBuyPack = (packType: PackType) => {
    //TODO Add api
    console.log(packType);
    setIsLoading(true);
    setTimeout(() => {
      setPackData(dummyPackContent);
      setIsLoading(false);
    }, 500);
  };

  const handlePackContentClose = () => {
    setPackData(null);
  };

  if (isLoading) {
    return (
        <Stack alignItems="center" className="min-h-screen" justifyContent="center">
          <CircularProgress color={"primary"}/>
        </Stack>
    );
  }
  if (packData) {
    return (
      <PackContent
        packContent={packData}
        handlePackContentClose={handlePackContentClose}
      />
    );
  }

  return (
    <>
      <PageTitle title="SHOP" />
      <PageDescription>
        Our shop offers a wide range of player packs for all types of teams.
        Choose from our budget-friendly bronze packs, solid silver packs, or
        elite gold packs.
      </PageDescription>
      <Grid container justifyContent="center" className="pt-8" spacing={5}>
        <Grid key={"bronze"} item>
          <BronzePackCard
            animationDuration={300}
            onBuy={() => {
              handleBuyPack("Bronze");
            }}
          />
        </Grid>
        <Grid key={"silver"} item>
          <SilverPackCard
            animationDuration={600}
            onBuy={() => {
              handleBuyPack("Silver");
            }}
          />
        </Grid>
        <Grid key={"gold"} item>
          <GoldPackCard
            animationDuration={900}
            onBuy={() => {
              handleBuyPack("Gold");
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
