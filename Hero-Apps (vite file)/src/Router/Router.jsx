import { createBrowserRouter } from "react-router";
import Home from "../compunent/Page/Home";
import Root from "../Root/Root";
import Error from "../compunent/Error";

async function dataLoader() {
  const data = await fetch("TopAppData.json");
  const dataJSON = await data.json();
  return dataJSON;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        loader: dataLoader,
        Component: Home,
      },
    ],
  },
]);
