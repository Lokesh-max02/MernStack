import React from 'react'
import Register from './component/Register'
import Login from './component/Login'
import Task from './component/Task'
import Home from './component/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
   {/* <Login/> */}
   
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>

    </>
  )
}

export default App