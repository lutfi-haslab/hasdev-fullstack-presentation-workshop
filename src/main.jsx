import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./pages/About";
import Home from "./pages/Home";
const location = new ReactLocation();

const App = () => {
  return (
    <Router
      location={location}
      routes={[
        {
          path: "/",
          element: <About />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "/slide/home",
          element: <Home />,
        },
      ]}
    >
      <Outlet />
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
