import React, { useContext, useState, useEffect } from "react";
import HexValueContext from "../context/HexValue.js";
import chroma from "chroma-js";
import { toast, ToastContainer } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";

const DisplayPalette = () => {
  const { hexValue } = useContext(HexValueContext);

  const [error, setError] = useState("");
  const [colors, setColors] = useState([]);
  const [analogous, setAnalogous] = useState([]);
  const [triadic, setTriadic] = useState([]);
  const [monochrome, setMonochrome] = useState([]);

  const isValidHex = (color) => {
    return /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(color);
  };

  // 🎯 Messages
  const messages = [
    "🎨 Color copy ho gaya boss! 😎",
    "📋 Clipboard me chipka diya 🔥",
    "🚀 Ye rang ab tumhara hai!",
    "😏 Copy ho gaya... design dikhao!",
    "💡 Smart move! Saved",
    "🎯 Seedha clipboard pe land!",
    "🪄 Magic! Copy done",
    "🔥 Designer mode ON!",
  ];

  // 🎨 Custom Toast UI
  const showCustomToast = (color, msg) => {
    toast(
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-md border"
          style={{ backgroundColor: color }}
        />
        <div>
          <p className="font-semibold">🎨 {color}</p>
          <p className="text-sm opacity-80">{msg}</p>
        </div>
      </div>,
      {
        position: "bottom-center",
        autoClose: 1500,
        className:
          "!bg-gray-900 !text-white !border !border-purple-500 rounded-xl",
      },
    );
  };

  // 📋 Copy Handler
  const copyToClip = (color) => {
    const msg =
      Math.random() < 0.05
        ? "👑 LEGENDARY COPY!"
        : messages[Math.floor(Math.random() * messages.length)];

    showCustomToast(color, msg);
  };

  // 🔄 HEX → RGB
  const hexToRgb = (hex) => {
    const c = chroma(hex).rgb();
    return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
  };

  const handleCss= (e) =>{
    e.preventDefault()
    console.log(hexValue)
    navigator.clipboard.writeText(`background-color:${hexValue}`)
    showCustomToast(hexValue,"CSS copied")
  }

  const handleTailwind = (e) =>{
    navigator.clipboard.writeText(`bg-${hexValue}-900`)
    showCustomToast(hexValue,"CSS copied")

  }

  // 🎨 Generate Palettes
  useEffect(() => {
    try {
      setError("");

      if (!isValidHex(hexValue)) {
        throw new Error("Invalid hex color (use #fff or #ffffff)");
      }

      const base = chroma(hexValue);
      const comp = base.set("hsl.h", "+180");

      // Complementary
      setColors([
        base.hex(),
        base.brighten(1).hex(),
        comp.hex(),
        comp.brighten(1).hex(),
        comp.darken(1).hex(),
      ]);

      // Analogous
      setAnalogous([
        base.set("hsl.h", "-30").hex(),
        base.set("hsl.h", "-15").hex(),
        base.hex(),
        base.set("hsl.h", "+15").hex(),
        base.set("hsl.h", "+30").hex(),
      ]);

      // Triadic
      setTriadic([
        base.hex(),
        base.set("hsl.h", "+120").hex(),
        base.set("hsl.h", "+240").hex(),
      ]);

      // Monochrome
      setMonochrome([
        base.brighten(2).hex(),
        base.brighten(1).hex(),
        base.hex(),
        base.darken(1).hex(),
        base.darken(2).hex(),
      ]);
    } catch (e) {
      setError(e.message);
      setColors(Array(5).fill("#ccc"));
      setAnalogous([]);
      setTriadic([]);
      setMonochrome([]);
    }
  }, [hexValue]);

  // 🎯 Reusable Grid Component
 const PaletteGrid = ({ title, colors }) => (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3 border-2 border-white-500 rounded-2xl px-4 py-2 inline-block">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-3">
        {colors.map((color, index) => (
          <CopyToClipboard
            key={index}
            text={color}
            onCopy={() => copyToClip(color)}
          >
            <div>
              <div className="relative group cursor-pointer">
                <div
                  className="w-24 h-24 rounded-lg flex items-center justify-center font-semibold shadow-md hover:scale-105 transition-transform"
                  style={{
                    backgroundColor: color,
                    color: chroma(color).luminance() > 0.5 ? "#000" : "#fff",
                  }}
                >
                  {/* RGB */}
                  <span className="absolute top-2 text-xs">
                    {hexToRgb(color)}
                  </span>

                  {/* HEX */}
                  <span>{color}</span>

                  {/* Hover Hint */}
                  <span
                    className="absolute bottom-[-20px] text-xs px-2 py-1 rounded backdrop-blur-2xl text-white opacity-0 group-hover:opacity-100 transition mb-2 w-20 text-center rounded-2xl
                border-2 border-gray-500 "
                  >
                    Click to copy hex
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-blue-400 border-2 border-cyan-300 rounded-1xl w-9 mt-3" onClick={handleCss}> CSS</button>

                <button className="text-blue-400 border-2 border-cyan-300 rounded-1xl px-0.5 mt-3" onClick={handleTailwind}> Tailwind</button>
                
              </div>
            </div>
          </CopyToClipboard>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mt-4 text-center">
      {error && <p className="text-red-500 mb-3">{error}</p>}

      {/* All Palettes */}
      <PaletteGrid title="Complementary" colors={colors} />
      <PaletteGrid title="Analogous" colors={analogous} />
      <PaletteGrid title="Triadic" colors={triadic} />
      <PaletteGrid title="Monochrome" colors={monochrome} />

      <ToastContainer />

      <div className="w-1 h-8" />
    </div>
  );
};

export default DisplayPalette;
