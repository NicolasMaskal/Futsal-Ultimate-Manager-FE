import * as React from "react";
import { useCallback, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MyTableHeader, { HeadCellType, Order } from "./subComponents/MyTableHeader";
import SkeletonTable from "./subComponents/SkeletonTable";
import { SxProps } from "@mui/system";
import stableSort from "../../utils/sort";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<DataType>(
  order: Order,
  orderBy: string
): (a: DataType, b: DataType) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy as keyof DataType)
    : (a, b) => -descendingComparator(a, b, orderBy as keyof DataType);
}

export interface RowComponentProp<
  DataType extends { id: number | string },
  AdditionalInfoType
> {
  obj: DataType;
  textSx: SxProps;
  iconSx: SxProps;
  rowDeleteHandler: RowDeletionFunction;
  additionalInfo: AdditionalInfoType;
}

export type RowComponentType<
  DataType extends { id: number | string },
  AdditionalInfoType
> = (
  p: RowComponentProp<DataType, AdditionalInfoType>
) => React.ReactElement<TableProp<DataType, AdditionalInfoType>>;

export type RowDeletionFunction = <DataType extends { id: number | string }>(
  object: DataType
) => void;

interface TableProp<DataType extends { id: number | string }, AdditionalInfoType> {
  RowComponent: RowComponentType<DataType, AdditionalInfoType>;
  objects: DataType[] | null | undefined;
  headCells: HeadCellType[];
  defaultOrderBy: string;
  defaultOrder: Order;
  pagination: boolean;
  tableWidthInGrid: number;
  dontAdjustFont?: boolean;
  onRowDeleteCallback?: () => void;
  additionalInfo: AdditionalInfoType;
}

const CustomTable: <DataType extends { id: number | string }, AdditionalInfoType>(
  p: TableProp<DataType, AdditionalInfoType>
) => React.ReactElement<TableProp<DataType, AdditionalInfoType>> = ({
  RowComponent,
  objects,
  headCells,
  defaultOrderBy,
  defaultOrder,
  pagination,
  tableWidthInGrid,
  dontAdjustFont = false,
  onRowDeleteCallback = undefined,
  additionalInfo,
}) => {
  const [objectsToDisplay, setObjects] = React.useState(objects);
  const [order, setOrder] = React.useState<Order>(defaultOrder);
  const [orderBy, setOrderBy] = React.useState(defaultOrderBy);
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  const rowDeletionHandler: RowDeletionFunction = useCallback(
    (deletedObject) => {
      const newObjects = objectsToDisplay!.filter((obj) => obj.id !== deletedObject.id);
      setObjects(newObjects);
      if (onRowDeleteCallback) {
        onRowDeleteCallback();
      }
    },
    [objectsToDisplay, onRowDeleteCallback]
  );

  useEffect(() => {
    if (!pagination && objects) {
      setRowsPerPage(objects.length);
    }
    setObjects(objects);
  }, [pagination, objects]);

  if (!objectsToDisplay) {
    return <SkeletonTable size={tableWidthInGrid} />;
  }
  const sideSize = (12 - tableWidthInGrid) / 2;
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  let iconSx: SxProps = {
    fontSize: {
      lg: 24,
      md: 15,
      sm: 10,
      xs: 10,
    },
  };

  let textSx: SxProps = {
    fontSize: {
      lg: 15,
      md: 10,
      sm: 8,
      xs: 6,
    },
  };

  if (dontAdjustFont) {
    iconSx = {};
    textSx = {};
  }

  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      <Grid item xs={0} sm={sideSize - 1} md={sideSize} />
      <Grid item xs={12} sm={tableWidthInGrid + 1} md={tableWidthInGrid}>
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "100%",
            height: "100%",
            bgcolor: "#e6e6e8",
            borderRadius: "18px",
          }}
        >
          <Table size={"small"}>
            <MyTableHeader
              headCells={headCells}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              textSx={textSx}
              iconSx={iconSx}
            />
            <TableBody>
              {stableSort(objectsToDisplay, getComparator(order, orderBy as string))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((obj) => {
                  return (
                    <React.Fragment key={obj.id}>
                      <RowComponent
                        obj={obj}
                        textSx={textSx}
                        // fontSizeStyle={fontSizeStyle}
                        iconSx={iconSx}
                        rowDeleteHandler={rowDeletionHandler}
                        additionalInfo={additionalInfo}
                      />
                    </React.Fragment>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {pagination ? (
          <TablePagination
            sx={[
              textSx,
              { "& .MuiTablePagination-selectLabel": textSx },
              { "& .MuiTablePagination-displayedRows": textSx },
            ]}
            rowsPerPageOptions={[10, 15, 25, 50, 100]}
            component="div"
            count={objectsToDisplay.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        ) : null}
      </Grid>
      <Grid item xs={0} sm={sideSize - 1} md={sideSize} />
    </Grid>
  );
};

export default CustomTable;
