import React from "react";
import { Outlet, useNavigation } from "react-router";
import Footer from "../compunent/Footer";
import Header from "../compunent/Header";
import Loader from "../compunent/Loader/Loader";

const Root = () => {
  const loader = useNavigation();

  if (loader.state === "loading") return <Loader></Loader>;

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
