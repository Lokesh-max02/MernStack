import { useState } from "react"

const Shopping = () => {
  const[detail,setDetail]=useState([{id:1,name:"Fan",price:1000,quantity:3},
    {id:2,name:"Chair",price:2000,quantity:4},
    {id:3,name:"Table",price:4000,quantity:5},
    {id:4,name:"Bike",price:100000,quantity:2},
    {id:5,name:"Car",price:1000000,quantity:1}
  ])

  const handleAdd=()=>{
    let copy=[...detail]
    setDetail([copy.quantity])
  }
  const handleMinus=()=>{
    setDetail(()=>[...detail],[detail.quantity]+1)
  }
  return (
    <>
    <div>
      <h1>Task-3</h1>
      <h1>{detail.map((e,i)=>(
        <div key={i+1}>
          <h1>ID:{e.id}</h1>
           <h1>Name:{e.name}</h1>
            <h1>Price:{e.price}</h1>
             <h1>Quantity:{e.quantity}</h1>
             <button onClick={handleAdd}>Add</button>
             <button onClick={handleMinus}>Minus</button>
        </div>
      ))}</h1>
    </div>
    
    </>
  )
}

export default Shopping