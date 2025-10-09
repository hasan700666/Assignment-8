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

  //const [sort, setSort] = useState("");

  const HTOL = () => {
    const data = [...InstalldList].sort((a, b) => b.downloads - a.downloads);
    SetInstalldList(data);
  };

  const LTOH = () => {
    const data = [...InstalldList].sort((a, b) => a.downloads - b.downloads);
    SetInstalldList(data);
  };
  return (
    <div>
      <div className="text-5xl font-bold text-center my-5">
        Your Installed Apps
      </div>
      <div className="text-2xl text-center my-5">
        Explore All Trending Apps on the Market developed by us
      </div>
      <div className="flex justify-between items-center">
        <p className="mx-10">
          <span id="AppNumber">{InstalldList.length}</span> Apps Found
        </p>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            sort by⬇️
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={HTOL}>High-Low</a>
            </li>
            <li>
              <a onClick={LTOH}>Low-High</a>
            </li>
          </ul>
        </div>
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
