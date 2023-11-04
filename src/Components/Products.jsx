import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Products(props) {
  const products_list = [
    {
      image_path: "images/Surface5.webp",
      title: "Surface Laptop 5",
      description:
        "Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.",
      link_text: "Learn More",
    },
    {
      image_path: "images/SurfaceStudio.webp",
      title: "Surface Laptop Studio",
      description:
        "Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.",
      link_text: "Learn More",
    },
    {
      image_path: "images/XboxX.webp",
      title: "Xbox Series X",
      description: "The fastest, most powerful Xbox ever.",
      link_text: "Shop Xbox Series X",
    },
    {
      image_path: "images/XboxS.webp",
      title: "Xbox Series S",
      description: "Next-gen performance in the smallest Xbox ever.",
      link_text: "Shop Xbox Series S",
    },
  ];
  return (
    <div className=" flex justify-center">
      <div className=" flex w-[80%] gap-10 justify-around">
        {products_list.map((item) => {
          return (
            <div className=" w-[30%] flex justify-around flex-col gap-3">
              <img src={item.image_path} />
              <h2 className=" text-3xl font-semibold">{item.title}</h2>
              <p className=" text-base">{item.description}</p>
              <a className=" hover:underline text-lg font-semibold text-blue-700">
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

export default Products;
