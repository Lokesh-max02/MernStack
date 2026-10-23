import React, { useState } from 'react'

const Refer = () => {

    const [name,setName]=useState("")
    const [showss,setShows]=useState("")
const handleChange=()=>{
    let local =localStorage.setItem("ganesh",name)
    setName("")
}
const showDetails=()=>{
    let show =localStorage.getItem("ganesh")
setShows(show)

   
}
  return (
    <>
    <h1>{showss}</h1>
    <input type="text" placeholder='Enter the Name' onChange={(e)=>setName(e.target.value)} value={name} />
    <button onClick={handleChange}>Click</button>
    <button onClick={showDetails}>ShowData</button>
    </>
  )
}

export default Refer