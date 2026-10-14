import { useState } from "react"
import Task from "./component/task"

const App = () => {
  //task-1
  const[user,setUser]=useState("")
  const[getStu,setGetStu]=useState([""])
//task-2
const[course,setCourse]=useState("")
const[getCourse,setGetCourse]=useState([])
//task-3
const[num,setNum]=useState("")
const[getNum,setGetNum]=useState([])
//task-4
const[fruit,setFruit]=useState("")
const[getFruit,setGetFruit]=useState([])
 const [editId, setEditId] = useState(null)



//task-1
  const addStudent=()=>{
  setGetStu((e)=>[...e,user])
  setUser("")
  }
 //task-2
 const addCourse=()=>{
  setGetCourse((p)=>[...p,course])
  setCourse("")
 }
 const deleteCourse=(i)=>{
  let deletes=getCourse.filter((e,index)=>index!==i)
  setGetCourse(deletes)
 }
 //task-3
 const addNumber=()=>{
  setGetNum((p)=>[...p,num])
  setNum("")
 }
const checkNum=()=>{
  let copy=getNum.map((e,i)=>e%2===0?"Even":"ODD")
  setGetNum(copy)
}
//task-4
const addFruit=()=>{
  if(editId!==null){
  const updatedFruits = getFruit.map((e,i) =>e.id === editId ? fruit:e)
setFruit(updatedFruits);
setEditId(null)
  }else{
    setGetFruit((e)=>[...e,fruit])
  }
  setFruit("")
}
const editFruit=(e,i)=>{
 setFruit(e)
 setEditId(i)
}
  return (
   <>
   <Task/>
   <div>
   <div>
   <h1>Task-1</h1>
   <input type="text" onChange={(e)=>setUser(e.target.value)} value={user} />
   <h1>{getStu.map((e,i)=>(
    <div key={i+1}>
      <p>{e}</p>
     
    </div>
   ))}</h1>
   <button onClick={addStudent}>add Student</button>
  
  <h1>task-2</h1>
   {getCourse.map((ei,i)=>(
    <div key={i+1}>
      <p>{ei}</p>
       <button onClick={()=>deleteCourse(i)}>delete</button>
    </div>
   ))}
   <input type="text" onChange={(e)=>setCourse(e.target.value)} value={course} />
   <button onClick={addCourse}>add course</button>
   </div>
   <div>
    <h1>Task-3</h1>
    <h1>{getNum.map((e,i)=>(
      <div>
        <p>{e}</p>
        <button onClick={checkNum}>check</button>
      </div>
    ))}</h1>
    <input type="text" placeholder="Enter a Number" onChange={(e)=>setNum(e.target.value)} value={num}/>
    <button onClick={addNumber}>Add Number</button>
   </div>
   <div>
    <h1>Task-4</h1>
    {getFruit.map((e,i)=>(
      <div>
        <p>{e}</p>
        <button onClick={()=>editFruit(e,i)}>Edit</button>
      </div>
    ))}
    <input type="text" placeholder="Enter a Fruit" onChange={(e)=>setFruit(e.target.value)} value={fruit} />
    <button onClick={addFruit}>{editId !== null ? "Save" : "Add Fruits"}</button>
   </div>
   </div>
   </>
  )
}

export default App