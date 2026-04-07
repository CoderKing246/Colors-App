import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const ExploreBar = () => {
  return (
    <div>
      <div className="border-2 border-gray-400 rounded-2xl flex items-center justify-around h-12 mt-4">
        <NavLink to='/' className="flex items-center justify-center border-2 border-gray-500 rounded-lg px-3 py-1 gap-1 text-sm font-medium hover:bg-gray-700 transition ">
          <IoIosArrowBack /> <span className="">Back</span>
        </NavLink>
        <h1 className="text-4xl font-bold text-center mt-6 mb-2">Color Grid</h1>
        
      </div>
    </div>
  );
};

export default ExploreBar;
