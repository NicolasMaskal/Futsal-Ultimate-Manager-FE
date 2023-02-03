import {useSelector} from "react-redux";
import {getUser} from "../../selectors/user";
import React, {useEffect} from "react";
import {Navigate} from "react-router-dom";
import {EMAIL_VERIFICATION_REQUIRED_URL, LOGIN_URL} from "../../constants/urls";
import {useSnackbar} from "notistack";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = useSelector(getUser);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!user) {
      // Displays twice in dev mode. Only once in production, because of React.StrictMode
      enqueueSnackbar("You need to be logged in to see this page!", {
        variant: "error",
      });
    }
  }, [enqueueSnackbar, user]);

  if (!user) {
    return <Navigate to={LOGIN_URL} />;
  }
  else if(!user.email_verified) {
    return <Navigate to={EMAIL_VERIFICATION_REQUIRED_URL} />
  }
  return <>{children}</>;
};

export default PrivateRoute;
