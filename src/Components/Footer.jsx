import { faArrowUp, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer(props) {
  return (
    <div className=" flex justify-between my-20 px-[10%] ">
      <div className=" flex items-center gap-5 ">
        <p className=" text-xl">Follow Microsoft </p>
        <div className=" flex gap-5 [&>img]:border-dotted [&>img]:cursor-pointer ">
          <img className=" w-12" src="images/LogoFB.avif" />
          <img className=" w-12" src="images/LogoX.webp" />
          <img className=" w-12" src="images/LogoYouTube.webp" />
        </div>
      </div>
      <div>
        <button className=" font-semibold p-3 bg-gray-400 w-36">
          <FontAwesomeIcon icon={faArrowUp} />
          <span className=" pl-2">Back To Top</span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
