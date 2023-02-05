import * as React from "react";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { TextField } from "formik-mui";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { INDEX_URL, LOGIN_URL } from "../constants/urls";
import { Divider, Fade } from "@mui/material";
import { Field, Form, Formik } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import useSendData from "../hooks/Generic/useSendData";
import { BE_REGISTER_URL } from "../constants/be-urls";
import { useAppDispatch } from "../hooks/Generic/hooks";
import { setUser } from "../store/user-slice";
import { User } from "../models";
import { validateFormEmail } from "../utils/formValidators/email-validator";
import { validateFormPassword } from "../utils/formValidators/password-validator";
import { validateFormTeamName } from "../utils/formValidators/team-name-validator";
import ErrorAlert from "../components/Generic/ErrorAlert";
import { FormikHelpers } from "formik/dist/types";

interface ValueType {
  email: string;
  teamName: string;
  password: string;
  confirmPassword: string;
}

const initialValues: ValueType = {
  email: "",
  teamName: "",
  password: "",
  confirmPassword: "",
};

const validateForm = (values: ValueType) => {
  let errors = validateFormPassword(values);
  errors = validateFormTeamName(values, errors);
  errors = validateFormEmail(values, errors);
  return errors;
};

interface InputSendData {
  email: string;
  team_name: string;
  password: string;
}

interface OutputSendData {
  message: string;
  user: User;
}

export default function SignUp() {
  const { response, error, resetError, sendData, loading } = useSendData<
    InputSendData,
    OutputSendData
  >(BE_REGISTER_URL, "post");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitForm = (values: ValueType, { setSubmitting }: FormikHelpers<ValueType>) => {
    sendData({
      email: values.email,
      team_name: values.teamName,
      password: values.password,
    })
      .finally(() => setSubmitting(false))
      .catch(() => {});
  };

  useEffect(() => {
    if (response) {
      dispatch(setUser({ user: response.user }));
      navigate(INDEX_URL);
    }
  }, [navigate, response, dispatch]);

  return (
    <Fade in={true}>
      <Container component="main" maxWidth="xs" className="pt-4">
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={submitForm}
          >
            {({ submitForm, isValid }) => (
              <Form>
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        required
                        fullWidth
                        name="teamName"
                        label="Team name"
                        type="input"
                        id="team-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirm-password"
                        autoComplete="new-password"
                      />
                    </Grid>
                  </Grid>
                  <LoadingButton
                    type="submit"
                    loading={loading}
                    fullWidth
                    variant="contained"
                    onClick={submitForm}
                    sx={{ mt: 3, mb: 2 }}
                    disabled={!isValid}
                  >
                    Sign Up
                  </LoadingButton>
                  <ErrorAlert
                    onClose={resetError}
                    error={error}
                    defaultErrorMsg={"Error signing up!"}
                  />
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link
                        component={RouterLink}
                        to={LOGIN_URL}
                        href="#"
                        variant="body2"
                      >
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </Fade>
  );
}
