import {useSelector} from "react-redux";
import {getUser} from "../../selectors/user";
import React from "react";
import {Navigate} from "react-router-dom";
import {EMAIL_VERIFICATION_REQUIRED_URL} from "../../constants/urls";
import ErrorPage from "../../pages/ErrorPage";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = useSelector(getUser);

  if (!user) {
    return <ErrorPage errorStatus={401} />
  }
  else if(!user.email_verified) {
    return <Navigate to={EMAIL_VERIFICATION_REQUIRED_URL} />
  }
  return <>{children}</>;
};

export default PrivateRoute;
