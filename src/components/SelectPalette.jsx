import React, { useContext } from "react";
import HexValueContext from "../context/HexValue";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SelectPalette = () => {
  const { hexValue, setHexValue } = useContext(HexValueContext);

  const handleChange = (e) => {
    setHexValue(e.target.value);
    
  };

  const copyToClip = () => {
    toast.success("Hex value copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
      animate: "bounce",
    });
  };

  return (
    <div className="m-5 border-2 border-gray-600 p-4 rounded-xl text-center">
      <h2 className="text-xl font-semibold mb-3 text-white">
        Select a Base Color
      </h2>

      <input
        type="color"
        className="h-12 w-16 cursor-pointer"
        value={hexValue}
        onChange={handleChange}
      />

      <div className="flex gap-2 items-center justify-center mt-4">
        <p className="text-white text-lg">Hex:</p>

        <input
          type="text"
          value={hexValue}
          onChange={handleChange}
          className="w-24 px-2 py-1 rounded-lg border border-gray-600"
        />

        <CopyToClipboard text={hexValue} onCopy={copyToClip}>
          <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 text-white">
            <FaCopy />
          </button>
        </CopyToClipboard>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SelectPalette;
