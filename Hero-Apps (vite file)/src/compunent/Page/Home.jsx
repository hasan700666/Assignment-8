import React from "react";
import MovileIMG from "../../assets/hero.png";
import { NavLink, useLoaderData } from "react-router";
import HomeData from "../HomeData";

const Home = () => {
  const data = useLoaderData();

  //console.log(data);

  return (
    <div>
      <div className="text-5xl font-bold text-center mt-10">
        We Build <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-extrabold">
          Productive{" "}
        </span>
        Apps
      </div>
      <div className="text-1xl  text-center m-7">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </div>
      <div className="flex justify-center items-center gap-6 mb-30">
        <a
          className="btn"
          href="https://play.google.com/store/games?device=windows"
        >
          Google Play
        </a>
        <a href="https://www.apple.com/app-store/" className="btn">
          App Store
        </a>
      </div>
      <div className="flex justify-center items-center">
        <img src={MovileIMG} alt="" />
      </div>
      <div className="mb-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-neutral-50">
        <div className="text-3xl text-center py-7">
          Trusted by Millions, Built for You
        </div>
        <div className="flex justify-center ">
          <div className="md:stats shadow md:gap-20 md:pb-7 text-neutral-50 flex justify-center flex-col">
            <div className="flex flex-col justify-center items-center my-5 md:my-0">
              <div className="">Total Downloads</div>
              <div className="stat-value ">29.6M</div>
              <div className="">21% more than last month</div>
            </div>

            <div className="flex flex-col justify-center items-center my-5 md:my-0">
              <div className="">Total Reviews</div>
              <div className="stat-value ">906K</div>
              <div className="">46% more than last month</div>
            </div>
            <div className="flex flex-col justify-center items-center my-5 md:my-0">
              <div className="">Active Apps</div>
              <div className="stat-value ">132+</div>
              <div className="">31 more will Launch</div>
            </div>
          </div>
        </div>
      </div>
      <div className="data-div"></div>
      <div>
        <div className="text-5xl font-bold text-center my-5">Trending Apps</div>
        <div className="text-2xl text-center my-5">
          Explore All Trending Apps on the Market developed by us
        </div>
        <div className="lg:grid md:grid sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex flex-col justify-center items-center gap-10">
          {data.map((data) => (
            <HomeData data={data}></HomeData>
          ))}
        </div>
        <div className="flex justify-center">
          <NavLink to="AllApplication">
            <div className="btn m-10 text-center">Show All</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
