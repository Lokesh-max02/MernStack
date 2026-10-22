import { useEffect, useState } from "react";

const Filter = () => {
const[result,setResult]=useState([])    
const[search,setSearch]=useState("")
const[filters,setFilter]=useState("0")
const[sorts,setSorts]=useState("default")
    const Fetch=async()=>{
        const datas=await fetch("https://dummyjson.com/users")
        let details=await datas.json() 
         setResult(details.users)
    }
    useEffect(()=>{
        Fetch()
    },[])
    //search
    const dataFilter=result.filter((e)=>e.firstName.toLowerCase().includes(search.toLowerCase()))
   //Filter
   if(filters!=="0"){
    dataFilter=result.filter((e)=>e.age===Number(filters))
   }
   //sorting
   if(sorts==="low"){
   dataFilter.sort((a,b)=>a.id - b.id)
   }
    if(sorts==="high"){
    dataFilter.sort((a,b)=>b.id - a.id)
   }
  return ( 
   <>
   <input type="text" placeholder="Search" onChange={(e)=>setSearch(e.target.value)} value={search} /> <br />
      <select  onChange={(e)=>setFilter(e.target.value)} value={filters} >
        <option value="0">All Ages</option>
        <option value="25">25</option>
        <option value="30">30</option>
        <option value="35">35</option>
        <option value="40">40</option>
        </select>
        <select  onChange={(e)=>setSorts(e.target.value)} value={sorts} >
        <option value="default">Default</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
        </select>
        <button onClick={()=>{setFilter("0"),setSearch("")}}>Reset</button>
   {/* {results.map((e,i)=>(
    <div key={i+1}>
        <h1>ID:{e.id}</h1>
         <h1>Name:{e.firstName}</h1>
          <h1>Age:{e.age}</h1>
    </div>
   ))} */}
   <div>
    {dataFilter.map((e,i)=>(
        <div key={i+1}>
             <h1>ID:{e.id}</h1>
            <h1>name:{e.firstName}</h1>
             <h1>Age:{e.age}</h1>
        </div>
    ))}
   </div>
   </>
  )
}

export default Filter