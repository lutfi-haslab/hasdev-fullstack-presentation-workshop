import Home from "./pages/Home";
import About from "./pages/About";


const routes = [
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
];

export default routes