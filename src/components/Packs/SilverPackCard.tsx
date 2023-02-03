import PackCard from "./PackCard";
import Typography from "@mui/material/Typography";
import silverPlayer from "../../images/silver-pack-image.png";
import React from "react";
import { PackType } from "../../models";

const SilverPackDescription = () => {
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
          {"Silver"}
        </Typography>
        <Typography
          component="span"
          display="inline"
          variant="body2"
          color="text.secondary"
        >
          {
            " Pack contains players with higher ratings and more advanced skills, compared to the Bronze Pack. "
          }
        </Typography>
      </Typography>
      <Typography component="span" variant="body2" color="text.secondary">
        {
          "These players have proven themselves on the field and can make an immediate impact on your team."
        }
      </Typography>
    </>
  );
};
const SilverPackCard: React.FC<{
  animationDuration: number;
  onBuy: (packType: PackType, price: number) => void;
}> = ({ animationDuration, onBuy }) => {
  return (
    <PackCard
      packName="silver"
      color={"#71706E"}
      PackDescription={SilverPackDescription}
      price={500}
      imgSrc={silverPlayer}
      animationDuration={animationDuration}
      onBuy={onBuy}
    />
  );
};

export default SilverPackCard;
