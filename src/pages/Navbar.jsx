import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const icons = [
    {
      path: "/",
      name: "home",
      icon: <i className="fa-solid fa-house fa-2xl"></i>,
    },
    {
      id: 1,
      path: "/map",
      name: "map",
      icon: <i className="fa-solid fa-location-dot fa-2xl"></i>,
    },
    {
      path: "/form",
      name: "form",
      icon: <i className="fa-solid fa-user fa-2xl"></i>,
    },
  ];
  return (
    <div className="flex my-5 w-[80%] fixed top-0 z-10">
      {icons.map((i, idx) => (
        <Link
          className="text-lg"
          to={i.path}
          style={idx === 1 ? { marginLeft: "auto", paddingRight: "20px" } : {}}
        >
          {i.icon}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
