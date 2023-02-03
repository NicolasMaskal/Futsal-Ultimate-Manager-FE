import { RowComponentType } from "../CustomTable";
import { PlayerInLineup, PlayingPosition } from "../../../models";
import * as React from "react";
import useMobileView from "../../../hooks/Generic/useMobileView";
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
export const getColorByPlayingPos = (playingPos: PlayingPosition) => {
  if (playingPos === "Goalkeeper") {
    return getColorByPos("goalkeeper");
  }
  if (playingPos.includes("Attacker")) {
    return getColorByPos("attacker");
  }
  if (playingPos.includes("Defender")) {
    return getColorByPos("defender");
  }
  return "#000000";
};

const getPlayerEffectivenessInPose = (playerInLineup: PlayerInLineup) => {
  if (!playerInLineup.player) {
    return 0;
  }
  const playingPosition = playerInLineup.playingPosition;
  const prefPos = playerInLineup.player.preferred_position;
  if (playingPosition.toLowerCase().includes(prefPos)) {
    return 5;
  }
  if (playingPosition === "Goalkeeper") {
    return 1;
  }
  if (prefPos === "goalkeeper") {
    return 2;
  }
  return 3;
};

type AdditionalInfoType = {
  averageSkill: number;
  handleRowClicked: (clickedRow: PlayerInLineup) => void;
  selectedRow: PlayerInLineup | null;
};

const PlayerInSheetRow: RowComponentType<
  PlayerInLineup,
  AdditionalInfoType
> = ({ obj, textSx, additionalInfo }) => {
  const { averageSkill, handleRowClicked, selectedRow } = additionalInfo;
  const playerInLineup = obj;
  const colorByPos = getColorByPos(playerInLineup.player?.preferred_position);
  const colorByPlayingPos = getColorByPlayingPos(
    playerInLineup.playingPosition
  );
  const colorBySkill = getColorBySkill(playerInLineup.player, averageSkill);
  const mobileView = useMobileView();
  const playerEffectiveness = getPlayerEffectivenessInPose(playerInLineup);

  return (
    <TableRow
      selected={selectedRow?.id === playerInLineup.id}
      hover
      onClick={() => handleRowClicked(playerInLineup)}
      sx={{
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }}
    >
      {playerInLineup.playingPosition !== "Not Playing" ? (
        <>
          <TableCell align="center" padding={mobileView ? "none" : "normal"}>
            <Typography sx={textSx} color={colorByPlayingPos}>
              {playerInLineup.playingPosition}
            </Typography>
          </TableCell>
          <TableCell padding={mobileView ? "none" : "normal"}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Rating
                name="size-small"
                defaultValue={playerEffectiveness}
                readOnly
                sx={textSx}
                getLabelText={getLabelText}
                size={"small"}
              />
              {
                <Box sx={{ ml: 2, display: mobileView ? "none" : "flex" }}>
                  <Typography sx={textSx}>
                    {labels[playerEffectiveness]}
                  </Typography>
                </Box>
              }
            </Box>
          </TableCell>
        </>
      ) : null}
      <TableCell
        align="center"
        sx={textSx}
        padding={mobileView ? "none" : "normal"}
      >
        {playerInLineup.player!.name}
      </TableCell>
      <TableCell align="center" padding={mobileView ? "none" : "normal"}>
        <Typography sx={textSx} color={colorByPos}>
          {capitalizeFirstLetter(playerInLineup.player!.preferred_position)}
        </Typography>
      </TableCell>
      <TableCell align="left" padding={mobileView ? "none" : "normal"}>
        <Typography sx={textSx} color={colorBySkill}>
          {playerInLineup.player!.skill}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default PlayerInSheetRow;
