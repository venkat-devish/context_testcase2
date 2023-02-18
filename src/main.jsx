import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PaginationContextProvider } from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PaginationContextProvider>
    <App />
  </PaginationContextProvider>
);
