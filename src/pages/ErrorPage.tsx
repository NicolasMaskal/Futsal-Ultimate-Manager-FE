import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import ErrorContent from "../components/Generic/ErrorContent";
import Header from "../components/Header/Header";

const ErrorPage: React.FC<{ errorStatus?: number | undefined }> = ({
  errorStatus = undefined,
}) => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    console.log(error.error?.message);
  }
  errorStatus = errorStatus ? errorStatus : 404;

  let errorContent;
  switch (errorStatus) {
    case 404:
      errorContent = (
        <ErrorContent
          mainText={`Sorry, we couldn't find the content you are looking for. (Status code: ${errorStatus})`}
          secondaryText="Try it again later..."
          statusCode={errorStatus}
        />
      );
      break;
    case 401:
      errorContent = (
        <ErrorContent
          mainText={`You have to be logged in for this action. (Status code: ${errorStatus})`}
          secondaryText="Try to log in and repeat the action..."
          statusCode={errorStatus}
        />
      );
      break;
    case 403:
      errorContent = (
        <ErrorContent
          mainText={`Sorry, you don't have permission for this. (Status code: ${errorStatus})`}
          secondaryText="Try to achieve some..."
          statusCode={errorStatus}
        />
      );
      break;
    default:
      console.log(errorStatus);
      errorContent = (
        <ErrorContent
          mainText="Sorry, something went wrong."
          secondaryText="Try it again later..."
          statusCode={errorStatus}
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
