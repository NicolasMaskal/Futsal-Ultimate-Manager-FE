import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";
import Footer from "../components/Generic/Footer";
import Header from "../components/Header/Header";
import {useSelector} from "react-redux";
import {getAppStatus, getUser} from "../selectors/user";
import LoadingFullPage from "../components/Generic/LoadingFullPage";
import {refreshUserInfoThunk} from "../store/user-actions";
import {useAppDispatch} from "../hooks/hooks";

const RootPage = () => {
  const status = useSelector(getAppStatus);
  const user = useSelector(getUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(refreshUserInfoThunk());
    }
  }, [user, dispatch]);

  if (status === "loading")
    return (
      <>
        <Header />
        <LoadingFullPage />
      </>
    );
  return (
    <>
      <Header />
      <div className="flex flex-col h-screen pt-28">
        <div className="w-full h-full">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootPage;
