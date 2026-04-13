import React from "react";
import { useFormat } from "../context/CopyFormatContext";

const FormatDropdown = () => {
  const { selectedFormat, setSelectedFormat } = useFormat();

  return (
    <select
      value={selectedFormat}
      onChange={(e) => setSelectedFormat(e.target.value)}
      className="border-2 border-gray-500 rounded-lg px-3 py-1 text-sm 
                 bg-transparent text-white cursor-pointer
                 focus:outline-none focus:ring-2 focus:ring-blue-400
                 hover:bg-gray-700 transition"
    >
      <option value="hex" className="text-black">Copy to HEX</option>
      <option value="rgb" className="text-black">Copy to RGB</option>
      <option value="hsl" className="text-black">Copy to HSL</option>
    </select>
  );
};

export default FormatDropdown;