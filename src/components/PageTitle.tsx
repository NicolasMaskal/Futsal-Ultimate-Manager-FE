import Typography from "@mui/material/Typography";
import React from "react";

const PageTitle: React.FC<{ title: string }> = ({ title }) => (
  <Typography
    sx={{
      textAlign: "center",
      pb: 2,
      fontWeight: 700,
      // letterSpacing: '.3rem',
      color: "primary.main",
    }}
    variant="h1"
  >
    {title}
  </Typography>
);

export default PageTitle;
