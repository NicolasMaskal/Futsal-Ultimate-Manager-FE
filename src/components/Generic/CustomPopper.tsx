import { Fade, Popper, PopperPlacementType } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import * as React from "react";
import { SxProps } from "@mui/system";

const CustomPopper: React.FC<{
  children: React.ReactNode;
  isOpen: boolean;
  anchorEl: null | HTMLElement;
  buttonSuccessText: string;
  handleSuccess: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  placement: PopperPlacementType;
  textSx?: SxProps;
}> = ({
  children,
  isOpen,
  anchorEl,
  buttonSuccessText,
  handleSuccess,
  handleClose,
  placement,
  textSx = {},
}) => {
  const handleSuccessWrapper = (event: React.MouseEvent<HTMLElement>) => {
    handleClose();
    handleSuccess(event)
  }

  return (
    <Popper open={isOpen} anchorEl={anchorEl} transition placement={placement}>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps}>
          <Paper>
            {children}
            <div className="flex justify-center">
              <Button sx={textSx} color="success" onClick={handleSuccessWrapper}>
                {buttonSuccessText}
              </Button>
              <Button sx={textSx} color="error" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default CustomPopper;
