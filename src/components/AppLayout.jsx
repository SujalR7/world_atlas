import React from 'react'
import Footers from './Footers'
import Headers from './Headers'
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
  return (
    <>
    <Headers />
    <Outlet />
    <Footers />
    </>
  )
}

export default AppLayout