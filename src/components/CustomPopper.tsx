import {Fade, Popper} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import * as React from "react";

const CustomPopper: React.FC<{
  children: React.ReactNode;
  isOpen: boolean;
  anchorEl: null | HTMLElement;
  buttonSuccessText: string;
  handleSuccess: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
}> = ({ children, isOpen, anchorEl, buttonSuccessText, handleSuccess, handleClose }) => {
  return (
    <Popper open={isOpen} anchorEl={anchorEl} transition placement={"left-end"}>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps}>
          <Paper>
              {children}
            <div className="flex justify-center">
              <Button
                sx={{ fontSize: 12 }}
                color="success"
                onClick={handleSuccess}
              >
                {buttonSuccessText}
              </Button>
              <Button sx={{ fontSize: 12 }} color="error" onClick={handleClose}>
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
