import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
// import { HashRouter, Routes, Route } from "react-router-dom";
import ColorGrid from "./components/ColorGrid.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Generate from "./components/Generate.jsx";
import SavesPalette from "./pages/SavesPalette.jsx";
import { PalettesProvider } from "./context/Palettes.jsx";
import { SoundProvider } from "./context/SoundContext.jsx";
import { CopyFormatProvider } from "./context/CopyFormatContext.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter basename="/Colors-App">
    <CopyFormatProvider>
      <SoundProvider>
        <PalettesProvider>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<App />} />
              <Route path="/explore" element={<ColorGrid />} />
              <Route path="/generate" element={<Generate />} />
              <Route path="/saves" element={<SavesPalette />} />
            </Route>
          </Routes>
        </PalettesProvider>
      </SoundProvider>
    </CopyFormatProvider>
  </HashRouter>,
);
