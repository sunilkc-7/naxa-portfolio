import React from "react";

export const CardTwo = (props) => {
  const { img, title, des, clients, startDate, endDate, key } = props;
  return (
    <div className="flex w-full cursor-pointer" key={key}>
      <img src={img} alt={title} className="h-[200px] w-[303px] object-cover" />
      <div
        className="w-[66.666667%]
      px-[1rem] pt-[1.5rem] bg-[#efefef] hover:bg-white"
      >
        <h1 className="text-[1.05rem]  mb-[10px] text-[#333] font-semibold">
          {title}
        </h1>
        <p className="m-0 text-[11px] text-[#333]">{des}</p>
        <div className="mt-[1rem] flex w-full justify-between items-center">
          <div
            className="flex flex-col 
           w-2/3 font-semibold 
        "
          >
            <h5
              className="
    text-[10px] text-[#ffab00]"
            >
              Client
            </h5>
            <h6 className="text-[#333] text-[10px]">{clients}</h6>
          </div>
          <div
            className="flex flex-col
            w-1/3 font-semibold ml-auto
         "
          >
            <h5
              className="
    text-[10px] text-[#ffab00]"
            >
              Project Period
            </h5>
            <h6 className="text-[#333] text-[10px]">
              {startDate || ""}
              {endDate && ` - `}
              {endDate || ""}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
