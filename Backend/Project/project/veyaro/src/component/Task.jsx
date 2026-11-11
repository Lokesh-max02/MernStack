import React, { useState } from 'react'

const Task = () => {
    const[count,setCount]=useState(0)
    const handleClick=()=>{
       
        if(count<=5){
            setCount( (p)=>p+1)
        }else if(count >=5){
           setCount((p)=>p+5) 
        }
    }
    
  return (
   <>
   <h1>count:{count}</h1><br/>
   <button onClick={handleClick}>Click</button>
   
   </>
  )
}

export default Task