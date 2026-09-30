import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
<div className='bg-amber-200 p-3 text-black flex justify-between items-center gap-5'>

    <div className='bg-white p-2 rounded-xl'>
        logo
    </div>
    <div className='flex gap-6 '>
<Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Service">Service</Link>
    <Link to="/Login">Login</Link>
    
    </div>
</div>


    
    
    
    
    </>
  )
}

export default Navbar