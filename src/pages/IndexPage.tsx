import { useSelector } from "react-redux";
import { getUser } from "../selectors/user";
import WelcomePage from "./WelcomePage";
import HomePage from "./HomePage";

const IndexPage = () => {
  const user = useSelector(getUser);

  return user ? <HomePage /> : <WelcomePage />;
};

export default IndexPage