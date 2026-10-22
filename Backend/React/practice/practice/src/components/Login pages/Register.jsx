import { useState } from "react"
import {useNavigate} from "react-router-dom"
const Register = () => {
     const navigate=useNavigate()
    const [data,setData]=useState({name:"",email:"",password:""})


    const getDetails=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    console.log(data);
    const handleSummit=(e)=>{
        e.preventDefault()
        let getDatas=JSON.parse(localStorage.getItem("details"))||[]
        let change={id:Date.now(),name:data.name,email:data.email,password:data.password}
        getDatas.push(change)
        localStorage.setItem("details",JSON.stringify(getDatas))
        alert("Register SuccessFully")
    setData({name:"",email:"",password:""})
    navigate("/Login")
    }
  return (
    <>
    <form onSubmit={handleSummit}>
    <input type="text"  placeholder='Enter a Name' onChange={getDetails} value={data.name} name='name'/>
    <br/>
    <br/>
     <input type="email"  placeholder='Enter a Email' onChange={getDetails} value={data.email} name='email'/>
      <br/>
      <br/>
      <input type="password"  placeholder='Enter a password' onChange={getDetails} value={data.password} name='password'/>
      
      <br/>
      <br/>
      <button type="submit">Register</button>
</form>
    
    </>
  )
}

export default Register