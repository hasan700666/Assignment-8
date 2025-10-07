import React from "react";
import { Outlet } from "react-router";
import Footer from "../compunent/Footer";
import Header from "../compunent/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
