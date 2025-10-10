import React from "react";
import cross from "../assets/cross.png";

const AppNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <img src={cross} alt="" className="w-25" />
      <div className="text-7xl my-4">No App Found</div>
    </div>
  );
};

export default AppNotFound;
