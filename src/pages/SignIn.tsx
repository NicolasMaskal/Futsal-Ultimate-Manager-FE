import * as React from "react";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { INDEX_URL, REGISTER_URL } from "../constants/urls";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import LoadingButton from "@mui/lab/LoadingButton";
import { FormikHelpers } from "formik/dist/types";
import { isEmail } from "../utils/stringHelpers";
import useSendData from "../hooks/useSendData";
import { BE_LOGIN_URL } from "../constants/be-urls";
import { setUser } from "../store/user-slice";
import { User } from "../models";
import { useDispatch } from "react-redux";

interface Values {
  email: string;
  password: string;
}

const initialValues = {
  email: "",
  password: "",
};
const validateForm = (values: Values) => {
  const errors: Partial<Values> = {};
  if (!isEmail(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export default function SignIn() {
  const { error, response, sendData } = useSendData<{
    session: string;
    user: User;
  }>(BE_LOGIN_URL, "post");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitForm = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setSubmitting(true);
    sendData({ email: values.email, password: values.password });
    console.log(response);
    setSubmitting(false);
  };

  if (error) {
    console.log("Error!", error);
  }

  useEffect(() => {
    if (response) {
      dispatch(setUser({ user: response.user }));
      navigate(INDEX_URL);
    }
  }, [navigate, response, dispatch]);

  // if (response) {
  //   dispatch(setUser({ user: response.user }));
  //   return <Navigate to={INDEX_URL} />;
  // }

  return (
    <Container component="main" maxWidth="xs" className="pt-4">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={submitForm}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Box sx={{ mt: 1 }}>
                <Field
                  component={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <Field
                  component={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <LoadingButton
                  loading={isSubmitting}
                  fullWidth
                  variant="contained"
                  onClick={submitForm}
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                >
                  <Typography>Sign In</Typography>
                </LoadingButton>
                <Grid container spacing={5}>
                  <Grid item>
                    <Link
                      component={RouterLink}
                      to={REGISTER_URL}
                      href="#"
                      variant="body2"
                    >
                      {"Don't have an account? Sign Up"}
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
