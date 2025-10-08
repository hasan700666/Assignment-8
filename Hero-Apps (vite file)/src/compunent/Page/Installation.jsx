import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { gatAllData } from "../utility/LS";
import InstallationApp from "../InstallationApp";

const Installation = () => {
  const data = useLoaderData();

  const [InstalldList, SetInstalldList] = useState([]);

  useEffect(() => {
    const LSdata = gatAllData();

    const toNumber = LSdata.map((data) => parseInt(data));

    const findTheData = data.filter((data) => toNumber.includes(data.id));
    SetInstalldList(findTheData);
    console.log(findTheData);
  }, []);

  return (
    <div>
      <div className="text-5xl font-bold text-center my-5">
        Your Installed Apps
      </div>
      <div className="text-2xl text-center my-5">
        Explore All Trending Apps on the Market developed by us
      </div>
      <div className="flex justify-between items-center">
        <p className="mx-10">{InstalldList.length} Apps Found</p>
        <button className="mx-10">Sort By Size</button>
      </div>
      <div>
        {InstalldList.map((data) => (
          <InstallationApp data={data}></InstallationApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
