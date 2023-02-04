import CustomTable from "./CustomTable";
import { HeadCellType } from "./subComponents/MyTableHeader";
import { PlayerInLineup } from "../../models";
import React from "react";
import PlayerInSheetRow from "./rowComponents/PlayerInSheetRow";
import { useAppSelector } from "../../hooks/Generic/hooks";
import { getTeamOrFail } from "../../selectors/user";

const headCells: HeadCellType[] = [
  {
    id: "playingPosition",
    alignment: "center",
    label: "Playing position",
  },
  {
    id: null,
    alignment: "left",
    label: "Player ability in position",
  },
  {
    id: null,
    alignment: "center",
    label: "Name",
  },
  {
    id: null,
    alignment: "center",
    label: "Preferred Position",
  },
  {
    id: null,
    alignment: "left",
    label: "Skill",
  },
  {
    id: null,
    alignment: "left",
    label: "Stamina left",
  },
];

const headCellsWithoutPlayingPos: HeadCellType[] = headCells.filter(
  (headCell) =>
    headCell.id !== "playingPosition" && headCell.label !== "Player ability in position"
);

const SheetTable: React.FC<{
  playersInLineup: PlayerInLineup[] | undefined;
  displayPlayingPosition: boolean;
  handleRowClicked: (clickedRow: PlayerInLineup) => void;
  selectedRow: PlayerInLineup | null;
}> = ({ playersInLineup, displayPlayingPosition, handleRowClicked, selectedRow }) => {
  const team = useAppSelector(getTeamOrFail);

  return (
    <CustomTable
      RowComponent={PlayerInSheetRow}
      objects={playersInLineup}
      headCells={displayPlayingPosition ? headCells : headCellsWithoutPlayingPos}
      defaultOrderBy={"playingPosition"}
      defaultOrder={"desc"}
      pagination={false}
      tableWidthInGrid={12}
      dontAdjustFont
      additionalInfo={{ averageSkill: team.average_skill, handleRowClicked, selectedRow }}
    />
  );
};

export default SheetTable;
