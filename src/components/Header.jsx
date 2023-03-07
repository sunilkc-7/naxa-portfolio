import React from "react";

const Services = (props) => {
  const { nav, setNav } = props;
  const nav_items = [
    { name: "Key Highlights", url: "keyhighlights" },
    { name: "Web GIS and Data Visualization", url: "webgis&datavisualization" },
    { name: "Training & Capacity Building", url: "training&capacitybuilding" },
    { name: "Surveying and GIS Mapping", url: "surveying&gismapping" },
    { name: "Disaster Risk Resilience", url: "disasterriskresillence" },
    {
      name: "Software & Application Development",
      url: "software&applicationdevelopment",
    },
    {
      name: "Innovation in Land Reform and Management",
      url: "innovationinlandreform&management",
    },
    { name: "Open Data Initiatives", url: "opendatainitiatives" },
    { name: "E-Governance", url: "e-governance" },
    { name: "Frontier Technologies", url: "frontiertechnologies" },
  ];

  return (
    <div className="flex items-center my-[60px] shadow-3xl">
      <div className="flex bg-white w-full m-auto py-2 justify-between flex-wrap">
        {nav_items.map((items, idx) => {
          return (
            <ul
              className={`h-fit w-[17%] list-none border-1  m-auto
              border-solid border-transparent  text-[12px] 
              font-semibold text-[#989898] items-center
               transition-all bg-white hover:bg-[#ffdc1c]
                hover:text-[#0055ff] cursor-pointer flex flex-wrap active:text-[#0055ff]`}
              key={idx}
              style={
                items.name === nav
                  ? { background: "#ffdc1c", color: "#0055ff" }
                  : {}
              }
            >
              <a
                className="bg-transparent m-0 text-[.75rem]
    py-[0.325rem] px-[0.5rem] cursor-pointer"
                onClick={() => setNav(items.name)}
                href={`#${items.url}`}
              >
                {items.name}
              </a>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
