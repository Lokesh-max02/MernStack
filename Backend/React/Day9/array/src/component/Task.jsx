import { useState } from "react"


const Task = () => {
    const[arr,setArr]=useState(["Html","CSS","Javascript"])
    const[obj,setObj]=useState({name:"Lokesh",age:22,course:"React"})
    const addReact=()=>{
        let original=[...arr,"React"]
        setArr(original)
    }
    const updateReact=()=>{
      let copy=[...arr]
      copy[2]="Advanged Javascript"
        setArr(copy)   
    }
    const updatedCourse=()=>{
        setObj({...obj,course:"MERN"}) 
    }
    const addData=()=>{
        setObj({...obj,city:"chennai"})
    }
  return (
   <>
   <div>
    <h1>Task-1</h1>
    <div>{arr.map((e,i)=>(
        <h1 key={i+1}>{e}</h1>
    ))}</div>
    <button className="bg-black  p-2 text-white" onClick={addReact}>Add React</button>
    <button className="bg-black p-2 text-white flex" onClick={updateReact}>updated Javascript React</button>

    <h1>Task-2</h1>
     <div>
       <h1>Details</h1>
            <h1 >{obj.name}</h1>
            <p>{obj.age}</p>
            <p>{obj.course}</p>
             <p>{obj.city}</p>
       <button className="bg-black  p-2 text-white" onClick={updatedCourse}>update course</button>
       <button className="bg-black  p-2 text-white" onClick={addData}>Add Data</button>
     </div>
   </div>
   
   
   </>
  )
}

export default Task
