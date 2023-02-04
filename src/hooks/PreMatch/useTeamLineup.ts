import useFetchData from "../Generic/useFetchData";
import { Lineup, Player, PlayerInLineup } from "../../models";
import {
  createTeamPlayersUrl,
  createTeamSheetsDetailUrl,
  createTeamSheetsUrl,
} from "../../utils/url-helpers";
import useSendData from "../Generic/useSendData";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { BeError } from "../../utils/be-error-helpers";

const convertPlayerToPlayerInLineup = (player: Player): PlayerInLineup => {
  return new PlayerInLineup(player, "Not Playing");
};

const convertPlayersToIdLineup = (
  players: PlayerInLineup[],
  teamSheetId: number
): Lineup<number> => {
  const rightAttacker = players.find(
    (player) => player.playingPosition === "Attacker Right"
  );
  const leftAttacker = players.find(
    (player) => player.playingPosition === "Attacker Left"
  );
  const rightDefender = players.find(
    (player) => player.playingPosition === "Defender Right"
  );
  const leftDefender = players.find(
    (player) => player.playingPosition === "Defender Left"
  );
  const goalkeeper = players.find((player) => player.playingPosition === "Goalkeeper");

  return {
    id: teamSheetId,
    name: "Main sheet",
    right_attacker:
      rightAttacker && rightAttacker.player ? rightAttacker.player.id : null,
    left_attacker: leftAttacker && leftAttacker.player ? leftAttacker.player.id : null,
    right_defender:
      rightDefender && rightDefender.player ? rightDefender.player.id : null,
    left_defender: leftDefender && leftDefender.player ? leftDefender.player.id : null,
    goalkeeper: goalkeeper && goalkeeper.player ? goalkeeper.player.id : null,
  };
};

const convertLineupToPlayersInLineup = (lineup: Lineup<Player>): PlayerInLineup[] => {
  const players = [];
  players.push(new PlayerInLineup(lineup.right_attacker, "Attacker Right"));
  players.push(new PlayerInLineup(lineup.left_attacker, "Attacker Left"));
  players.push(new PlayerInLineup(lineup.right_defender, "Defender Right"));
  players.push(new PlayerInLineup(lineup.left_defender, "Defender Left"));
  players.push(new PlayerInLineup(lineup.goalkeeper, "Goalkeeper"));
  return players;
};

const findPlayersPlaying = (playersOnScreen: PlayerInLineup[] | undefined) => {
  if (playersOnScreen) {
    const playersInLineup = playersOnScreen?.filter(
      (playerInLineup) => playerInLineup.playingPosition !== "Not Playing"
    );
    const playersNotInLineup = playersOnScreen?.filter(
      (playerInLineup) =>
        playerInLineup.playingPosition === "Not Playing" && playerInLineup.player
    );
    return { playersInLineup, playersNotInLineup };
  }
  return { playersInLineup: undefined, playersNotInLineup: undefined };
};

const findIfLineupReady = (playersInLineup: PlayerInLineup[] | undefined): boolean => {
  return (
    playersInLineup !== undefined && playersInLineup.every((player) => player.player)
  );
};

interface ReturnType {
  saveLineup: () => Promise<void>;
  errorSave: AxiosError<BeError> | null;
  handleRowClicked: (clickedRow: PlayerInLineup) => void;
  lineupIsLoading: boolean;
  lineupIsReady: boolean;
  teamSheetId: number | null;
  selectedRow: PlayerInLineup | null;
  playersInLineup: PlayerInLineup[] | undefined;
  playersNotInLineup: PlayerInLineup[] | undefined;
}
const useTeamLineup = (teamId: number): ReturnType => {
  const { data: dataLineup, isLoading: isLoadingLineup } = useFetchData<Lineup<Player>[]>(
    createTeamSheetsUrl(teamId)
  );
  const [sheetDetailUrl, setSheetDetailUrl] = useState<string | null>(null);
  const {
    error: errorSave,
    loading: loadingSave,
    sendData,
  } = useSendData<Lineup<number>, Lineup<Player>>(sheetDetailUrl, "put");
  const { data: dataPlayers, isLoading: isLoadingPlayers } = useFetchData<{
    players: Player[];
  }>(createTeamPlayersUrl(teamId));
  const [selectedRow, setSelectedRow] = useState<PlayerInLineup | null>(null);
  const [playersOnScreen, setPlayersOnScreen] = useState<PlayerInLineup[] | undefined>(
    undefined
  );

  useEffect(() => {
    if (dataLineup && dataLineup.length > 0 && dataPlayers) {
      const playersInLineupTmp = convertLineupToPlayersInLineup(dataLineup[0]);
      const playersNotPlayingTmp = dataPlayers.players
        .map(convertPlayerToPlayerInLineup)
        .filter(
          (playerInLineup) =>
            !playersInLineupTmp.find(
              (otherPlayerInLineup) =>
                playerInLineup.player?.id === otherPlayerInLineup.player?.id
            )
        );
      setPlayersOnScreen(playersInLineupTmp.concat(playersNotPlayingTmp));
      setSheetDetailUrl(createTeamSheetsDetailUrl(teamId, dataLineup[0].id as number));
    }
  }, [dataLineup, dataPlayers, teamId]);

  const { playersInLineup, playersNotInLineup } = findPlayersPlaying(playersOnScreen);
  const findIndexInArray = (playerToFind: PlayerInLineup) => {
    return playersOnScreen?.findIndex((player) => player.id === playerToFind.id)!;
  };
  const handleRowClicked = (clickedRow: PlayerInLineup) => {
    if (!selectedRow) {
      setSelectedRow(clickedRow);
    } else {
      const index1 = findIndexInArray(selectedRow);
      const index2 = findIndexInArray(clickedRow);
      const newPlayersOnScreen = [...playersOnScreen!];
      newPlayersOnScreen[index1] = new PlayerInLineup(
        clickedRow.player,
        selectedRow.playingPosition
      );
      newPlayersOnScreen[index2] = new PlayerInLineup(
        selectedRow.player,
        clickedRow.playingPosition
      );
      setPlayersOnScreen(newPlayersOnScreen);
      setSelectedRow(null);
    }
  };

  const teamSheetId =
    dataLineup && dataLineup.length > 0 ? (dataLineup[0].id as number) : null;

  const saveLineup = () => {
    const idLineup = convertPlayersToIdLineup(playersInLineup!, teamSheetId as number);
    return sendData(idLineup);
  };

  const isLoading = isLoadingLineup || isLoadingPlayers || loadingSave;

  return {
    saveLineup,
    errorSave,
    handleRowClicked,
    lineupIsLoading: isLoading,
    lineupIsReady: findIfLineupReady(playersInLineup),
    teamSheetId,
    selectedRow,
    playersInLineup,
    playersNotInLineup,
  };
};

export default useTeamLineup;
