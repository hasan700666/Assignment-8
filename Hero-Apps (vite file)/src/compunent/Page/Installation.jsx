import React from "react";

const Installation = () => {
  return (
    <div>
      <div className="text-5xl font-bold text-center my-5">
        Your Installed Apps
      </div>
      <div className="text-2xl text-center my-5">
        Explore All Trending Apps on the Market developed by us
      </div>
      <div>
        <div className="flex justify-between items-center">
          <p className="mx-10">1 Apps Found</p>
          <button className="mx-10">Sort By Size</button>
        </div>
        <div className="flex justify-between gap-7 py-5 mx-10">
          <div className="flex items-center">
            <div className="mx-9">IMG</div>
            <div>
              <div>Forest: Focus for Productivity</div>
              <div className="flex justify-center items-center gap-15">
                <div>ratting</div>
                <div>star</div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div>Uninstall</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
