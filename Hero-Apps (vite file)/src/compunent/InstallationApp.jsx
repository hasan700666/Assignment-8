import React from "react";
import IMG from "../assets/demo-app (1).webp";
import { removeItem } from "./utility/LS";
import { ToastContainer, toast } from "react-toastify";

const InstallationApp = ({ data }) => {
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

  const notify = () => toast("uninstalled");

  return (
    <div>
      <div id={Data.id}>
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
            <div
              onClick={() => {
                remove_to_cart(Data.id);
                notify();
              }}
              className="btn"
            >
              Uninstall
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstallationApp;
