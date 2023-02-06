import CustomTable from "./CustomTable";
import { HeadCellType } from "./subComponents/MyTableHeader";
import { PlayerInLineup } from "../../models";
import React from "react";
import PlayerInSheetRow from "./rowComponents/PlayerInSheetRow";

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
    id: "player.name",
    alignment: "center",
    label: "Name",
  },
  {
    id: "player.preferred_position",
    alignment: "center",
    label: "Preferred Position",
  },
  {
    id: "player.skill",
    alignment: "left",
    label: "Skill",
  },
  {
    id: "player.stamina_left",
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
  averageSkill: number | undefined;
  displayPlayingPosition: boolean;
  handleRowClicked: (clickedRow: PlayerInLineup) => void;
  selectedRow: PlayerInLineup | null;
  defaultOrderBy: string;
}> = ({
  playersInLineup,
  averageSkill,
  displayPlayingPosition,
  handleRowClicked,
  selectedRow,
  defaultOrderBy,
}) => {
  return (
    <CustomTable
      RowComponent={PlayerInSheetRow}
      objects={playersInLineup}
      headCells={displayPlayingPosition ? headCells : headCellsWithoutPlayingPos}
      defaultOrderBy={defaultOrderBy}
      defaultOrder={"desc"}
      pagination={false}
      tableWidthInGrid={12}
      // dontAdjustFont
      additionalInfo={{ averageSkill, handleRowClicked, selectedRow }}
    />
  );
};

export default SheetTable;
