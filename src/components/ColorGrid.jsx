import React, { use, useEffect, useState } from "react";
import chroma from "chroma-js";
import { IoIosArrowBack } from "react-icons/io";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { usePalettes } from "../context/Palettes";

const ColorGrid = () => {
  const [copiedColor, setCopiedColor] = useState(null);
  const [msg, setMsg] = useState("");
  const [visible, setVisible] = useState(false);

  const {selectedPalette} = usePalettes();
  const colors = selectedPalette ? selectedPalette.colors : [];

  const messages = [
    "Copied to clipboard!",
    "Color copied!",
    "Hex value saved!",
    "Color code copied!",
    "Clipboard updated!",
  ];

  const copyToClip = (color) => {
    const mssg =
      Math.random() < 0.05
        ? "👑 LEGENDARY COPY!"
        : messages[Math.floor(Math.random() * messages.length)];

    setCopiedColor(color);
    setMsg(mssg);

    // fade out timing
    setTimeout(() => setVisible(false), 900);
    setTimeout(() => setCopiedColor(null), 1600);
  };

  // 🔥 Perfect fade-in trigger
  useEffect(() => {
    if (copiedColor) {
      setVisible(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true);
        });
      });
    }
  }, [copiedColor]);



  return (
    <div>
        
      {/* GRID */}
      <div className="grid grid-cols-5 gap-2 px-4 py-4">
        {colors.map((color, index) => (
          <CopyToClipboard
            key={index}
            text={color}
            onCopy={() => copyToClip(color)}
          >
            <div
              style={{
                backgroundColor: color,
                color: chroma(color).luminance() > 0.5 ? "#000" : "#fff",
                height: "110px",
              }}
              className="relative cursor-pointer flex items-center justify-center font-bold rounded-lg transition-all duration-300 hover:scale-105 group"
            >
              <span>{color}</span>

              {/* Hover hint */}
              <span
                className="absolute -bottom-5 text-xs px-2 py-1 m-4 backdrop-blur-2xl text-white opacity-0 group-hover:opacity-100 transition w-20 text-center rounded-2xl
                border-2 border-gray-500 "
              >
                Click to copy hex
              </span>
            </div>
          </CopyToClipboard>
        ))}
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full bg-blue-600 h-12 flex items-center justify-center text-white font-medium">
        Click a color to copy
      </div>

      {/* OVERLAY */}
      {(copiedColor || visible) && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 
          transition-all duration-700 ease-in-out will-change-transform
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
          style={{
            backgroundColor: copiedColor,
            color: chroma(copiedColor).luminance() > 0.5 ? "#000" : "#fff",
          }}
        >
          {/* Blur */}
          <div className="absolute inset-0 backdrop-blur-md bg-black/20"></div>

          {/* Center Content */}
          <div className="relative text-center z-10">
            <h1 className="text-5xl font-bold tracking-widest">{msg}</h1>
            <p className="text-xl mt-3 font-semibold">{copiedColor}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorGrid;
