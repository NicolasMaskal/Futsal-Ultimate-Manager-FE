import SaveIcon from "@mui/icons-material/Save";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";

const SaveButton: React.FC<{
    handleOnSaveClick: React.MouseEventHandler;
    isLoading: boolean
}> = ({handleOnSaveClick , isLoading}) => {
    return (
        <LoadingButton
            color="primary"
            onClick={handleOnSaveClick}
            loading={isLoading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
        >
            <Typography>Save</Typography>
        </LoadingButton>
    );
}

export default SaveButton