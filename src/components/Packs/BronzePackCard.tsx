import PackCard from "./PackCard";
import Typography from "@mui/material/Typography";
import bronzePlayer from "../../images/bronze-pack-image.png";
import React from "react";
import { PackType } from "../../models";

const BronzePackDescription = () => {
  return (
    <>
      <Typography component="span">
        <Typography
          component="span"
          display="inline"
          variant="body2"
          color="text.secondary"
        >
          {"The "}
        </Typography>
        <Typography
          component="span"
          display="inline"
          variant="body2"
          color="text.secondary"
          className="font-bold"
        >
          {"Bronze"}
        </Typography>
        <Typography
          display="inline"
          variant="body2"
          color="text.secondary"
          component="span"
        >
          {
            " Pack is a great option for those looking to expand their squad with budget-friendly players."
          }
        </Typography>
      </Typography>
      <Typography component="span" variant="body2" color="text.secondary">
        {
          "These players may not have the highest ratings, but they can still contribute to the team and be a valuable addition to your squad."
        }
      </Typography>
    </>
  );
};
const BronzePackCard: React.FC<{
  animationDuration: number;
  onBuy: (packType: PackType, price: number) => void;
}> = ({ animationDuration, onBuy }) => {
  return (
    <PackCard
      packName="bronze"
      color={"#CD7F32"}
      PackDescription={BronzePackDescription}
      price={250}
      imgSrc={bronzePlayer}
      animationDuration={animationDuration}
      onBuy={onBuy}
    />
  );
};

export default BronzePackCard;
