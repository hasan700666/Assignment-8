import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import "../CSS file/css.css";

const Header = () => {
  const list = (
    <>
      <NavLink to="/">
        <li className="m-2 font-bold">Home</li>
      </NavLink>
      <NavLink to="AllApplication">
        <li className="m-2 font-bold">Apps</li>
      </NavLink>
      <NavLink to="Installation">
        <li className="m-2 font-bold">Installation</li>
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {list}
            </ul>
          </div>
          <NavLink to="/">
            <div className="flex justify-center items-center mx-5">
              <img className="w-8" src={logo} alt="" />
              <a className="btn btn-ghost text-xl">HERO.IO</a>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul id="under" className="menu menu-horizontal px-1">
            {list}
          </ul>
        </div>
        <div className="navbar-end mx-5">
          <a
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold text-neutral-50"
            href="https://github.com/hasan700666"
          >
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
