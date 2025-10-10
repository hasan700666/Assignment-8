import React from "react";
import IMG from "../assets/demo-app (1).webp";
import { removeItem } from "./utility/LS";
import { MdDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const InstallationApp = ({ data, notify }) => {
  const Data = data;

  console.log(Data);

  function remove_to_cart(id) {
    const remove_card = document.getElementById(`${id}`);
    remove_card.remove();
    removeItem(id);

    let copy_number_text = document.getElementById("AppNumber");

    let INTcopy_number = parseInt(copy_number_text.innerText);
    INTcopy_number = INTcopy_number - 1;
    copy_number_text.innerText = INTcopy_number;
  }

  return (
    <div>
      <div id={Data.id}>
        <div className="flex justify-between gap-7 py-5 mx-10 items-center">
          <div className="flex items-center">
            <div className="mx-5">
              <img src={data.image} alt="" className="w-10" />
            </div>
            <div>
              <div>{Data.title}</div>
              <div className="flex justify-center items-center gap-15">
                <div>
                  <p className="flex items-center gap-1">
                    <MdDownload />
                    {Data.downloads}
                  </p>
                </div>
                <div>
                  <p className="flex items-center gap-1">
                    <FaStar />
                    {Data.ratingAvg}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div
              onClick={() => {
                remove_to_cart(Data.id);
                notify();
              }}
              className="btn"
            >
              Uninstall
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstallationApp;
