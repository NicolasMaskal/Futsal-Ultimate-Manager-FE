import PackCard from "./PackCard";
import Typography from "@mui/material/Typography";
import goldPlayer from "../../images/gold-pack-image.png";
import React from "react";

const GoldPackDescription = () => {
  return (
    <>
      <Typography>
        <Typography display="inline" variant="body2" color="text.secondary">
          {"The "}
        </Typography>
        <Typography
          display="inline"
          variant="body2"
          color="text.secondary"
          className="font-bold"
        >
          {"Gold"}
        </Typography>
        <Typography display="inline" variant="body2" color="text.secondary">
          {
            " Pack offers the most elite players, with exceptional ratings and skills."
          }
        </Typography>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {
          "These players are considered among the best in the game and can make a significant difference in the outcome of a match."
        }
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {
          "They are a must-have for any serious team looking to dominate the competition."
        }
      </Typography>
    </>
  );
};
const GoldPackCard: React.FC<{ animationDuration: number }> = ({
  animationDuration,
}) => {
  return (
    <PackCard
      packName="Gold"
      color={"#d4af37"}
      PackDescription={GoldPackDescription}
      price={750}
      imgSrc={goldPlayer}
      animationDuration={animationDuration}
    />
  );
};

export default GoldPackCard;
