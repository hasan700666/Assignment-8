import React from "react";
import IMG from "../assets/App-Error.png";
import { NavLink } from "react-router";

const AppNotFoundError = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-5 mt-40">
        <img src={IMG} alt="" />
      </div>
      <div className="text-5xl font-bold my-5">OPPS!! APP NOT FOUND</div>
      <div>
        The App you are requesting is not found on our system. please try
        another apps
      </div>
      <NavLink to="/">
        <div className="btn p-5 m-5">Go Back!</div>
      </NavLink>
    </div>
  );
};

export default AppNotFoundError;
