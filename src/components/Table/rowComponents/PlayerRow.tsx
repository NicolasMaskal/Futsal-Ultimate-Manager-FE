import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import * as React from "react";
import {
  blue,
  brown,
  deepOrange,
  green,
  lightGreen,
  orange,
  red,
} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import { RowComponentType } from "../CustomTable";
import useMobileView from "../../../hooks/useMobileView";
import { capitalizeFirstLetter } from "../../../utils/stringHelpers";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material";
import { Player } from "../../../models";

const getColorByPos = (player: Player) => {
  if (player.preferred_position === "attacker") {
    return orange[500];
  }
  if (player.preferred_position === "defender") {
    return blue[500];
  }
  if (player.preferred_position === "goalkeeper") {
    return brown[400];
  }
};

const getColorBySkill = (player: Player, averageSkill: number) => {
  if (player.skill < averageSkill - 5) {
    return red[500];
  }
  if (player.skill < averageSkill) {
    return deepOrange[500];
  }
  if (averageSkill <= player.skill && player.skill < averageSkill + 5) {
    return lightGreen[500];
  } else {
    return green[500];
  }
};

const PlayerRow: RowComponentType<Player, number> = ({
  obj,
  textSx,
  iconSx,
  additionalInfo,
}) => {
  const averageSkill = additionalInfo;

  const player = obj;
  const colorByPos = getColorByPos(player);
  const colorBySkill = getColorBySkill(player, averageSkill);
  const mobileView = useMobileView();

  return (
    <TableRow
      hover
      sx={{
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }}
    >
      <TableCell align="center" padding={mobileView ? "none" : "normal"}>
        <PersonRoundedIcon
          sx={{ ...iconSx, ...{ color: colorByPos } } as SxProps<Theme>}
        />
      </TableCell>
      <TableCell
        align="left"
        sx={textSx}
        padding={mobileView ? "none" : "normal"}
      >
        {player.name}
      </TableCell>
      <TableCell
        align="left"
        sx={textSx}
        padding={mobileView ? "none" : "normal"}
      >
        {capitalizeFirstLetter(player.preferred_position)}
      </TableCell>
      {/*sx={{ display: "flex", justifyContent: "flex-end", pl: "24px", pr: "8px" }}*/}
      <TableCell align="right" padding={mobileView ? "none" : "normal"}>
        <Typography sx={textSx} color={colorBySkill}>
          {player.skill}
        </Typography>
      </TableCell>
      <TableCell
        sx={textSx}
        align="right"
        padding={mobileView ? "none" : "normal"}
      >
        {player.matches_played}
      </TableCell>
      <TableCell
        sx={textSx}
        align="right"
        padding={mobileView ? "none" : "normal"}
      >
        {player.goals_scored}
      </TableCell>
      <TableCell
        sx={textSx}
        align="right"
        padding={mobileView ? "none" : "normal"}
      >
        {player.assists_made}
      </TableCell>
      <TableCell
        sx={textSx}
        align="right"
        padding={mobileView ? "none" : "normal"}
      >
        {player.sell_price}
      </TableCell>
      <TableCell align="right" padding={mobileView ? "none" : "normal"}>
        <IconButton>
          <MonetizationOnRoundedIcon sx={iconSx} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default PlayerRow;
