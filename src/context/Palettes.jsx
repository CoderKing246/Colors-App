import { useContext } from "react";
import { createContext, useState } from "react";

const PalettesContext = createContext();

// Provider
export const PalettesProvider = ({children}) => {
    const [selectedPalette, setSelectedPalette] = useState("default");
    
    return (
        <PalettesContext.Provider value={{selectedPalette, setSelectedPalette}}>
            {children}
        </PalettesContext.Provider>
    )
}
export const usePalettes = () => {
    return useContext(PalettesContext);
}
export default PalettesContext