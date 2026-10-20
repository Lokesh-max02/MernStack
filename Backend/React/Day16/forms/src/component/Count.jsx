



import { useEffect, useState } from "react"


const Count = () => {
    //task-6
    const[count,setCount]=useState(0)
  //task-7
  const [obj,setObj]=useState({name:"",age:"",email:""})
  const [getObj,SetGetObj]=useState([])
  //task-9
  const[datas,setData]=useState([])
  const [getDatas,setGetDatas]=useState("")
  //task-10
  const[msg,setMsg]=useState("")



    //task-6
    const increaseCount=()=>{
    setCount(count+1)
     setCount(count+1)
      setCount(count+1)
     
      
    }
   //task-7
   const handleValue=(e)=>{
    setObj({...obj,[e.target.name]:e.target.value})
   }
   const handleSummit=(e)=>{
    e.preventDefault()
    if(obj.name==""||obj.age==""||obj.email==""){
      alert("Full the All Input")
      return
    }
    SetGetObj((p)=>[...p,obj])
    setObj({name:"",age:"",email:""})
   }
    
    const detailDelete=(em)=>{
      let remove=getObj.filter((e)=>e.name!==em.name)
      SetGetObj(remove)
    }
    //task-9
    const files=async()=>{
      let product=await fetch("https://dummyjson.com/users")
      let getProduct=await product.json()
     setData(getProduct.users)  
    }
    useEffect(()=>{
      files()
    },[])
   const searchDetail=(e)=>{
    setGetDatas(e.target.value)
   }
   //Search
   const search=datas.filter((e,i)=>e.firstName.toLowerCase().includes(getDatas.toLowerCase()))
   //task-10
   useEffect(()=>{
    setTimeout(() => {
      setMsg("Welcome Lokesh")
    }, 3000);
    clearTimeout
   },[])
   return (
   <>
   
    <h1>Task-6</h1>
   <h1>{count}</h1>
   <button onClick={increaseCount}>increase</button>
   <h1>Task-7</h1>
  {getObj.map((em,i)=>(
    <div key={i+1}>
    <h1>Name:{em.name}</h1>
    <h1>Email:{em.email}</h1>
    <h1>Age:{em.age}</h1>
    <button onClick={()=>detailDelete(em)}>Delete</button>
    </div>
  ))}
   <input type="text"  placeholder="Enter a Name" onChange={handleValue} value={obj.name} name="name"/>
   <input type="number"  placeholder="Enter a Age" onChange={handleValue} value={obj.age} name="age"/>
   <input type="email"  placeholder="Enter a email" onChange={handleValue} value={obj.email} name="email"/>
   <button onClick={handleSummit}>Summit</button>
   <h1>Task-9</h1>
   <input type="text" placeholder="Search" onChange={searchDetail} value={getDatas}/>
   {search.map((e,i)=>(
    <div key={i+1}>
      <h1>ID:{e.id}</h1>
      <h1>Name:{e.firstName}</h1>
      <h1>Age:{e.age}</h1>
    </div>
   ))}
   <h1>Task-10</h1>
   <h1>{msg}</h1>
   </>
  )
}

export default Count