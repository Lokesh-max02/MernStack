import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  const[datas,setDatas]=useState({name:"",email:"",password:""})
  const [getData,setGetData]=useState([])
  const[editId,setEditId]=useState(null)
  const handleChange=(e)=>{
    setDatas({...datas,[e.target.name]:e.target.value})
  }
  const handleClick=async(e)=>{
    e.preventDefault()
    try {
       e.preventDefault()
    const details=await axios.post("http://localhost:5000/api/auth/add",datas)
    const getDatas=await axios.get("http://localhost:5000/api/auth/get")
    setGetData(getDatas.data.data)
    setDatas({name:"",email:"",password:""})
    alert("Register successfully")
    } catch (error) {
      console.log(error);
      
    }
   
  }
  const dataEdit=async (e) => {
   
   
      setDatas({ name: e.name,email: e.email,password: ""})
      setEditId(e._id)
    }
     const editdatas=async(e)=>{
      e.preventDefault()
    try {
      const datas=await axios.put(`http://localhost:5000/api/auth/${editId}`,datas)
      alert(res.data.msg)
      setDatas({name:"",email:"",password:""})
      setEditId(null)
    } catch (error) {
      alert(error.response.data.msg)
    }
  }
  const dataDelete=async (id) => {
    try {
      const res=await axios.delete(`http://localhost:5000/api/auth/${id}`)
      alert(res.data.msg)
    } catch (error) {
      console.log("error",error);
      
    }
  }
  return (
   <>
   <form>
    <input type="text" placeholder='Enter a Name' onChange={handleChange} name='name' value={datas.name}/>
     <input type="email" placeholder='Enter a Email' onChange={handleChange} name='email' value={datas.email}/>
      <input type="password" placeholder='Enter a Password' onChange={handleChange} name='password' value={datas.password}/>
      <button onClick={handleClick}>Register</button>
   </form>
   <h1>{getData.map((e,i)=>(
<div>
  <h1>{e.name}</h1>
   <h1>{e.email}</h1>
    <h1>{e.password}</h1>
    <button onClick={()=>dataEdit(e)}>Edit</button>
    <button onClick={()=>dataDelete(e._id)}>Delete</button>
</div>
   ))}</h1>
   </>
  )
}

export default App