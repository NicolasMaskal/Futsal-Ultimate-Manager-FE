import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AppName = () => {
  return (
    <Box className="flex flex-grow">
      <Button
        component={Link}
        to="/"
        color="inherit"
        sx={{ p: { xs: 0, md: 2 }, display: "flex" }}
      >
        <Typography
          noWrap
          variant="body1"
          sx={{
            display: { md: "flex" },
            fontFamily: "Segoe UI",
            fontWeight: 700,
            fontSize: "1.2rem",
            letterSpacing: { md: ".1rem", lg: ".2rem", xl: ".2rem" },
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Futsal Ultimate Manager
        </Typography>
      </Button>
    </Box>
  );
};

export default AppName;
