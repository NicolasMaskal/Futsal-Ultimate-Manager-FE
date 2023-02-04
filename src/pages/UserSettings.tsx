import TextField from "@mui/material/TextField";
import { CircularProgress, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import { useState } from "react";
import { useSnackbar } from "notistack";
import PageTitle from "../components/Generic/PageTitle";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const UserSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitNewPassword = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO Api
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get("confirm-new-password"),
    });
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      enqueueSnackbar("Password succesfully changed!", {
        variant: "success",
      });
    }, 500);
  };

  if (isLoading) {
    return (
      <Stack alignItems="center" className="min-h-screen" justifyContent="center">
        <CircularProgress color={"primary"} />
      </Stack>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PageTitle title={"USER SETTINGS"} />
      <Stack
        alignItems="center"
        className="min-h-screen"
        justifyContent="center"
        display={isLoading ? "flex" : "none"}
      >
        <CircularProgress color={"primary"} />
      </Stack>
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
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmitNewPassword}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <span className={"font-bold"}>Email:</span> example@google.com
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm New Password"
                  type="password"
                  id="confirm-password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UserSettings;
