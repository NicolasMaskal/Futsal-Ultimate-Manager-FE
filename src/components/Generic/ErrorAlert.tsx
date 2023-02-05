import { Alert, Collapse } from "@mui/material";
import { getFirstErrorMessage } from "../../utils/be-error-helpers";
import * as React from "react";
import Box from "@mui/material/Box";

const ErrorAlert: React.FC<{
  onClose: () => void;
  error: any;
  defaultErrorMsg: string;
}> = ({ onClose, error, defaultErrorMsg }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={Boolean(error)}>
        <Alert onClose={onClose} className={"mt-4"} severity="error">
          {getFirstErrorMessage(error, defaultErrorMsg)}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default ErrorAlert;
