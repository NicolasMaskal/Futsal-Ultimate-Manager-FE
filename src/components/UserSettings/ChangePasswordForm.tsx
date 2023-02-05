import { Field, Form, Formik } from "formik";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/Generic/hooks";
import { getUserOrFail } from "../../selectors/user";
import { useSnackbar } from "notistack";
import useSendData from "../../hooks/Generic/useSendData";
import { BE_CHANGE_PASSWORD_URL } from "../../constants/be-urls";
import { FormikHelpers } from "formik/dist/types";
import { validateFormPassword } from "../../utils/formValidators/password-validator";
import ErrorAlert from "../Generic/ErrorAlert";
import { TextField } from "formik-mui";
import { LoadingButton } from "@mui/lab";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

interface ValueType {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

const initialValues: ValueType = {
  oldPassword: "",
  password: "",
  confirmPassword: "",
};

const ChangePasswordForm = () => {
  const user = useAppSelector(getUserOrFail);
  const { response, error, resetError, sendData, loading } = useSendData<
    { current_password: string; new_password: string },
    {}
  >(BE_CHANGE_PASSWORD_URL, "post");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (response) {
      enqueueSnackbar("Password successfully changed!", { variant: "success" });
    }
  }, [enqueueSnackbar, response]);

  const submitForm = (
    values: ValueType,
    { setSubmitting, resetForm }: FormikHelpers<ValueType>
  ) => {
    sendData({
      current_password: values.oldPassword,
      new_password: values.password,
    })
      .then(() => resetForm())
      .finally(() => setSubmitting(false))
      .catch(() => {});
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateFormPassword}
      onSubmit={submitForm}
    >
      {({ isValid }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <span className={"font-bold"}>Email:</span> {user.email}
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                required
                fullWidth
                name="oldPassword"
                label="Current Password"
                type="password"
                id="password"
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
                label="New Password"
                type="password"
                id="new-password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                required
                fullWidth
                name="confirmPassword"
                label="Confirm New Password"
                type="password"
                id="confirm-password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <ErrorAlert
            onClose={resetError}
            error={error}
            defaultErrorMsg={"Error changing password!"}
          />
          <LoadingButton
            disabled={!isValid}
            fullWidth
            type="submit"
            loading={loading}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <Typography>Change Password</Typography>
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;
