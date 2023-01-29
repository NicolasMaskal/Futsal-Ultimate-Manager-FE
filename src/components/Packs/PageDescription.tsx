import React from "react";
import Typography from "@mui/material/Typography";

const PageDescription: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Typography sx={{ textAlign: "center", pb: 2, px: 15 }}>
      {props.children}
    </Typography>
  );
};

export default PageDescription;
