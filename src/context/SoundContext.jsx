import { createContext, useContext, useState } from "react";

// Create Context
const SoundContext = createContext();

// Provider Component
export const SoundProvider = ({ children }) => {
  const [sound, setSound] = useState(true);

  return (
    <SoundContext.Provider value={{ sound, setSound }}>
      {children}
    </SoundContext.Provider>
  );
};

// Custom Hook
export const useSound = () => {
  return useContext(SoundContext);
};

export default SoundContext;