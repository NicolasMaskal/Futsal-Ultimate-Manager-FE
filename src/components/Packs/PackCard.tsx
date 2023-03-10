import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grow } from "@mui/material";
import CustomPopper from "../Generic/CustomPopper";
import { PackType } from "../../models";

const PackCard: React.FC<{
  packName: PackType;
  color: string;
  PackDescription: React.FC;
  price: number;
  imgSrc: string;
  animationDuration: number;
  onBuy: (packType: PackType, price: number) => void;
}> = ({ packName, color, PackDescription, price, imgSrc, animationDuration, onBuy }) => {
  const [buyOpen, setBuyOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setBuyOpen((previousOpen) => !previousOpen);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setBuyOpen(false);
  };

  const handleButtonClick = () => {
    onBuy(packName, price);
  };

  return (
    <Grow in={true} timeout={animationDuration}>
      <Card elevation={5} sx={{ maxWidth: "22rem" }}>
        <CardActionArea component="div" disableRipple>
          <img
            src={imgSrc}
            alt={`${packName} Player`}
            style={{ height: "9.4rem" }}
            className="flex flex-grow mr-auto ml-auto pt-6"
          />
          <CardContent sx={{ height: "14rem" }}>
            <Typography
              className="font-bold"
              gutterBottom
              variant="h5"
              component="div"
              color={color}
            >
              {packName.toUpperCase()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <PackDescription />
            </Typography>
          </CardContent>
          <CardActions className="flex justify-between pr-5">
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={handleClick}
            >
              Buy
            </Button>
            <CustomPopper
              isOpen={buyOpen}
              anchorEl={anchorEl}
              buttonSuccessText="Buy"
              handleClose={handleClose}
              handleSuccess={handleButtonClick}
              placement={"right"}
            >
              <Typography sx={{ p: 2 }}>
                Are you sure you want to buy a{" "}
                <Typography
                  component={"span"}
                  sx={{ fontWeight: 700 }}
                  display={"inline"}
                >
                  {packName}
                </Typography>{" "}
                pack for{" "}
                <Typography
                  component={"span"}
                  sx={{ fontWeight: 700 }}
                  display={"inline"}
                >
                  {price} coins
                </Typography>{" "}
                ?
              </Typography>
            </CustomPopper>
            <Typography>
              {"Cost: "}
              <Typography component="span" display="inline" className="font-bold">
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
