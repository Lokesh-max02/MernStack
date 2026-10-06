import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import banner from "../assets/banner.avif"

const Navbar = () => {
  return (
   <>
   <div className="bg-amber-50 p-4 flex justify-between items-center m-5">
    <div>
    <img className="w-40 h-20 "  src={logo} alt="" />
    </div>
    <div>
        <input className="bg-white p-2 w-70 shodow-2xl rounded-2xl" type="text" placeholder="search here"/>
    </div>
    </div>
    <div className="p-6 flex justify-between items-center">
    <div className="flex gap-5 ">
<NavLink to={"/"}>Home</NavLink>
<NavLink to={"/Mens"}>Mens</NavLink>
<NavLink to={"/Women"}>Womens</NavLink>
<NavLink to={"/Kids"}>Kids</NavLink>
    </div>
    <div>
        Delivery to
Bangalore Central, Bangalore, 560001, Karnataka
    </div>
   </div>
   <img src={banner} alt="" />
   <div>

   </div>
   
   </>
  )
}

export default Navbar