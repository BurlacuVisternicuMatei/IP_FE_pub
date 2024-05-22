import React from "react";

const ImageNotif = (props) => {
  return (
    <div className=" rounded-md flex grid-rows-3 p-3 mb-2 ">
      <div className=" h-auto mr-2 row-span-2">
      </div>
      <div className="flex flex-col">
        <div>
          <h3 className="text-[#2C2C4B] text-[0.8rem]">
            <span className="text-[#2C2C4B] font-[800] link-hover">{props.name} </span>
            {props.action}
            <span className="text-gray-700 font-[800] link-hover">
              {" "}
              {props.post}
            </span>
          </h3>
        </div>
        <div className="text-[0.8rem] text-[#222233] ">
          <p>{props.time} ago</p>
        </div>
      </div>
      <div className=" min-w-[45px] md:absolute right-2 cursor-pointer ">
      </div>
    </div>
  );
};

export default ImageNotif;
