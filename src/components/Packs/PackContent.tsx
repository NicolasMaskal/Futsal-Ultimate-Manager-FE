import React from "react";
import { Player } from "../../models";
import { HeadCellType } from "../Table/subComponents/MyTableHeader";
import CustomTable from "../Table/CustomTable";
import PlayerRow from "../Table/rowComponents/PlayerRow";
import ProceedButton from "../Buttons/ProceedButton";
import PageTitle from "../Generic/PageTitle";
import PageDescription from "./PageDescription";
import { useAppSelector } from "../../hooks/Generic/hooks";
import { getTeamOrFail } from "../../selectors/user";

const headCells: HeadCellType[] = [
  {
    id: null,
    alignment: undefined,
    label: "",
  },
  {
    id: "name",
    alignment: "left",
    label: "Name",
  },
  {
    id: "preferred_position",
    alignment: "left",
    label: "Position",
  },
  {
    id: "skill",
    alignment: "right",
    label: "Skill",
  },
  {
    id: "stamina_left",
    alignment: "right",
    label: "Stamina left",
  },
  {
    id: "sell_price",
    alignment: "right",
    label: "Sell price",
  },
  {
    id: null,
    alignment: undefined,
    label: "",
  },
];
const PackContent: React.FC<{
  packContent: Player[];
  handlePackContentClose: React.MouseEventHandler;
}> = ({ packContent, handlePackContentClose }) => {
  const team = useAppSelector(getTeamOrFail);
  return (
    <>
      <PageTitle title="Pack Content" />
      <PageDescription>
        On this page, you can find all the players you've obtained through a pack
        purchase. You can view their attributes and skills, and also have the option to
        quickly sell any player you no longer want on your team.
      </PageDescription>
      <CustomTable
        objects={packContent}
        defaultOrder={"desc"}
        defaultOrderBy={"skill"}
        RowComponent={PlayerRow}
        headCells={headCells}
        additionalInfo={{ averageSkill: team.average_skill, showHistory: false }}
        pagination={false}
        tableWidthInGrid={8}
      />
      <div className="flex items-center justify-center pt-10">
        <ProceedButton
          onProceedClick={handlePackContentClose}
          buttonSx={{ display: "block", alignSelf: "center" }}
        />
      </div>
    </>
  );
};

export default PackContent;
