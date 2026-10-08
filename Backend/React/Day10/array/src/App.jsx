import { useState } from "react"

const App = () => {
  const[detail,setDetail]=useState(["HTML","CSS","Javascript"])
  const[emp,setEmp]=useState("Arun")
  const[sal,setSal]=useState(25000)
  const[lap,setLap]=useState({name:"Laptop",price:45000,stock:10})
  const[list,setList]=useState([{ id: 1, name: "Arun", salary: 25000 },
                                { id: 2, name: "Priya", salary: 30000 },
                                { id: 3, name: "Kumar", salary: 28000 }])



  const addReact=()=>{
    setDetail([...detail,"React"])
  }
  const updatedCss=()=>{
    let updated=[...detail]
    updated[1]="Advanced CSS"
    setDetail(updated)
  }
  const salary=()=>{
    setSal(sal+5000)
  }
  const price=()=>{
    let incPrice={...lap}
    incPrice.price=50000
    setLap(incPrice)

  }
  const brand=()=>{
    let changeBrand={...lap,Brand:"Dell"}
    setLap(changeBrand)
  }
  const employee=()=>{
    let added=[...list,{id: 4,name: "Bala",salary: 32000}]
    setList(added)
  }
  const updatePriya=()=>{
    let copy=list.map((e,i)=>e.id===2?{...e,salary:35000}:e)
    setList(copy)
  }
  return (
    <>
    <div>
      <div className="bg-black text-white p-3">
      <h1>Task 1</h1>
      <h1>{emp}</h1>
      <h1>{sal}</h1>
      <button  className="bg-white text-black p-1 " onClick={salary}>Increase</button>
      </div>
      <div className="bg-amber-100 p-3">
        <h1 >Task-2</h1>
        <h1>{detail.map((e,i)=>(
          <h1>{e}</h1>
        ))}</h1>
        <button className="bg-red-500 text-black p-1 flex gap-2" onClick={addReact}>Add React</button><br/>
        <button className="bg-red-500 text-black p-1" onClick={updatedCss}>Updated Css</button>
      </div>
      <div  className="bg-red-500 p-3">
        <h1>Task 3</h1>
        <h1>{lap.name}</h1>
        <h1>{lap.price}</h1>
        <h1>{lap.stock}</h1>
        <h1>{lap.Brand}</h1>
        
       <button className="bg-white text-black p-1 flex gap-2" onClick={price}>updated</button><br/>
<button className="bg-white text-black p-1 flex gap-2" onClick={brand}>Brand</button>
      </div>
      <div>
        <h1>Task-4</h1>
        <div>
      {list.map((e) => (
        <div key={e.id}>
          <h1>{e.id}</h1>
          <h1>{e.name}</h1>
          <h1>{e.salary}</h1>
        </div>
      ))}
    </div>
    <button onClick={employee}>Add Details</button>
      <button onClick={updatePriya}>update</button>
      </div>
    </div>
    
    </>
  )
}

export default App