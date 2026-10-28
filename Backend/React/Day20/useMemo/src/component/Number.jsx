import { useMemo, useState } from "react";

const calculate=(number)=>{
  console.log("app running");
  for(let i=0;i<100;i++){
//   console.log(i);
  
  }
  
  return number*2
}
const Number = () => {
  const[number,setNumber]=useState(0)
  const[dark,setDark]=useState(false)
console.log("component running");

  const result=useMemo(()=>{
    return calculate(number)
  },[number])
  return (
   <>
   <h1>Task-1</h1>
   <div className={dark?"bg-amber-700 text-white":"bg-black text-amber-50"}>
   <input type="text" placeholder="Enter a Number" onChange={(e)=>setNumber(e.target.value)} />
   <h1>{result}</h1>
   <button className="bg-amber-50 text-black p-1" onClick={()=>setDark(!dark)}>{dark?"Dark":"Light"}</button>
   </div>
   </>
  )
}

export default Number