import React from "react";
import { CardActionArea, Grow } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import useMobileView from "../../hooks/Generic/useMobileView";

const HomePageCard: React.FC<{
  cardTitle: string;
  cardDescription: string;
  imgSrc: string;
  animationDuration: number;
  href: string;
}> = ({ cardTitle, cardDescription, imgSrc, animationDuration, href }) => {
  const mobileView = useMobileView();
  return (
    <Grow in={true} timeout={animationDuration}>
      {/*<div className="flex justify-center">*/}
      <Card
        elevation={5}
        sx={{
          maxWidth: mobileView ? "20rem" : "33rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardActionArea component={Link} to={href}>
          <img
            src={imgSrc}
            alt={`${cardTitle} Link`}
            style={{ maxHeight: mobileView ? "6rem" : "11rem" }}
            className="flex flex-grow mr-auto ml-auto"
          />
          <CardContent sx={{ height: "10rem" }}>
            <Typography className="font-bold" gutterBottom variant="h5" component="div">
              {cardTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/*</div>*/}
    </Grow>
  );
};

export default HomePageCard;
