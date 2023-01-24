import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";

const RootPage = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading")
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );

  return (
    <>
      <Header />
      <div className="flex flex-col h-screen pt-4">
        <div className="w-full h-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RootPage;
