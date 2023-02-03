import PageTitle from "../components/Generic/PageTitle";
import PageDescription from "../components/Packs/PageDescription";
import { useSelector } from "react-redux";
import { getUser } from "../selectors/user";
import { INDEX_URL, LOGIN_URL } from "../constants/urls";
import { Navigate } from "react-router-dom";

const EmailVerificationRequiredPage = () => {
  const user = useSelector(getUser);
  if (!user) {
    return <Navigate to={LOGIN_URL} />;
  } else if (user.email_verified) {
    return <Navigate to={INDEX_URL} />;
  }
  return (
    <>
      <PageTitle title={"Email Verification Required"} />
      <PageDescription>
        Your email address is currently unverified. Please check your email
        inbox and spam folder for a verification link. Clicking the link will
        confirm your email address and allow you to access all features of the
        site.
      </PageDescription>
    </>
  );
};

export default EmailVerificationRequiredPage;
