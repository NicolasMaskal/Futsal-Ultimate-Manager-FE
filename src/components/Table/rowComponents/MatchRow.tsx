import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { green, orange, red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import { RowComponentType } from "../CustomTable";
import { MatchResult } from "../../../models";
import useMobileView from "../../../hooks/useMobileView";

const getColorByScore = (matchResult: MatchResult) => {
  // TODO Change color based on goal difference
  if (matchResult.player_goals > matchResult.cpu_goals) {
    return green[500];
  }
  if (matchResult.player_goals < matchResult.cpu_goals) {
    return red[500];
  } else {
    return orange[500];
  }
};

const MatchResultRow: RowComponentType<MatchResult, undefined> = ({
  obj,
  textSx,
  iconSx,
}) => {
  const mobileView = useMobileView();
  const matchResult = obj;
  const colorByScore = getColorByScore(matchResult);

  return (
    <TableRow
      hover
      sx={{
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }}
      color={colorByScore}
    >
      <TableCell align="center" padding={mobileView ? "none" : "normal"}>
        <LocationCityRoundedIcon sx={iconSx} />
      </TableCell>
      <TableCell
        align="left"
        sx={textSx}
        padding={mobileView ? "none" : "normal"}
      >
        {matchResult.cpu_team.name}
      </TableCell>
      <TableCell
        align="center"
        sx={textSx}
        padding={mobileView ? "none" : "normal"}
      >
        <Typography sx={textSx} color={colorByScore}>
          {`${matchResult.player_goals} : ${matchResult.cpu_goals}`}
        </Typography>
      </TableCell>
      {/*<TableCell*/}
      {/*  align="right"*/}
      {/*  sx={textSx}*/}
      {/*  padding={mobileView ? "none" : "normal"}*/}
      {/*>*/}
      {/*  {matchResult.cpu_average_skill}*/}
      {/*</TableCell>*/}
      <TableCell
        align="center"
        sx={textSx}
        padding={mobileView ? "none" : "normal"}
      >
        {matchResult.date}
      </TableCell>
    </TableRow>
  );
};

export default MatchResultRow;
