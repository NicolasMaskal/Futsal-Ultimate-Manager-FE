import Button from "@mui/material/Button";
import React from "react";
import { SxProps } from "@mui/system";

const ProceedButton: React.FC<{
  onProceedClick: React.MouseEventHandler;
  buttonSx?: SxProps;
}> = ({ onProceedClick, buttonSx = {} }) => {
  return (
    <Button
      onClick={onProceedClick}
      variant="contained"
      color="success"
      sx={buttonSx}
    >
      Proceed
    </Button>
  );
};

export default ProceedButton;
