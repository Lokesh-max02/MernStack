import { useState } from "react"
import Task from "./component/Task"


const App = () => {
  const[color,setColor]=useState(false)
  const[arr,setArr]=useState([1,2,3,4,5,6])

  const changeColor=()=>{
    setColor(!color)
  }
  const arrUpdated=()=>{

    let updated=[...arr,345]
    setArr(updated)
  }
  return (
   <>
   
   <div className={color?"bg-amber-800 w-385 h-100":"bg-amber-950 w-385 h-100"}>
    <div>
      <button className="flex justify-center items-center gap-2" onClick={changeColor}>change color</button>
    </div>
   </div>
   <Task/>
   </>
  )
}

export default App