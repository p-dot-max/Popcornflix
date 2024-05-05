import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import router from "./Routes/routes.tsx";
import { RouterProvider } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App.tsx";

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
      <App />
    </React.StrictMode>
);


