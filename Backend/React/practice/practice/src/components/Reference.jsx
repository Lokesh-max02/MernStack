import { useRef } from "react"

const Reference = () => {
const data=useRef("")
const showText=()=>{
    data.current.innerHTML="Show text"
    data.current.style.backgroundColor="red"
}
console.log(data);

  return (
   <>
   <div>
    <h1  ref={data}></h1>
    <button onClick={showText}>show</button>
   </div>
   
   
   </>
  )
}

export default Reference