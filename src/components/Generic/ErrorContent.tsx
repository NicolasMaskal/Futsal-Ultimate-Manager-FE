import React from "react";
import FeedbackIcon from "@mui/icons-material/Feedback";

const ErrorContent: React.FC<{
  mainText: string;
  secondaryText: string;
  statusCode: number;
}> = ({ mainText, secondaryText, statusCode }) => {
  return (
    <div className="h-64 p-24">
      <FeedbackIcon color="action" sx={{ fontSize: 60 }} />
      <p className="mt-10">{mainText}</p>
      <p>{secondaryText}</p>
    </div>
  );
};

export default ErrorContent;
