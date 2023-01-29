import React from "react";
import { useRouteError } from "react-router-dom";
import ErrorContent from "../components/Generic/ErrorContent";
import Header from "../components/Header/Header";

const ErrorPage = () => {
  const error = useRouteError();

  let errorContent;
  const status = error.response !== undefined ? error.response.status : 404;
  switch (status) {
    case 404:
      error.response && console.log(error.response.data.message);
      errorContent = (
        <ErrorContent
          mainText={`Sorry, we couldn't find the content you are looking for. (Status code: ${status})`}
          secondaryText="Try it again later..."
          statusCode={status}
        />
      );
      break;
    case 401:
      console.log(error.response.data.message);
      errorContent = (
        <ErrorContent
          mainText={`You have to be logged in for this action. (Status code: ${error.response.status})`}
          secondaryText="Try to log in and repeat the action..."
          statusCode={error.response.status}
        />
      );
      break;
    case 403:
      console.log(error.response.data.message);
      errorContent = (
        <ErrorContent
          mainText={`Sorry, you don't have permission for this. (Status code: ${error.response.status})`}
          secondaryText="Try to achieve some..."
          statusCode={error.response.status}
        />
      );
      break;
    default:
      console.log(error.response.data.message);
      errorContent = (
        <ErrorContent
          mainText="Sorry, something went wrong."
          secondaryText="Try it again later..."
          statusCode={error.response.status}
        />
      );
      break;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col h-screen">
        {/*<ResponsiveAppBar /> */}
        <div className="w-full h-full">{errorContent}</div>
      </div>
    </>
  );
};

export default ErrorPage;
