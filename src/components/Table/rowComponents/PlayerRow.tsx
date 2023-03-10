import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import * as React from "react";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import { RowComponentType } from "../CustomTable";
import useMobileView from "../../../hooks/Generic/useMobileView";
import { capitalizeFirstLetter } from "../../../utils/string-helpers";
import { SxProps } from "@mui/system";
import { LinearProgress, Theme } from "@mui/material";
import { Player } from "../../../models";
import CustomPopper from "../../Generic/CustomPopper";
import { useSnackbar } from "notistack";
import useSendData from "../../../hooks/Generic/useSendData";
import { createTeamSellPlayersUrl } from "../../../utils/url-helpers";
import { useAppDispatch, useAppSelector } from "../../../hooks/Generic/hooks";
import { getTeamOrFail } from "../../../selectors/user";
import {
  getColorByPos,
  getColorBySkill,
  getColorByStamina,
} from "../../../utils/player-ui";
import { getFirstErrorMessage } from "../../../utils/be-error-helpers";
import { teamCoinsIncrease } from "../../../store/user-slice";
import Tooltip from "@mui/material/Tooltip";

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
  const team = useAppSelector(getTeamOrFail);
  const {
    response: responseSell,
    sendData: sendSellData,
    error: sellError,
    loading: sellLoading,
  } = useSendData<{ players: number[] }, {}>(createTeamSellPlayersUrl(team.id), "post");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setSellOpen((previousOpen) => !previousOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSellOpen(false);
  };

  const { averageSkill, showHistory } = additionalInfo;
  const player = obj;
  const colorByPos = getColorByPos(player.preferred_position);
  const colorBySkill = getColorBySkill(player, averageSkill!);
  const colorByStamina = getColorByStamina(player);
  const mobileView = useMobileView();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const handleSell = () => {
    sendSellData({ players: [player.id] }).catch(() => {});
  };

  useEffect(() => {
    if (responseSell) {
      dispatch(teamCoinsIncrease({ coins: player.sell_price }));
      rowDeleteHandler(player);
    }
    if (sellError) {
      enqueueSnackbar(getFirstErrorMessage(sellError, "Error selling player!"), {
        variant: "error",
      });
    }
  }, [dispatch, enqueueSnackbar, player, responseSell, rowDeleteHandler, sellError]);

  if (sellLoading) {
    return (
      <TableRow
        sx={{
          "&:last-child td, &:last-child th": {
            border: 0,
          },
        }}
      >
        <TableCell align="center" sx={{ width: "100%", height: "100%" }} colSpan={10}>
          <LinearProgress sx={{ height: mobileView ? 10 : 20 }} />
        </TableCell>
      </TableRow>
    );
  }

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
      <TableCell align="left" sx={textSx} padding={mobileView ? "none" : "normal"}>
        {player.name}
      </TableCell>
      <TableCell align="left" sx={textSx} padding={mobileView ? "none" : "normal"}>
        {capitalizeFirstLetter(player.preferred_position)}
      </TableCell>
      {/*sx={{ display: "flex", justifyContent: "flex-end", pl: "24px", pr: "8px" }}*/}
      <TableCell align="right" padding={mobileView ? "none" : "normal"}>
        <Typography sx={textSx} color={colorBySkill}>
          {player.skill}
        </Typography>
      </TableCell>
      <TableCell align="right" padding={mobileView ? "none" : "normal"}>
        <Typography sx={textSx} color={colorByStamina}>
          {player.stamina_left}
        </Typography>
      </TableCell>
      {showHistory && (
        <>
          <TableCell sx={textSx} align="right" padding={mobileView ? "none" : "normal"}>
            {player.matches_played}
          </TableCell>
          <TableCell sx={textSx} align="right" padding={mobileView ? "none" : "normal"}>
            {player.goals_scored}
          </TableCell>
          <TableCell sx={textSx} align="right" padding={mobileView ? "none" : "normal"}>
            {player.assists_made}
          </TableCell>
        </>
      )}
      <TableCell sx={textSx} align="right" padding={mobileView ? "none" : "normal"}>
        {player.sell_price}
      </TableCell>
      <TableCell align="right" padding={mobileView ? "none" : "normal"}>
        <Tooltip title={"Sell player"}>
          <IconButton onClick={handleClick}>
            <MonetizationOnRoundedIcon sx={iconSx} />
          </IconButton>
        </Tooltip>
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
              component={"span"}
              display="inline"
              sx={{ ...textSx, ...{ fontWeight: 700 } } as SxProps<Theme>}
            >
              {player.name}
            </Typography>{" "}
            for{" "}
            <Typography
              component={"span"}
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
