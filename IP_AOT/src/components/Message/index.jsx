import React from "react";

const Message = (props) => {
  return (
    <div className=" rounded-md flex grid-rows-2 p-3 mb-2">
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
        <div className="p-2 rounded-[3px] border-[1px] border-[#222233] msg-hover mt-2">
          <p className="text-gray text-[0.8rem]">
            Buna! Merita sa intri in ASII?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
