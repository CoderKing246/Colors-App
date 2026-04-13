import { createContext, useContext, useState } from "react";

const CopyFormatContext = createContext();

export const CopyFormatProvider = ({ children }) => {
  const [selectedFormat, setSelectedFormat] = useState("hex");

  return (
    <CopyFormatContext.Provider value={{ selectedFormat, setSelectedFormat }}>
      {children}
    </CopyFormatContext.Provider>
  );
};

export const useFormat = () => {
  return useContext(CopyFormatContext);
};

export default CopyFormatContext;