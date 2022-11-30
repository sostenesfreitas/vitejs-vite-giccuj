import React from "react";
import ReactDOM from "react-dom/client";
import router from "./route";
import { RouterProvider } from "react-router-dom";
import './main.css'
import AuthProvider from "./hooks/Auth";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>
);
