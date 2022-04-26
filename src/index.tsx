import React from "react";
import ReactDOM from "react-dom/client";

import { RoutesAppllication } from "./routes";

import { GlobalStyle } from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RoutesAppllication />
  </React.StrictMode>
);
