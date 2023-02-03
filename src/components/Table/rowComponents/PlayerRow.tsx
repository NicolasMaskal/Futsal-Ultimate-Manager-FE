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
import useMobileView from "../../../hooks/Generic/useMobileView";
import { capitalizeFirstLetter } from "../../../utils/stringHelpers";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material";
import { Player, Position } from "../../../models";
import CustomPopper from "../../Generic/CustomPopper";

export const getColorByPos = (prefPos: Position | undefined) => {
  if (!prefPos) {
    return "#000000";
  }
  if (prefPos === "attacker") {
    return orange[500];
  }
  if (prefPos === "defender") {
    return blue[500];
  }
  if (prefPos === "goalkeeper") {
    return brown[400];
  }
};

export const getColorBySkill = (
  player: Player | null,
  averageSkill: number
) => {
  if (player === null) {
    return "#000000";
  }
  const playerSkill = player.skill;
  if (playerSkill < averageSkill - 5) {
    return red[500];
  }
  if (playerSkill < averageSkill) {
    return deepOrange[500];
  }
  if (averageSkill <= playerSkill && playerSkill < averageSkill + 5) {
    return lightGreen[500];
  }
  return green[500];
};

interface AdditionalInfoType {
  averageSkill: number | undefined;
  showHistory: boolean;
}

const PlayerRow: RowComponentType<Player, AdditionalInfoType> = ({
  obj,
  textSx,
  iconSx,
  rowDeleteHandler,
  additionalInfo,
}) => {
  const [sellOpen, setSellOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setSellOpen((previousOpen) => !previousOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSellOpen(false);
  };

  const handleSell = () => {
    //TODO call api
    rowDeleteHandler(player);
  };

  const { averageSkill, showHistory } = additionalInfo;

  const player = obj;
  const colorByPos = getColorByPos(player.preferred_position);
  const colorBySkill = getColorBySkill(player, averageSkill!);
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
      {showHistory && (
        <>
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
        </>
      )}
      <TableCell
        sx={textSx}
        align="right"
        padding={mobileView ? "none" : "normal"}
      >
        {player.sell_price}
      </TableCell>
      <TableCell align="right" padding={mobileView ? "none" : "normal"}>
        <IconButton onClick={handleClick}>
          <MonetizationOnRoundedIcon sx={iconSx} />
        </IconButton>
        <CustomPopper
          isOpen={sellOpen}
          anchorEl={anchorEl}
          buttonSuccessText="Sell"
          handleClose={handleClose}
          handleSuccess={handleSell}
          placement={"bottom-start"}
          textSx={textSx}
        >
          <Typography sx={{ ...textSx, ...{ p: 2 } } as SxProps<Theme>}>
            Are you sure you want to sell your player{" "}
            <Typography
              display="inline"
              sx={{ ...textSx, ...{ fontWeight: 700 } } as SxProps<Theme>}
            >
              {player.name}
            </Typography>{" "}
            for{" "}
            <Typography
              display="inline"
              sx={{ ...textSx, ...{ fontWeight: 700 } } as SxProps<Theme>}
            >
              {player.sell_price} coins
            </Typography>{" "}
            ?
          </Typography>
        </CustomPopper>
      </TableCell>
    </TableRow>
  );
};

export default PlayerRow;
