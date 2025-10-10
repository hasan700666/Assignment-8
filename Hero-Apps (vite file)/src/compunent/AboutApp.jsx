import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { addData } from "./utility/LS";
import { ToastContainer, toast } from "react-toastify";
import AppNotFoundError from "./AppNotFoundError";
import IMG from "../assets/demo-app (1).webp";
import { MdDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";

const AboutApp = () => {
  const data = useLoaderData();

  //console.log(data);

  const { id } = useParams();

  //console.log(id);

  //the data

  const [app, setApp] = useState(null);

  const [found, setFound] = useState(false);

  useEffect(() => {
    const findData = data.find((data) => id == data.id);

    if (findData) {
      console.log("true");
      setApp(findData);
    } else {
      console.log("un");
      setFound(true);
    }
  }, [data, id]);

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
      {found ? (
        <AppNotFoundError></AppNotFoundError>
      ) : (
        <div>
          <div className="">
            <div className="hero-content flex-col lg:flex-row justify-start">
              <div>
                <img src={IMG} className="w-100 rounded-lg shadow-2xl mx-20" />
              </div>
              <div className="flex flex-col justify-center items-center lg:block">
                <h1 className="text-5xl font-bold">{app?.title}</h1>
                <p className="py-5 pb-20">
                  <span>Developed by </span>
                  {app?.companyName}
                </p>
                <div className="flex justify-center gap-5">
                  <p className="">
                    <span>
                      <MdDownload /> Downloads <br /> {app?.downloads}
                    </span>
                  </p>
                  <p className="">
                    <span>
                      <FaStar /> Average Ratings <br /> {app?.ratingAvg}
                    </span>
                  </p>
                  <p className="">
                    <span>
                      <AiTwotoneLike /> Total Reviews <br /> {app?.reviews}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => {
                    LS(id);
                    notify();
                  }}
                  className={state ? "btn btn-primary my-7" : "disabled my-7"}
                >
                  {state ? "Install Now the game" : "Installed"}
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
          <div>
            <div>gujfjgjk</div>
          </div>
          <div className="m-10">
            <div className="font-bold my-3">Description</div>
            <div>{app?.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutApp;
