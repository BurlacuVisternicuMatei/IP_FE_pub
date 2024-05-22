import React from "react";

const Notif = (props) => {
  return (
    <div className=" rounded-md flex grid-rows-2 p-3 mb-2 ">
      <div className="notification-pagemin-w-[35px] h-auto mr-2 row-span-2">
      </div>
      <div className="flex flex-col max-w-[400px]">
        <div>
          <h3 className="text-[#2C2C4B] text-[0.75rem]">
            <span className="notification-pagetext-[#212130] font-[800] link-hover">{props.name} </span>
            {props.action}
            <span className="text-gray-700 font-[800] link-hover">
              {" "}
              {props.post}{" "}
              <span className="text-red-500 text-[13px]">{props.circle}</span>
            </span>
          </h3>
        </div>
        <div className="text-[0.8rem] text-[#222233] ">
          <p>{props.time} ago</p>
        </div>
      </div>
    </div>
  );
};

export default Notif;
