import React from 'react'
import HexContextProvider from '../context/hexContext'
import Header from './Header'
import SelectPalette from './SelectPalette'
import DisplayPalette from './DisplayPalette'

const Generate = () => {
  return (
    <div>
      <HexContextProvider>
      <Header/>
      <SelectPalette/>
      <DisplayPalette/>
    </HexContextProvider>
    </div>
  )
}

export default Generate
