import * as React from "react";
import {useEffect, useState} from "react";
import Avatar from "@mui/material/Avatar";
import {TextField} from "formik-mui";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import {Link as RouterLink, useNavigate} from "react-router-dom";
import {INDEX_URL, LOGIN_URL} from "../constants/urls";
import {Alert, Divider} from "@mui/material";
import {Field, Form, Formik} from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import {isEmail, passwordContainsValidCharacters,} from "../utils/stringHelpers";
import useSendData from "../hooks/Generic/useSendData";
import {BE_REGISTER_URL} from "../constants/be-urls";
import {FormikHelpers} from "formik/dist/types";
import {useAppDispatch} from "../hooks/Generic/hooks";
import {setUser} from "../store/user-slice";
import {User} from "../models";

interface Values {
  email: string;
  teamName: string;
  password: string;
  confirmPassword: string;
}

const initialValues: Values = {
  email: "",
  teamName: "",
  password: "",
  confirmPassword: "",
};

const validateForm = (values: Values) => {
  const errors: Partial<Values> = {};
  if (values.password !== values.confirmPassword) {
    errors.password = "Password don't match!";
  }
  if(values.password.length < 6){
    errors.password = "Password must contain at least 6 characters!"
  }
  if (!passwordContainsValidCharacters(values.password)) {
    errors.password =
      "This value may contain only English letters, numbers, and @/./+/-/_ characters.";
  }
  if (values.teamName.length < 3) {
    errors.teamName = "Team name has to be at least 3 characters long!";
  }
  if (!isEmail(values.email)) {
    errors.email = "Invalid email address";
  }
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
  const { response, error, sendData } = useSendData<
    InputSendData,
    OutputSendData
  >(BE_REGISTER_URL, "post");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

  const submitForm = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    sendData({
      email: values.email,
      team_name: values.teamName,
      password: values.password,
    });
    setSubmitting(false);
  };

  useEffect(() => {
    if (response) {
      dispatch(setUser({ user: response.user }));
      navigate(INDEX_URL);
    }
  }, [navigate, response, dispatch]);

  useEffect(() => {
    if(error && error.response){
      setErrorMessage(Object.values(error.response.data.extra.fields)[0][0])
    }
  }, [error])

  return (
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
          {({ submitForm, isSubmitting }) => (
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
                  loading={isSubmitting}
                  fullWidth
                  variant="contained"
                  onClick={submitForm}
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                >
                  Sign Up
                </LoadingButton>
                {errorMessage && <Alert severity="error">{`${errorMessage}`}</Alert>}
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
  );
}
