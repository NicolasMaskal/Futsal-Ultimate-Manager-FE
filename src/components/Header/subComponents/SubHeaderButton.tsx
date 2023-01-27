import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
const SubHeaderButton: React.FC<{
  tooltipText?: string | null;
  startIcon: React.ReactNode;
  buttonText: string;
  href: string;
}> = ({ tooltipText = null, startIcon, buttonText, href }) => {
  return (
    <Container sx={{ display: "flex", justifyContent: "space-around" }}>
      <Tooltip title={tooltipText}>
        <Button
          component={Link}
          to={href}
          startIcon={startIcon}
          color="inherit"
          // sx={{ p: { xs: 0, md: 2 }, display: "flex" }}
        >
          <Typography className="text-gray-600 text-center text-sm">
            {buttonText}
          </Typography>
        </Button>
      </Tooltip>
    </Container>
  );
};

export default SubHeaderButton;
