import React from "react";
import { NavLink } from "react-router";

const HomeData = ({ data }) => {
  const comeData = data;

  console.log(comeData);

  return (
    <NavLink to={`about/${data.id}`}>
      <div className="flex justify-center">
        <div className="card bg-base-100 w-80 shadow-sm">
          <figure className="h-100">
            <img src={data.image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{data.downloads}</div>
              <div className="badge badge-outline">{data.ratingAvg}</div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default HomeData;
