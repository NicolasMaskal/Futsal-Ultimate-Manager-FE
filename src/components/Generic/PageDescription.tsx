import React from "react";
import Typography from "@mui/material/Typography";
import useMobileView from "../../hooks/Generic/useMobileView";
import { TailwindClass } from "../../types/tailwind-types";

const PageDescription: React.FC<{
  children: React.ReactNode;
  className?: TailwindClass;
}> = (props) => {
  const mobileView = useMobileView();
  return (
    <Typography
      className={props.className}
      sx={{ textAlign: "center", pb: 2, px: mobileView ? 1 : 15 }}
    >
      {props.children}
    </Typography>
  );
};

export default PageDescription;
