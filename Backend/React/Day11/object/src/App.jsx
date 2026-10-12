import { useState } from "react"
import Tasks from "./components/Tasks"

const App = () => {
  const[obj,setObj]=useState([{name:"Gokul",course:"FS python"},
    {name:"Gokul",course:"FS python"},{name:"Gokul",course:"FS python"}
  ])


  const change=()=>{
    let copy=obj.map((e,i)=>i===2?{...e,name:"Ben10"}:e)
    setObj(copy)
  }
  return (
   <>
   <Tasks/>
   <div>
    <div>{obj.map((e,i)=>(
      <div>
        <h1>{e.name}</h1>
        <h1>{e.course}</h1>
      </div>
    ))}</div>
    <button onClick={change}>change Name</button>
   </div>
   
   
   
   </>
  )
}

export default App