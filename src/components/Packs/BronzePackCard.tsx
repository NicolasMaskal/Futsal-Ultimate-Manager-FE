import PackCard from "./PackCard";
import Typography from "@mui/material/Typography";
import bronzePlayer from "../../images/bronze-pack-image.png";
import React from "react";

const BronzePackDescription = () => {
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
          {"Bronze"}
        </Typography>
        <Typography display="inline" variant="body2" color="text.secondary">
          {
            " Pack is a great option for those looking to expand their squad with budget-friendly players."
          }
        </Typography>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {
          "These players may not have the highest ratings, but they can still contribute to the team and be a valuable addition to your squad."
        }
      </Typography>
    </>
  );
};
const BronzePackCard: React.FC<{ animationDuration: number }> = ({
  animationDuration,
}) => {
  return (
    <PackCard
      packName="Bronze"
      color={"#CD7F32"}
      PackDescription={BronzePackDescription}
      price={250}
      imgSrc={bronzePlayer}
      animationDuration={animationDuration}
    />
  );
};

export default BronzePackCard;
