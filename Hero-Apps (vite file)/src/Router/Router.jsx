import { createBrowserRouter } from "react-router";
import Home from "../compunent/Page/Home";
import Root from "../Root/Root";
import Error from "../compunent/Error";
import AllApplications from "../compunent/Page/AllApplications";
import Installation from "../compunent/Page/Installation";

async function TopAppDataLoader() {
  const data = await fetch("TopAppData.json");
  const dataJSON = await data.json();
  return dataJSON;
}

async function AllAppDataLoader() {
  const fachData = await fetch("AllAppData.json");
  const JSONdata = await fachData.json();
  return JSONdata;
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
        loader: TopAppDataLoader,
        Component: Home,
      },
      {
        path: "AllApplication",
        loader: AllAppDataLoader,
        Component: AllApplications,
      },
      {
        path: "Installation",
        Component: Installation,
      },
    ],
  },
]);
