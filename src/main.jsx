import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "../src/componentes/ErrorPage/Error";
import EsqueceuSenha from "./componentes/EsqueceuSenha";
import Cadastro from "./componentes/Cadastro";
import Home from "./componentes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/entrou",
    element: <Home />,
  },
  {
    path: "/esqueceu-senha",
    element: <EsqueceuSenha />,
  },
  {
    path: "/increva-se",
    element: <Cadastro />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
