import Typography from "@mui/material/Typography";
import * as React from "react";

const Footer = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      className="pt-8 pb-2 "
      {...props}
    >
      {"Copyright © "}
      <Typography variant="body2" component={"span"} display="inline">
        <a
          target="_blank"
          rel="noreferrer"
          color="inherit"
          href="https://www.linkedin.com/in/nicolasmaskal/"
        >
          Nicolas Maskal
        </a>
        {", "}
        <a
          target="_blank"
          rel="noreferrer"
          color="inherit"
          href="https://github.com/Nicolas264859/"
        >
          Github
        </a>
      </Typography>
    </Typography>
  );
};

export default Footer;
