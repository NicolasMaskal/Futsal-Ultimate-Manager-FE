import { useSelector } from "react-redux";
import { getUser } from "../selectors/user";
import WelcomePage from "./WelcomePage";
import HomePage from "./HomePage";
import { Navigate } from "react-router-dom";
import { EMAIL_VERIFICATION_REQUIRED_URL } from "../constants/urls";

const IndexPage = () => {
  const user = useSelector(getUser);
  if (user && !user.email_verified) {
    return <Navigate to={EMAIL_VERIFICATION_REQUIRED_URL} />;
  }
  return user ? <HomePage /> : <WelcomePage />;
};

export default IndexPage;
