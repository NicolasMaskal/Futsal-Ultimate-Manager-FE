import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { SxProps } from "@mui/system";
import useMobileView from "../../../hooks/useMobileView";

export type HeadCellType = {
  id: string | null;
  alignment: "left" | "right" | "center" | "justify" | "inherit" | undefined;
  label: string;
  icon?: JSX.Element;
};

export type Order = "asc" | "desc";

export type onRequestSortType = (
  event: React.MouseEvent<unknown>,
  property: string
) => void;

const MyTableHeader: React.FC<{
  headCells: HeadCellType[];
  order: Order;
  orderBy: string | null;
  textSx: SxProps;
  iconSx: SxProps;
  onRequestSort: onRequestSortType;
}> = ({ headCells, order, orderBy, textSx, iconSx, onRequestSort }) => {
  const mobileView = useMobileView();
  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead className="bg-gray-100">
      <TableRow sx={{ height: "4rem" }} className={"font-bold"}>
        {headCells.map((headCell, index) => {
          if (headCell.alignment === null) {
            return <TableCell key={index} />;
          }
          let text = (
            <Typography className={"font-bold"} sx={textSx}>
              {headCell.label}
            </Typography>
          );
          let content = text;
          if (headCell.id !== null) {
            content = (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
                sx={iconSx}
              >
                {text}
              </TableSortLabel>
            );
          }

          return (
            <TableCell
              key={headCell.id ? headCell.id : index}
              align={headCell.alignment}
              padding={mobileView ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              {content}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default MyTableHeader;
