import { useState } from "react"
import Count from "./component/Count"

const App = () => {
const[name,setname]=useState([])
const[input,setInput]=useState("")




const handleChange=(e)=>{
  e.preventDefault()
  setname(e.target.value )
}
const updateData=()=>{
  let copy=[...name,input]
  setInput(copy)

}
  return (
    <>
    <h1>{input}</h1>
    <input type="text" placeholder="Enter a Name" onChange={handleChange}  />
    <button onClick={updateData}>Add data</button>
    <Count/>
    </>
  )
}

export default App