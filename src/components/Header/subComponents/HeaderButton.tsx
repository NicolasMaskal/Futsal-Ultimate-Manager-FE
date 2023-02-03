import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import useMobileView from "../../../hooks/Generic/useMobileView";

const HeaderButton: React.FC<{
  tooltipText: string;
  startIcon: React.ReactNode;
  buttonText: string;
  onClick?: React.MouseEventHandler | undefined;
  href: string;
}> = ({
  tooltipText = "",
  startIcon,
  buttonText,
  onClick = undefined,
  href,
}) => {
  const mobileView = useMobileView();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Tooltip title={tooltipText}>
        <Button
          component={Link}
          to={href}
          sx={{ p: { xs: 0, md: 2 }, display: "flex" }}
          startIcon={startIcon}
          color="inherit"
          onClick={onClick}
          size={mobileView ? "small" : "medium"}
        >
          <Typography>{buttonText}</Typography>
        </Button>
      </Tooltip>
    </Box>
  );
};

export default HeaderButton;
