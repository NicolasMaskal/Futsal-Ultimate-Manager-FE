import SaveIcon from "@mui/icons-material/Save";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { LoadingButtonProps } from "@mui/lab/LoadingButton/LoadingButton";


interface Props extends LoadingButtonProps  {
  text?: string
}

const SaveButton: React.FC<Props> = ({text = "Save", color= "primary", variant="outlined", ...props}: Props) => {
  return (
    <LoadingButton
      color={color}
      {...props}
      loadingPosition="center"
      startIcon={<SaveIcon />}
      variant={variant}
    >
      <Typography>{text}</Typography>
    </LoadingButton>
  );
};

export default SaveButton;
