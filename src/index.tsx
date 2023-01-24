import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <App />
      </DevSupport>
    </StyledEngineProvider>
  </React.StrictMode>
);
