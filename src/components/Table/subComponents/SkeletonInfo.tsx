import { Container, Skeleton } from "@mui/material";
import React from "react";

const SkeletonInfo: React.FC<{ rowAmount: number }> = ({ rowAmount }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {Array.from({ length: rowAmount }).map((_, index) => (
        <Skeleton key={index} width={200} />
      ))}
    </Container>
  );
};

export default SkeletonInfo;
