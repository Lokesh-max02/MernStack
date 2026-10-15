import { useEffect, useState } from "react"

const App = () => {
  const[value,setValue]=useState([])
  const[datas,setDatas]=useState("")

  const data=async() => {
    let details=await fetch("https://dummyjson.com/products")
    let change=await details.json()
   setValue(change.products)  
  }

  const handleChange=(e)=>{
    setDatas(e.target.value)  
  }

useEffect(()=>{
  data()
},[])
  
  return (
   <>
   <div>
    <input type="text" onChange={handleChange} value={datas} placeholder="Enter a Search" />
   </div>
   <div>
    {value.map((e,i)=>(
      <div>
        <h1>{e.title}</h1>
         <h1>{e.price}</h1>
      </div>
    ))}
   </div>
   
   
   </>
  )
}

export default App