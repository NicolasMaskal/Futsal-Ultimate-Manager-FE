import { CircularProgress } from "@mui/material";
import React from "react";

const LoadingFullPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <CircularProgress color="primary" />
    </div>
  );
};

export default LoadingFullPage;
