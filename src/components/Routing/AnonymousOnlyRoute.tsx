import { useSelector } from "react-redux";
import { getUser } from "../../selectors/user";
import React from "react";
import { Navigate } from "react-router-dom";
import {
  EMAIL_VERIFICATION_REQUIRED_URL,
  INDEX_URL,
} from "../../constants/urls";

const AnonymousOnlyRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = useSelector(getUser);
  if (user && !user.email_verified) {
    return <Navigate to={EMAIL_VERIFICATION_REQUIRED_URL} />;
  }
  return user ? <Navigate to={INDEX_URL} /> : <>{children}</>;
};

export default AnonymousOnlyRoute;
