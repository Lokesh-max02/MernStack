import { useEffect } from "react";

const Task = () => {
const count = (callback) => {
    let num = 20;
    callback(num);
}

const Number = (num) => {
    let add = num + 20;
    console.log(add);
}
useEffect(()=>{
    setTimeout(()=>count(Number),2000)
},[])


  return (
    <>
    
    
    </>
  )
}

export default Task