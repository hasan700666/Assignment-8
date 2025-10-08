import React from "react";
import { useLoaderData } from "react-router";
import AllApplicationData from "../AllApplicationData";

const AllApplications = () => {
  const data = useLoaderData();

  console.log(data);

  return (
    <div>
      <div className="text-5xl font-bold text-center my-5">
        Our All Applications
      </div>
      <div className="text-2xl text-center my-5">
        Explore All Apps on the Market developed by us. We code for Millions
      </div>
      <div className="lg:grid md:grid sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex flex-col justify-center items-center gap-5">
        {data.map((data) => (
          <AllApplicationData data={data}></AllApplicationData>
        ))}
      </div>
    </div>
  );
};

export default AllApplications;
