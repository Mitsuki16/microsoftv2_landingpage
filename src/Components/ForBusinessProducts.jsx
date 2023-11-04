import { faAlignLeft, faArrowLeft, faArrowRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ForBusinessProducts(props) {
  const products_list = [
    {
      image_path: "images/SurfaceForBusiness.avif",
      title: "Surface for Business",
      description:
        "No matter what you do, there’s a Surface to help you do it.",
      link_text: "Shop now",
    },
    {
      image_path: "images/TryTeamsForFree.webp",
      title: "Get Microsoft Teams for free",
      description:
        "Online meetings, chat and shared cloud storage – all in one place.",
      link_text: "Sign up for free",
    },
    {
      image_path: "images/TryMicrosoft365ForFree.webp",
      title: "Try Microsoft 365 for free",
      description:
        "Get Microsoft Teams, secure cloud storage and premium apps across devices with a free one-month Microsoft 365 Business Standard trial.",
      link_text: "Start your free trial",
    },
    {
      image_path: "images/EraofAI.jpg",
      title: "Join the era of AI",
      description:
        "Create, communicate, and code with the latest Microsoft AI solutions.",
      link_text: "Explore AI solutions",
    },
  ];
  return (
    <div className=" px-[10%] mt-10 flex flex-col ">
      <h2 className=" py-6 text-4xl font-semibold ">For business</h2>
      <div className=" flex  gap-10 ">
        {products_list.map((item) => {
          return (
            <div className=" w-[30%] flex justify-around flex-col gap-3">
              <img src={item.image_path} />
              <h2 className=" text-3xl font-semibold">{item.title}</h2>
              <p className=" text-base">{item.description}</p>
              <a className="hover:underline text-lg font-semibold text-blue-700">
                {item.link_text}
                <FontAwesomeIcon className=" ml-3" icon={faChevronRight} />
              </a>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForBusinessProducts;
