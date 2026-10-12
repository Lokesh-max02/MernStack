import { useState } from "react"

const Tasks = () => {
    const[isOn,setIsOn]=useState(false)
    const[isLiked,setIsLisked]=useState(false)
    const[user,setUser]=useState({name:"Rahul",age:22,city:"chennai"})
    const [products, setProducts] = useState([
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Phone", price: 20000, inStock: false },
  { id: 3, name: "Tablet", price: 15000, inStock: true }
]);
    const [students, setStudents] = useState([
  { id: 1, name: "Ravi", marks: 75, isPassed: true },
  { id: 2, name: "Priya", marks: 35, isPassed: false },
  { id: 3, name: "Kumar", marks: 90, isPassed: true }
]);

    const turnOn=()=>{
        setIsOn(!isOn)
    }
    const likeCount=()=>{
        setIsLisked(!isLiked)
    }
    const updated=()=>{
        let update={...user,name:"Arjun"}
        setUser(update)
    }
     const updatedCity=()=>{
        let updateCity={...user,city:"Bangaluru"}
        setUser(updateCity)
    }
     const changeStock=()=>{
       let product = products.map((e, i) =>e.id === id? { ...e, inStock: !e.inStock }:e);
       setProducts(product);
     }
     const addMark=()=>{
     setStudents(prev =>prev.map(student =>student.id === id? { ...student, marks: student.marks + 5 }: student))
     }  
      const deleteStudent=()=>{
       setStudents(prev => prev.filter(student => student.id !== id))
      }
      const result=()=>{
       setStudents(students.map(student=>student.id===id?{...student,isPassed:!student.isPassed}:e))
      }

  return (
    <>
    <div>
        <div>
            <h1>Task-1</h1>
            <h1>{isOn?"status:ON":"status:OFF"}</h1>
            <button onClick={turnOn}>Toggle</button>
        </div>
        <div>
            <h1>Task-2</h1>
            <h1>My post</h1>
            <h1>{isLiked?"Liked":""}</h1>
            <button onClick={likeCount}>click the Like Button</button>
        </div>
        <div>
            <h1>Task-3</h1>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.city}</h1>
            <button onClick={updated}>Change Name</button>
            <button onClick={()=>setUser({...user,age:user.age+1})}>Increase Age</button>
            <button onClick={updatedCity}>Change city</button>
        </div>
        <div>
            {products.map((e,i)=>(
<div key={i+1}>
    <h1>ID:{e.id}</h1>
    <h1>Name:{e.name}</h1>
    <h1>Price{e.price}</h1>
    <h1>{e.inStock?"in Stock":"Out of stock"}</h1>
    <button onClick={changeStock}>Toggle stock</button>
</div>


            ))}
        </div>
        <div>
            <h1>Task-5</h1>
            {students.map((e,i)=>(
                <div key={i+1}>
                    <h1>ID:{e.id}</h1>
                     <h1>Name:{e.name}</h1>
                      <h1>Marks: {e.marks}</h1>
                      <button onClick={addMark}>Add Marks</button>
                       <h1>{e.isPassed?"passed":"Fail"}</h1>
                       <button onClick={result}>Result</button>
                       <button onClick={deleteStudent}>Delete</button>
                </div>
            ))}
            
        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Tasks