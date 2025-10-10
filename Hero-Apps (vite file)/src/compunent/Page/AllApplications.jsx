import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import AllApplicationData from "../AllApplicationData";
import AppNotFound from "../AppNotFound";

const AllApplications = () => {
  const data = useLoaderData();

  const [value, SetValue] = useState(data);

  const [loding, setLoding] = useState(false);

  //console.log(data);

  const hendleChange = (e) => {
    setLoding(true);

    const kye = e.target.value.toLowerCase();

    setTimeout(() => {
      const d = data.filter((da) => da.title.toLowerCase().includes(kye));

      console.log(d);
      console.log(d.length);

      SetValue(d);

      if (d.length == 0) {
        console.log("true");
        // SetValue("data is Not found");
        SetValue([]);
      }

      setLoding(false);
    }, 500);
  };

  // console.log(value);
  // console.log(value === false);
  console.log(value.length);

  return (
    <div>
      <div className="my-20">
        <div className="text-5xl font-bold text-center my-5">
          Our All Applications
        </div>
        <div className="text-2xl text-center my-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </div>
      </div>
      <div className="flex justify-between m-10">
        <div>All App {value.length}</div>
        <div>
          <input
            type="text"
            placeholder=" Search"
            className="border border-black"
            onChange={hendleChange}
          />
        </div>
      </div>
      <div>
        {loding ? (
          <div className="flex justify-center">
            <span className="loading loading-infinity loading-xl w-50"></span>
          </div>
        ) : value.length != 0 ? (
          <div className="lg:grid md:grid sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex flex-col justify-center items-center gap-5">
            {value.map((data) => (
              <AllApplicationData data={data}></AllApplicationData>
            ))}
          </div>
        ) : (
          <AppNotFound></AppNotFound>
        )}
      </div>
    </div>
  );
};

export default AllApplications;
