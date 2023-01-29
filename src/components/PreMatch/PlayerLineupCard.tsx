import Typography from "@mui/material/Typography";
import React from "react";
import { Card, CardActionArea, CardContent } from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export const PlayerLineupCard = () => {
  return (
    <Card elevation={5} sx={{ maxWidth: "15rem" }}>
      <CardActionArea>
        <PersonRoundedIcon />
        <CardContent sx={{ height: "6rem" }}>
          <Typography
            className="font-bold"
            gutterBottom
            component="div"
            color={"black"}
          >
            Michael Scott
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Preferred pos: Attacker
          </Typography>
          <Typography variant="body2" color="text.secondary">
            57
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
