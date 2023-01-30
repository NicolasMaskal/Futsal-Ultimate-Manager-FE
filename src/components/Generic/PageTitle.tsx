import Typography from "@mui/material/Typography";
import React from "react";

const PageTitle: React.FC<{ title: string }> = ({ title }) => (
  <Typography
    component="h1"
    sx={{
      textAlign: "center",
      color: "secondary.main",
      fontFamily: "Segoe UI",
      letterSpacing: { md: ".1rem", lg: ".2rem", xl: ".2rem" },
      fontWeight: 700,
      fontSize: "2rem",
      pb: 2,
    }}
  >
    {title}
  </Typography>
);

export default PageTitle;
