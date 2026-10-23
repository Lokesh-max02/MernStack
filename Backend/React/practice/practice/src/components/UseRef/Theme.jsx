import { useState } from "react"


const Theme = () => {
    const [theme,setTheme]=useState(false)
    const handleChange=()=>{
        let color=theme?"<h1 className="bg-amber-600">:""
        setTheme()
    }
  return (
   <>
   <div>
    <h1 className="bg-amber-600">theme</h1>
    <button onClick={handleChange}>change</button>
   </div>
   </>
  )
}

export default Theme