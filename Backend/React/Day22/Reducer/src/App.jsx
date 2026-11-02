import { lazy, Suspense, useEffect, useReducer, useState } from "react"
import Home from "./components/Home";
import About from "./components/About";
const Abouts=lazy(()=>import("./components/About"))
const handleCount=(state,action)=>{
   switch (action.type) {
    case "INCREAMENT":
      return state + 1;

    case "DECREAMENT":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
}
const handleCustom=(state,action)=>{
   switch (action.type) {
    case "INCREAMENT":
      return state + action.payload;

    case "DECREAMENT":
      return state + action.payload;
       case "Minus":
      return state - action.payload;

    case "RESET":
      return 0;

    default:
      return state;
  }
}
const handleShow=(s,a)=>{
  switch(a.type){
    case "show":
      return true
      case "hide":
        return false
  }
}
const initialState={name:"",email:"",course:""}
const handleDetail=(state,action)=>{
switch(action.type){
  case "UPDATE":
    return {...state,[action.payload.name]:action.payload.value}
    case "RESET":
      return initialState
      default:
        return state
}
}
let initialProduct={loading:false,products:[],error:""}
const handleUsers=(st,ac)=>{
  switch(ac.type){
    case "Fetch_start":
      return {...st,loading:true,error:""}
       case "Fetch_success":
      return {...st,loading:false,products:ac.payload}
       case "Fetch_Error":
      return {...st,loading:false,error:ac.payload}
      default:
      return st
  }
}
const App = () => {
   const[show,setShow]=useState(false)
  const [count,setCount]=useReducer(handleCount,0)
  const[types,setType]=useReducer(handleCustom,0)
  const [name,setName]=useState("")
  const[pass,setPass]=useReducer(handleShow,false)
  const[detail,setDetail]=useReducer(handleDetail,initialState)
  const [users,setUser]=useReducer(handleUsers,initialProduct)
 const datas=async()=>{
  setUser({type:"Fetch_start"})
  try{
  const inputs=await fetch("https://dummyjson.com/products")
  if(!inputs){
    throw new Error("Failed to load")
  }
  const getDatas=await inputs.json()
  setUser({type:"Fetch_success",payload:getDatas.products})
}catch(error){
   setUser({type: "FETCH_error",payload: error.message });
}
 }
  useEffect(()=>{
    datas()
  },[])
  return (
   <>
   <h1>Task-5</h1>
   <Home/>
  <button onClick={()=>setShow(!show)}>Show About</button>
  {show&&(<Suspense fallback={<h1>Loading...</h1>}>
  <Abouts/>
  </Suspense>)}
   <h1>Task-1</h1>
   <h1>{count}</h1>
   <button onClick={()=>setCount({type:"INCREAMENT"})}>Increament</button>
   <button onClick={()=>setCount({type:"DECREAMENT"})}>Decreament</button>
   <button onClick={()=>setCount({type:"RESET"})}>Reset</button>
    <h1>Task-2</h1>
   <h1>{types}</h1>
   <button onClick={()=>setType({type:"INCREAMENT",payload:5})}>Increament by 5</button>
   <button onClick={()=>setType({type:"DECREAMENT",payload:10})}>Increament by 10</button>
   <button onClick={()=>setType({type:"Minus",payload:5})}>Decreament by 5</button>
   <button onClick={()=>setType({type:"RESET",payload:0})}>Reset</button>
   <h1>Task-3</h1>
   <input type={pass?"text":"password"} placeholder="Enter a Password" onChange={(e)=>setName(e.target.value)}/>
         {pass?(<button onClick={()=>setPass({type:"hide"})}>Hide</button>):(
   <button onClick={()=>setPass({type:"show"})}>show</button>)}
   <h1>Task-4</h1>
   <input type="text" placeholder="Enter a Name" onChange={(e)=>setDetail({type:"UPDATE",payload:{name:"name",value:e.target.value}})}/>
   <input type="email" placeholder="Enter a Email" onChange={(e)=>setDetail({type:"UPDATE",payload:{name:"email",value:e.target.value}})}/>
   <input type="text" placeholder="Enter a course" onChange={(e)=>setDetail({type:"UPDATE",payload:{name:"course",value:e.target.value}})}/>
   <button onClick={()=>setDetail({type:"RESET"})}>Reset</button>
   <h1>Detail</h1>
   <h1>Name:{detail.name}</h1>
   <h1>Email:{detail.email}</h1>
   <h1>course:{detail.course}</h1>
   <h1>Task-5</h1>
    {users.loading && <h2>Loading...</h2>}
      {users.error && <h2>{users.error}</h2>}

      {users.products.map((e) => (
        <div key={e.id}>
          <h2>{e.title}</h2>
          <p>Price: ${e.price}</p>
          </div>
          ))}
   </>
  )
}

export default App