import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useSound } from "../context/SoundContext";
import { useFormat } from "../context/CopyFormatContext";
import FormatDropdown from "./FormatDropDown";

const ExploreBar = () => {
  const { sound, setSound } = useSound()
  const {selectedFormat} = useFormat()

  const handleSound = () => {
    setSound(!sound);
  };

  return (
    <div className="mt-4">
      <div className="border-2 border-gray-400 rounded-2xl flex items-center justify-between px-4 h-14">

        {/* Back Button */}
        <NavLink
          to="/"
          className="flex items-center gap-1 border-2 border-gray-500 rounded-lg px-3 py-1 text-sm font-medium hover:bg-gray-700 transition"
        >
          <IoIosArrowBack /> Back
        </NavLink>

        <FormatDropdown/>

        {/* Sound Toggle */}
        <button
          onClick={handleSound}
          className="border-2 border-gray-500 rounded-lg px-3 py-1 text-sm font-medium hover:bg-gray-700 transition"
        >
          Sound {sound ? "On 🔊" : "Off 🔇"}
        </button>
      </div>
    </div>
  );
};

export default ExploreBar;