import Box from "@mui/material/Box";
import * as React from "react";
import PageTitle from "../components/Generic/PageTitle";
import Container from "@mui/material/Container";
import ChangePasswordForm from "../components/UserSettings/ChangePasswordForm";
import { Fade, Grow } from "@mui/material";

const UserSettings = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PageTitle title={"USER SETTINGS"} />
      <Fade in={true}>
        <Container maxWidth="xs">
          <Box
            maxWidth="xs"
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ChangePasswordForm />
          </Box>
        </Container>
      </Fade>
    </Box>
  );
};

export default UserSettings;
