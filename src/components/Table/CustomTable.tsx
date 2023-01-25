import * as React from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MyTableHeader, {
  HeadCellType,
  Order,
} from "./subComponents/MyTableHeader";
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
  DataType extends { id: number },
  AdditionalInfoType
> {
  obj: DataType;
  textSx: SxProps;
  iconSx: SxProps;
  additionalInfo: AdditionalInfoType;
}

export type RowComponentType<
  DataType extends { id: number },
  AdditionalInfoType
> = (
  p: RowComponentProp<DataType, AdditionalInfoType>
) => React.ReactElement<TableProp<DataType, AdditionalInfoType>>;

interface TableProp<DataType extends { id: number }, AdditionalInfoType> {
  RowComponent: RowComponentType<DataType, AdditionalInfoType>;
  objects: DataType[] | null;
  headCells: HeadCellType[];
  defaultOrderBy: string;
  defaultOrder: Order;
  pagination: boolean;
  size: number;
  additionalInfo: AdditionalInfoType;
}

const CustomTable: <DataType extends { id: number }, AdditionalInfoType>(
  p: TableProp<DataType, AdditionalInfoType>
) => React.ReactElement<TableProp<DataType, AdditionalInfoType>> = ({
  RowComponent,
  objects,
  headCells,
  defaultOrderBy,
  defaultOrder,
  pagination,
  size,
  additionalInfo,
}) => {
  const [order, setOrder] = React.useState<Order>(defaultOrder);
  const [orderBy, setOrderBy] = React.useState(defaultOrderBy);
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  useEffect(() => {
    if (!pagination && objects !== null) {
      setRowsPerPage(objects.length);
    }
  }, [pagination, objects]);

  if (objects === null) {
    return <SkeletonTable size={size} />;
  }
  const sideSize = (12 - size) / 2;
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const iconSx = {
    // TODO Change to rem
    fontSize: {
      lg: 24,
      md: 15,
      sm: 10,
      xs: 10,
    },
  };

  const textSx = {
    // TODO Change to rem
    fontSize: {
      lg: 15,
      md: 10,
      sm: 8,
      xs: 6,
    },
  };

  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      <Grid item xs={0} sm={sideSize - 1} md={sideSize} />
      <Grid item xs={12} sm={size + 1} md={size}>
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
              {stableSort(objects, getComparator(order, orderBy as string))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((obj) => {
                  return (
                    <React.Fragment key={obj.id}>
                      <RowComponent
                        obj={obj}
                        textSx={textSx}
                        // fontSizeStyle={fontSizeStyle}
                        iconSx={iconSx}
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
            count={objects.length}
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
