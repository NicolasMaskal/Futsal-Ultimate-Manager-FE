import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Button, CardActionArea, CardActions, Grow} from "@mui/material";

const PackCard: React.FC<{
  packName: "BRONZE" | "SILVER" | "GOLD";
  color: string;
  description: JSX.Element;
  price: number;
  imgSrc: string;
  animationDuration: number
}> = ({ packName, color, description, price, imgSrc, animationDuration }) => {
  return (
    <Grow in={true} timeout={animationDuration} >
      <Card elevation={5}  sx={{ maxWidth: "22rem"}}>
        <CardActionArea disableRipple>
        <img
          src={imgSrc}
          alt={`${packName} Player`}
          style={{ height: "9.4rem" }}
          className="flex flex-grow mr-auto ml-auto pt-6"
        />
        <CardContent sx={{height: "14rem"}}>
          <Typography
            className="font-bold"
            gutterBottom
            variant="h5"
            component="div"
            color={color}
          >
            {packName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions className="flex justify-between pr-5">
          <Button size="small" color="primary">
            Buy
          </Button>
          <Typography>
            {"Cost: "}
            <Typography display="inline" className="font-bold">
              {price}{" "}
            </Typography>
          </Typography>
        </CardActions>
        </CardActionArea>
      </Card>
    </Grow>
  );
};

export default PackCard;
