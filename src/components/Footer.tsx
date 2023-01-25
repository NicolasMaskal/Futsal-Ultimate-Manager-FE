import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

const Footer = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      className="pt-4"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/Nicolas264859/Futsal-sim-FE"
      >
        Nicolas Maskal
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Footer;
