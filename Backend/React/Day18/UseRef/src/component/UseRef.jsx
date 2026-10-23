import { useState } from "react"


const UseRef = () => {
    const[name,setName]=useState({name:"",email:"",password:""})
    const [data,setData]=useState()


    const handleInput=(e)=>{
      setName()
    }
    const handleData=(e)=>{
        e.preventDefault()
        let value=localStorage.setItem("detailss",name)
       let valuess= localStorage.getItem("detailss")
      setData(valuess)
       
    }
  return (
    <>
    <form onSubmit={handleData} >
    <input type="text" placeholder="Enter a Name" onChange={handleInput} name="name" value={name.name}/>
    <input type="text" placeholder="Enter a Email" onChange={handleInput} name="email" value={name.email}/>
    <input type="text" placeholder="Enter a Password" onChange={handleInput} name="password" value={name.password}/>
    <button type="button">submit</button>
    <h1>{data}</h1>
    </form>
    </>
  )
}

export default UseRef