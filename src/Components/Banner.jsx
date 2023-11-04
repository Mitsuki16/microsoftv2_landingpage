import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Banner(props) {
  return (
    <div className=" relative">
      <div className=" absolute top-[30%] left-[10%] ">
        <div className=" flex flex-col gap-5 justify-around">
          <h1 className=" text-4xl font-semibold">
            Maximise the everyday with <br /> Microsoft 365
          </h1>
          <p className=" text-base">
            Get online protection, secure cloud storage and innovative apps
            designed to fit <br />your needs – all in one plan.
          </p>
          <div className=" flex items-center gap-10">
            <button className=" p-2 text-xl bg-blue-700 text-white">
              For one person
            </button>
            <p className="text-xl">
              For up to six people <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </div>
        </div>
      </div>
        <div className=" " >
            <img  src="images/banner1.avif" />
        </div>
    </div>
  );
}

export default Banner;
