import React, { useContext } from "react";
import chroma from "chroma-js";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { usePalettes } from "../context/Palettes";

const Home = () => {
  const navigate = useNavigate();
  const { setSelectedPalette } = usePalettes();

  // 🌈 Default
  const defaultColors = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#ecf0f1",
    "#95a5a6",
    "#f39c12",
    "#d35400",
    "#c0392b",
    "#bdc3c7",
    "#7f8c8d",
  ];

  // 🌍 Generated palettes
  const palettes = [
    {
      name: "Suggested",
      colors: defaultColors,
    },
    {
      name: "🇺🇸 American",
      colors: chroma
        .scale(["#b22234", "#ffffff", "#3c3b6e"])
        .mode("lab")
        .colors(20),
    },
    {
      name: "🇬🇧 British",
      colors: chroma
        .scale(["#00247d", "#ffffff", "#cf142b"])
        .mode("lab")
        .colors(20),
    },
    {
      name: "🇫🇷 French",
      colors: chroma
        .scale(["#0055a4", "#ffffff", "#ef4135"])
        .mode("lab")
        .colors(20),
    },
    {
      name: "🇮🇳 Indian",
      colors: chroma
        .scale(["#FF9933", "#FFFFFF", "#138808"])
        .mode("lab")
        .colors(20),
    },
    {
      name: "🇨🇳 Chinese",
      colors: chroma.scale(["#DE2910", "#FFDE00"]).mode("lab").colors(20),
    },
  ];

  // 🎯 click handler (context + navigation)
  const handleClick = (palette) => {
    setSelectedPalette(palette);
    navigate("/explore");
  };

  return (
      <div className="space-y-12">
        {/* 🔥 Hero */}
        <div className="text-center space-y-4 mt-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            🎨 Color Palette Generator
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto">
            Explore beautiful color palettes from around the world 🌍
          </p>
        </div>

        {/* 🎯 Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {palettes.map((palette, index) => (
              <div
                key={index}
                onClick={() => handleClick(palette)}
                className="cursor-pointer hover:scale-105 transition"
              >
                <Card
                  color={palette.colors[0]} // preview color
                  title={palette.name}
                  colors={palette.colors}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="h-10" />
      </div>
  );
};

export default Home;
