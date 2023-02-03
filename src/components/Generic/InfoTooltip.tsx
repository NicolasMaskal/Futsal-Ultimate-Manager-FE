import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";

const InfoTooltip: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Tooltip title={title} placement={"left"}>
      <InfoOutlinedIcon fontSize={"small"} />
    </Tooltip>
  );
};

export default InfoTooltip;
