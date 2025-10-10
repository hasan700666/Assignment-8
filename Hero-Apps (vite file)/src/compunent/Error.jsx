import React from "react";
import IMG from "../assets/error-404.png";
import { NavLink } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-5 mt-40">
        <img src={IMG} alt="" />
      </div>
      <div className="text-5xl font-bold my-5">Oops, page not found!</div>
      <div>The page you are looking for is not available.</div>
      <NavLink to="/">
        <div className="btn p-5 m-5">Go Back!</div>
      </NavLink>
    </div>
  );
};

export default Error;
