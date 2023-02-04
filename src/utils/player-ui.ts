import { Player, PlayingPosition, Position } from "../models";
import {
  blue,
  brown,
  deepOrange,
  green,
  lightGreen,
  orange,
  red,
} from "@mui/material/colors";

export const getColorByPos = (prefPos: Position | undefined) => {
  if (prefPos === "attacker") {
    return orange[500];
  }
  if (prefPos === "defender") {
    return blue[500];
  }
  if (prefPos === "goalkeeper") {
    return brown[400];
  }
  return "#000000";
};

export const getColorBySkill = (player: Player | null, averageSkill: number) => {
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
