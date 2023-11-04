import React from "react";

function ItemsList(props) {
  return (
    <div className=" flex justify-center">
      <div className=" flex gap-10 py-10">
        {[
          ["Choose your Microsoft 365", "images/windows.webp"],
          ["Buy Xbox games and consoles", "images/xbox.webp"],
          ["Get Windows 11", "images/windows.webp"],
          ["Explore Surface devices", "images/surface.webp"],
        ].map((item) => {
          return (
            <div className="flex flex-col gap-5">
              <div className=" flex items-center justify-center"><img src={item[1]} /></div>
              <div><a className=" font-semibold text-blue-700 underline ">{item[0]}</a></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemsList;
