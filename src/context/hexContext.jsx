import React, { useState } from "react";
import  HexValueContext  from "./HexValue";

const HexContextProvider = ({children}) => {
    const [hexValue,setHexValue] = useState("#fff")
    return(
        <HexValueContext.Provider value={{hexValue,setHexValue}}>
            {children}
        </HexValueContext.Provider>
    )
}

export default HexContextProvider