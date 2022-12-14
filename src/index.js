import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {CardProvider} from "./service/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CardProvider>
  </React.StrictMode>
);
