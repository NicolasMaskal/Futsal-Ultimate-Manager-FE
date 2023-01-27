import { RowComponentType } from "../CustomTable";
import { PlayerInLineup, PlayingPosition } from "../../../models";
import * as React from "react";
import useMobileView from "../../../hooks/useMobileView";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { capitalizeFirstLetter } from "../../../utils/stringHelpers";
import Typography from "@mui/material/Typography";
import { getColorByPos, getColorBySkill } from "./PlayerRow";
import { Rating } from "@mui/material";
import Box from "@mui/material/Box";

const labels: { [index: string]: string } = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

const getLabelText = (value: number) => {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
};
const getColorByPlayingPos = (playingPos: PlayingPosition) => {
  if (playingPos === "Goalkeeper") {
    return getColorByPos("goalkeeper");
  }
  if (playingPos.includes("Attacker")) {
    return getColorByPos("attacker");
  }
  return getColorByPos("defender");
};

const getPlayerEffectivenessInPose = (player: PlayerInLineup) => {
  if (player.playingPos.toLowerCase().includes(player.preferred_position)) {
    return 5;
  }
  if (player.playingPos === "Goalkeeper") {
    return 1;
  }
  if (player.preferred_position === "goalkeeper") {
    return 2;
  }
  return 3;
};
const PlayerInSheetRow: RowComponentType<PlayerInLineup, number> = ({
  obj,
  textSx,
    iconSx,
  additionalInfo,
}) => {
  const averageSkill = additionalInfo;
  const player = obj;
  const colorByPos = getColorByPos(player.preferred_position);
  const colorByPlayingPos = getColorByPlayingPos(player.playingPos);
  const colorBySkill = getColorBySkill(player.skill, averageSkill);
  const mobileView = useMobileView();
  const playerEffectiveness = getPlayerEffectivenessInPose(player);
  const isMobile = useMobileView()

  return (
    <TableRow
      hover
      sx={{
        borderColor: "red",
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }}
    >
      {player.playingPos !== "Not Playing" ? (
        <>
          <TableCell align="center" padding={mobileView ? "none" : "normal"}>
            <Typography sx={textSx} color={colorByPlayingPos}>
              {player.playingPos}
            </Typography>
          </TableCell>
          <TableCell  padding={mobileView ? "none" : "normal"}>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Rating
                  name="size-small"
                  defaultValue={playerEffectiveness}
                  readOnly
                  sx={iconSx}
                  getLabelText={getLabelText}
                  // size="small"
                />
                {<Box sx={{ ml: 2 }}>
                  <Typography sx={textSx}>
                  {labels[playerEffectiveness]}
                </Typography>
                </Box>}
              </Box>
          </TableCell>
        </>
      ) : null}
      <TableCell
        align="center"
        sx={textSx}
        padding={mobileView ? "none" : "normal"}
      >
        {player.name}
      </TableCell>
      <TableCell align="center" padding={mobileView ? "none" : "normal"}>
        <Typography sx={textSx} color={colorByPos}>
          {capitalizeFirstLetter(player.preferred_position)}
        </Typography>
      </TableCell>
      <TableCell align="left" padding={mobileView ? "none" : "normal"}>
        <Typography sx={textSx} color={colorBySkill}>
          {player.skill}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default PlayerInSheetRow;
