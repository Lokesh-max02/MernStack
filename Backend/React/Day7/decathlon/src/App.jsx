import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Mens from './page/Mens'
import Women from './page/Women'
import Kids from './page/Kids'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Mens' element={<Mens/>}/>
      <Route path='/Women' element={<Women/>}/>
      <Route path='/Kids' element={<Kids/>}/>
    </Routes>
    </>
  )
}

export default App