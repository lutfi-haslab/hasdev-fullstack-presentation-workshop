import
  {
    Outlet,
    ReactLocation,
    Router
  } from "@tanstack/react-location";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";


const location = new ReactLocation();

function App() {

  return (
    <Router location={location} routes={[
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
    ]}>
      <Outlet />
    </Router>
  );
}

export default App;
