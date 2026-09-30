import React from 'react'
import Navbar from './pages/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Login from './pages/Login'
import Page from './components/page'

const App = () => {
  return (
    <>
    
    <Routes>

<Route element={<Page/>}>

<Route  path='/' element={<Home/>}/>
<Route  path='/About' element={<About/>}/>
<Route  path='/Service' element={<Service/>}/>

</Route>


<Route  path='/Login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App