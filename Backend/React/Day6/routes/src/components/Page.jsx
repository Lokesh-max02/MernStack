import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Navbar from '../pages/Navbar'
import { Outlet } from 'react-router-dom'

const Page = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    
    </>
  )
}

export default Page