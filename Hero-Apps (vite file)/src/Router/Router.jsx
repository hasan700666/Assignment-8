import { createBrowserRouter } from "react-router";
import Home from "../compunent/Page/Home";
import Root from "../Root/Root";
import Error from "../compunent/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
