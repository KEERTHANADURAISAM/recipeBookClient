import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'


const Portal = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Portal