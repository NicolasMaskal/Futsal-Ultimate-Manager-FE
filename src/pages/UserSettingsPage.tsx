import Box from "@mui/material/Box";
import * as React from "react";
import PageTitle from "../components/Generic/PageTitle";
import Container from "@mui/material/Container";
import ChangePasswordForm from "../components/UserSettings/ChangePasswordForm";
import { Fade } from "@mui/material";

const UserSettingsPage = () => {
  return (
    <Box
      className="pb-20"
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
              marginTop: 10,
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

export default UserSettingsPage;
