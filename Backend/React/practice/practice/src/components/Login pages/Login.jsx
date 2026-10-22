import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  let navigate=useNavigate()
  const[data,setData]=useState({email:"",password:""})

const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}
const handleLogin=(e)=>{
  e.preventDefault()
  const getDatas=JSON.parse(localStorage.getItem("details"))||[]
   const findUser=getDatas.find((e)=>e.email===data.email&&e.password===data.password)
      console.log(findUser);
   
   if(!findUser){
    alert("Your Not valid user")
    return
   }
    navigate("/Home")

  
}



  return (
    <>
    <form onSubmit={handleLogin}>
    <input type="text" placeholder='Enter a Email' onChange={handleChange} value={data.email} name='email' />
    <input type="number" placeholder='Enter a password' onChange={handleChange} value={data.password} name='password' />
    <button type="submit">Login</button>
    </form>
    </>
  )
}

export default Login