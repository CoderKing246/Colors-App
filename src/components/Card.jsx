import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const Card = ({ color, title, colors }) => {
  return (
    <div className="bg-gray-800 flex flex-col items-center gap-3 w-56 h-56 border-2 border-gray-700 rounded-lg group p-4">

      {/* Color Box */}
      <div className="grid grid-cols-4 w-full border-2 border-white rounded overflow-hidden">
        {colors &&
          colors.map((c, i) => (
            <div
              key={i}
              className="h-8 w-full"
              style={{ backgroundColor: c }}
            />
          ))}
      </div>

      {/* Title */}
      <div className="flex items-center gap-1 cursor-pointer">
        {title && (
          <h2 className="text-xs group-hover:underline transition">
            {title}
          </h2>
        )}

        <IoIosArrowBack className="rotate-180 text-white opacity-0 group-hover:opacity-100 transition duration-200" />
      </div>

    </div>
  );
};

export default Card;