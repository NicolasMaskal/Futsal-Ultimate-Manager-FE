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
];

const headCellsWithoutPlayingPos: HeadCellType[] = headCells.filter(
  (headCell) =>
    headCell.id !== "playingPosition" &&
    headCell.label !== "Player ability in position"
);

const SheetTable: React.FC<{
  playersInLineup: PlayerInLineup[] | undefined;
  displayPlayingPosition: boolean;
  handleRowClicked: (clickedRow: PlayerInLineup) => void;
  selectedRow: PlayerInLineup | null;
}> = ({
  playersInLineup,
  displayPlayingPosition,
  handleRowClicked,
  selectedRow,
}) => {
  return (
    <CustomTable
      RowComponent={PlayerInSheetRow}
      objects={playersInLineup}
      headCells={
        displayPlayingPosition ? headCells : headCellsWithoutPlayingPos
      }
      defaultOrderBy={"playingPosition"}
      defaultOrder={"asc"}
      pagination={false}
      size={10}
      dontAdjustFont
      additionalInfo={{ averageSkill: 13, handleRowClicked, selectedRow }}
    />
  );
};

export default SheetTable;
