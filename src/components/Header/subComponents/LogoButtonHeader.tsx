import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import logo from "../../../images/futsal_logo.png";
import Button from "@mui/material/Button";
import React from "react";

const LogoButtonHeader = () => {
  return (
    <Button component={Link} to="/" color="inherit" className="flex flex-grow">
      <Box
        component="img"
        sx={{
          maxHeight: {xs: 40, md: 50},
          maxWidth: "100%",
          // display: { xs: "none", md: "flex" },
          mr: 2,
          ml: 2,
        }}
        alt="Logo"
        src={logo}
      />
    </Button>
  );
};

export default LogoButtonHeader;
