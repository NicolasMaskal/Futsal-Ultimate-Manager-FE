import Typography from "@mui/material/Typography";
import React from "react";

const PageTitle: React.FC<{ title: string }> = ({ title }) => (
  <Typography
    sx={{
      textAlign: "center",
        color: "secondary.main",
      fontFamily: "Segoe UI",
      letterSpacing: { md: ".1rem", lg: ".2rem", xl: ".2rem" },
      fontWeight: 700,
      fontSize: "2rem",
    }}
  >
    {title}
  </Typography>
);

export default PageTitle;
