import React from "react";
import Typography from "@mui/material/Typography";
import useMobileView from "../../hooks/useMobileView";

const PageDescription: React.FC<{ children: React.ReactNode }> = (props) => {
  const mobileView = useMobileView();
  return (
    <Typography sx={{ textAlign: "center", pb: 2, px: mobileView ? 1 : 15 }}>
      {props.children}
    </Typography>
  );
};

export default PageDescription;
