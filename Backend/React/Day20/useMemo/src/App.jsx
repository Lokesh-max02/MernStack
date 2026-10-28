// import { useEffect, useState } from "react";
// import Task from "./component/Task";

import { useMemo, useState } from "react"

// const App = () => {
//   const[search,setSearch]=useState("")
//   const[value,setValue]=useState([])
//   const data=async()=>{
//     let products=await fetch("https://dummyjson.com/products")
//     let details=await products.json()
//     setValue(details.products)
//   }
//   useEffect(()=>{
//     data()
//   },[])
//   let Revalues=[...value]
//   let result=Revalues.filter((e)=>e.category.toLowerCase().includes(search.toLowerCase()))
//   console.log(result);
  
  
//   return (
//     <>
//     <div>
//       <h1>Products</h1>
//       <input type="text" onChange={(e)=>setSearch(e.target.value)}  />
//     </div>
//     <div>
//       <h1>{result.map((e,i)=>(
//         <div key={i+1}>
//           <h1>ID:{e.id}</h1>
//           <h1>Title:{e.title}</h1>
//           <h1>Category:{e.category}</h1>
//         </div>
//       ))}</h1>
//     </div>
   
//     </>
//   )
// }

// export default App

import React from 'react'
import Number from "./component/Number"
import Products from "./component/Products"
import Shopping from "./component/Shopping"

const App = () => {
  return (
   <>
   <Number/>
   <Products/>
   <Shopping/>
   </>
  )
}

export default App