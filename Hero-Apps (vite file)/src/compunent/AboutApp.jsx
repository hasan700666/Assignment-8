import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { addData } from "./utility/LS";
import { ToastContainer, toast } from "react-toastify";

const AboutApp = () => {
  const data = useLoaderData();

  //console.log(data);

  const { id } = useParams();

  //console.log(id);

  const findData = data.find((data) => id == data.id); //the data

  //console.log(findData);

  const [state, SetState] = useState();

  const gatAllData1 = () => {
    const AllData = localStorage.getItem("InstallList");

    if (AllData) {
      const AllDataToPars = JSON.parse(AllData);
      return AllDataToPars;
    } else {
      return [];
    }
  };

  useEffect(() => {
    const value = gatAllData1();

    if (value.includes(id)) {
      SetState(false);
    } else {
      SetState(true);
    }
  }, []);

  const LS = (id) => {
    let TOF = addData(id);

    console.log(TOF);

    if (TOF === true) {
      console.log("adding to instole");
      SetState(false);
    } else {
      console.log("add into LS");
    }
  };

  const notify = () => toast("added into install page");

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              onClick={() => {
                LS(id);
                notify();
              }}
              className={state ? "btn btn-primary" : "disabled"}
            >
              {state ? "Install Now the game" : "Installed"}
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
