// index.js (or similar entry file)
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* Add BrowserRouter here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
