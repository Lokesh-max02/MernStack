import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <div>
        <div>
            logo
        </div>
        <div>
            <Link to={"/home"}>Home</Link>
            <Link to={"/"}>Regsiter</Link>
            <Link to={"/login"}>Login</Link>

        </div>
    </div>
    
    </>
  )
}
