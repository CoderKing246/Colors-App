import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkStyle =
    "px-3 py-1 rounded-md transition hover:bg-gray-700";

  const activeStyle = "text-purple-400 font-semibold";

  return (
    <div>
    <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-gray-700">

      {/* Logo */}
      <h2 className="text-xl font-bold text-black-900">
        🎨 ColorExplore
      </h2>

      {/* Links */}
      <div className="flex gap-4 mt-2 md:mt-0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "text-gray-300"}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/generate"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "text-gray-300"}`
          }
        >
          Generate
        </NavLink>
        <NavLink
          to="/saves"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "text-gray-300"}`
          }
        >
          Saves Palettes
        </NavLink>      
      </div>
    </div>
    </div>
  );
};

export default NavBar;