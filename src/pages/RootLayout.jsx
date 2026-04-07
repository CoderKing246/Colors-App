import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import ExploreBar from '../components/ExploreBar'

const RootLayout = () => {
  const {pathname} = useLocation()
  if (pathname=="/explore") {
    return (
      <div>
        <ExploreBar/>
        <Outlet/>
      </div>
    )      
  }
  return (
    <div>
      
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout
