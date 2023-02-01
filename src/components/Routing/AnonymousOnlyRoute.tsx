import { useSelector } from "react-redux";
import { getUser } from "../../selectors/user";
import React from "react";
import { Navigate } from "react-router-dom";
import { INDEX_URL } from "../../constants/urls";

const AnonymousOnlyRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = useSelector(getUser);

  return user ? <Navigate to={INDEX_URL} /> : <>{children}</>;
};

export default AnonymousOnlyRoute;
