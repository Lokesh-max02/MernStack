import { useState } from "react"

const App = () => {
  const[name,setName]=useState("Arun")
  const[count,setCount]=useState(0)
  const[show,setShow]=useState(false)
  const[names,setNames]=useState("")
  const [like,setLike]=useState(0)
const change=()=>{
  setName("kumar")
  
}
const increament=()=>{
 
  setCount(count+1)
}
const decreament=()=>{
  setCount(count-1)
}
const Reset=()=>{
  setCount(0)
}
const hide=()=>{
  
  setShow(!show)
}
const nameChange=()=>{
  setNames()
}
const countLike=()=>{
  setLike(like+1)
}
  return (
   <>
   <h1>Task 1</h1>
   <h1>{name}</h1>
   <button onClick={change}>click</button>
   <h1>Task 2</h1>
   <h1>{count}</h1>
   <button onClick={increament}>Add</button>
   <button onClick={decreament}>Sub</button>
   <button onClick={Reset}>Reset</button>
   <h1>Task 3</h1>
   <h1>{show&&"welcome to React"}</h1>
   <button onClick={hide}>click</button>
   <h1>Task 4</h1>
   <label >Enter a Name:</label>
   <input type="text"  onChange={nameChange}/>
   <h1>{names}</h1>
   <button onClick={}>click</button>
   
   <h1>Task 5</h1>
   <h1>{like}</h1>
   <button onClick={countLike}>Like</button>
   </>
  )
}

export default App