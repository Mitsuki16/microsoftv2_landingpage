import React from "react";

function Announcement(props) {
  return (
    <div className=" mt-20 relative">
      <div className=" absolute left-[15%] w-[30%] top-[30%] flex gap-10 flex-col">
        <h1 className=" text-4xl font-semibold">
          Announcing the next wave of <br />
          AI innovation
        </h1>
        <p className=" text-lg ">
          The new Microsoft Bing and Edge will soon feature more visual search
          responses, chat history, and persistent chat within Edge. We’re also
          adding actions to help people complete tasks.
        </p>
        <button className=" w-[40%] text-xl text-white bg-blue-700 p-2">
          Learn more about it
        </button>
      </div>
      <div className=" flex justify-center items-center">
        <img className=" w-[80%]" src="images/Announcement.avif" />
      </div>
    </div>
  );
}

export default Announcement;
