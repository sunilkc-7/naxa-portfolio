import React from "react";

export const Card = (props) => {
  const { img, title, des, clients, startDate, endDate, key } = props;
  return (
    <div
      className={`flex flex-col  w-[48.5%] w-max-[480px] py-[60px] transition-all relative top-0 hover:-top-[15px]`}
      key={key}
    >
      <div className="bg-[#184add] pl-8 pt-6 pr-8 py-4">
        <h1 className="mb-[20px] text-[#fff] font-semibold text-2xl capitalize">
          {title}
        </h1>
        <p className="m-0 text-white bg-transparent">{des}</p>
        <div className="flex justify-between w-full my-5 mx-[0.1rem]">
          <div
            className="flex flex-col font-semibold
"
          >
            <span className=" color-[#ffdc] text-[10px] capitalize mb-[2px] text-[#ffdc1c]">
              Client
            </span>
            <span className="text-[10px] text-white">{clients}</span>
          </div>
          <div className="flex flex-col font-semibold">
            <span className=" color-[#ffdc] text-[10px] capitalize mb-[2px] text-[#ffdc1c]">
              Time Duration
            </span>
            <span className="text-[10px] text-white">
              {startDate || ""}
              {endDate && ` - `}
              {endDate || ""}
            </span>
          </div>
        </div>
      </div>
      <img
        src={img}
        className="object-cover w-full h-full object-left"
        alt={title}
      />
    </div>
  );
};
