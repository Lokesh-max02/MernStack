import React from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'

const AppRouter = () => {
  return (
   <>
   <Routes>
        <Route  element={<Layout/>}>
        
         <Route path="/home" element={<Home/>} />

        </Route>

        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
   
   </>
  )
}

export default AppRouter