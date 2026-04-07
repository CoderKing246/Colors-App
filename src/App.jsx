import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header";
import SelectPalette from "./components/SelectPalette";
import HexContextProvider from "./context/hexContext";
import DisplayPalette from "./components/DisplayPalette";
import ColorGrid from "./components/ColorGrid";
import Home from "./components/Home";

function App() {
  

  return (
    <>

    <Home/>
    {/* <ColorGrid colors={colors}/> */}
    {/* // Palette Generator */}
    {/* <HexContextProvider>
      <Header/>
      <SelectPalette/>
      <DisplayPalette/>
    </HexContextProvider> */}
  
    </>

  );
}

export default App;
