import { useEffect, useState } from "react";

const App = () => {
  const[search,setSearch]=useState("")
  const[value,setValue]=useState([])
  const data=async()=>{
    let products=await fetch("https://dummyjson.com/products")
    let details=await products.json()
    setValue(details.products)
  }
  useEffect(()=>{
    data()
  },[])
  let Revalues=[...value]
  let result=Revalues.filter((e)=>e.category==search)
  console.log(Revalues.category);
  
  
  return (
    <>
    <div>
      <h1>Products</h1>
      <input type="text" onChange={(e)=>setSearch(e.target.value)}  />
    </div>
    
    </>
  )
}

export default App
