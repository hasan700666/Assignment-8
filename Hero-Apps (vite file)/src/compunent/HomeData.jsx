import React from "react";
import IMG from "../assets/demo-app (1).webp";
import { NavLink } from "react-router";

const HomeData = ({ data }) => {
  const comeData = data;

  console.log(comeData);

  return (
    <NavLink to={`about/${data.id}`}>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={IMG} />
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
