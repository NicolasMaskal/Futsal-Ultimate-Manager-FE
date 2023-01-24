import * as React from "react";
import { Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";
import useMobileView from "../../../hooks/useMobileView";

const SkeletonTable: React.FC<{ size: number }> = ({ size }) => {
  const sideSize = (12 - size) / 2;
  const mobileView = useMobileView();
  const skeletonHeight = mobileView ? 400 : 750;
  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      <Grid item xs={0} sm={sideSize - 1} md={sideSize} />
      <Grid item xs={12} sm={size + 1} md={size}>
        <Skeleton
          height={skeletonHeight}
          variant="rounded"
          sx={{ borderRadius: "18px" }}
        />
      </Grid>
      <Grid item xs={0} sm={sideSize - 1} md={sideSize} />
    </Grid>
  );
};

export default SkeletonTable;
