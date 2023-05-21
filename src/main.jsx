import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./pages/About";
import Home from "./pages/Home";
import IntroHtml from "./pages/IntroHtml";
import IntroCss from "./pages/IntroCss";
import IntroJS from "./pages/IntroJS";
import IntroJSFramework from "./pages/IntroJSFramework";
import IntroJSServer from "./pages/IntroJSServer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/intro-html",
    element: <IntroHtml />,
  },
  {
    path: "/intro-javascript",
    element: <IntroJS />,
  },
  {
    path: "/intro-jsframework",
    element: <IntroJSFramework />,
  },
  {
    path: "/intro-jsserver",
    element: <IntroJSServer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);