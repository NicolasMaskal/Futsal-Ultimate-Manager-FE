import React from "react";
import Typography from "@mui/material/Typography";

const SubPageTitle: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Typography
        component="h2"
      fontSize={"1.5rem"}
      className={"font-bold pb-1"}
      textAlign={"center"}
    >
      {content}
    </Typography>
  );
};

export default SubPageTitle;
