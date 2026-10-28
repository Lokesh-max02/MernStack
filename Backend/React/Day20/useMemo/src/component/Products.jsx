import React, { useMemo, useState } from 'react'
const handleSearch=(value,detail)=>{
    console.log("outside function");
    
    let result=detail.filter((e,i)=>e.name.toLowerCase().includes(value.toLowerCase()))
    return result
}
const Products = () => {
    console.log("product Running");
    
    const[detail,setDetail]=useState([{id:1,name:"Fan",price:2000},
        {id:2,name:"paste",price:3000},{id:3,name:"Table",price:4000},{id:4,name:"Bed",price:5000},{id:5,name:"Chair",price:6000}
    ])
    const [search,setSearch]=useState("")
    const[count,setCount]=useState(0)
    const searchResult=useMemo(()=>{                                                                                                                                           
        return handleSearch(search,detail)
    },[search])

  return (
   <>
   <div>
    <h1>Task-2</h1>
    <input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
    <h1>{searchResult.map((e,i)=>(
        <div key={i+1}>
            <h1>ID:{e.id}</h1>
            <h1>Name:{e.name}</h1>
            <h1>price:{e.price}</h1>
        </div>
    ))}</h1>
    <h1>Counter</h1>
    <h1>Count:{count}</h1>
    <button onClick={()=>setCount((p)=>p+1)}>Add Count</button>
   </div>
   
   
   </>
  )
}

export default Products