import React from "react";
import IMG from "../assets/demo-app (1).webp";

const InstallationApp = ({ data }) => {
  const Data = data;

  console.log(Data);

  return (
    <div>
      <div>
        <div className="flex justify-between gap-7 py-5 mx-10 items-center">
          <div className="flex items-center">
            <div className="mx-9">{IMG}</div>
            <div>
              <div>{Data.title}</div>
              <div className="flex justify-center items-center gap-15">
                <div>{Data.downloads}</div>
                <div>{Data.ratingAvg}</div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="btn">Uninstall</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationApp;
