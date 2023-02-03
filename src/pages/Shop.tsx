import PageTitle from "../components/Generic/PageTitle";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import GoldPackCard from "../components/Packs/GoldPackCard";
import SilverPackCard from "../components/Packs/SilverPackCard";
import BronzePackCard from "../components/Packs/BronzePackCard";
import PageDescription from "../components/Packs/PageDescription";
import { PackType, Player } from "../models";
import PackContent from "../components/Packs/PackContent";
import { CircularProgress, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/Generic/hooks";
import { getTeamOrFail } from "../selectors/user";
import useSendData from "../hooks/Generic/useSendData";
import { createTeamBuyPackUrl } from "../utils/url-helpers";
import { getFirstErrorMessage } from "../utils/be-error-helpers";
import { useSnackbar } from "notistack";
import { teamCoinsDecrease } from "../store/user-slice";

export const shopPageDescription =
  "Our shop offers a wide range of player packs for all types of teams.\n" +
  "        Choose from our budget-friendly bronze packs, solid silver packs, or\n" +
  "        elite gold packs.";
const Shop = () => {
  const team = useAppSelector(getTeamOrFail);
  const { response, sendData, error, loading, resetSendData } = useSendData<
    { pack_type: PackType },
    Player[]
  >(createTeamBuyPackUrl(team.id), "post");
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const [price, setPrice] = useState<number | null>(null);
  const handleBuyPack = (packType: PackType, price: number) => {
    setPrice(price);
    sendData({ pack_type: packType });
  };
  useEffect(() => {
    if (error) {
      enqueueSnackbar(getFirstErrorMessage(error, "Error buying pack!"), {
        variant: "error",
      });
    }
    if(response && price){
      dispatch(teamCoinsDecrease({coins: price}))

    }
  }, [dispatch, enqueueSnackbar, error, price, response]);

  if (loading) {
    return (
      <Stack
        alignItems="center"
        className="min-h-screen"
        justifyContent="center"
      >
        <CircularProgress color={"primary"} />
      </Stack>
    );
  }

  const handlePackContentClose = () => {
    resetSendData();
    setPrice(null);
  };

  if (response && price) {
    return (
      <PackContent
        packContent={response}
        handlePackContentClose={handlePackContentClose}
      />
    );
  }

  return (
    <>
      <PageTitle title="SHOP" />
      <PageDescription>{shopPageDescription}</PageDescription>
      <Grid container justifyContent="center" className="pt-8" spacing={5}>
        <Grid key={"bronze"} item>
          <BronzePackCard animationDuration={300} onBuy={handleBuyPack} />
        </Grid>
        <Grid key={"silver"} item>
          <SilverPackCard animationDuration={600} onBuy={handleBuyPack} />
        </Grid>
        <Grid key={"gold"} item>
          <GoldPackCard animationDuration={900} onBuy={handleBuyPack} />
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
