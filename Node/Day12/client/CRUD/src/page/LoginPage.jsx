import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const LoginPage = () => {
    const navigate=useNavigate()
    const[datas,setDatas]=useState({email:"",password:""})

    const handleChange=(e)=>{
        setDatas({...datas,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        try{
        e.preventDefault()
        const data=await axios.post("http://localhost:5000/api/auth/get",datas)
        setDatas({email:"",password:""})
        navigate("/Dashboard")
    }catch(error){
        console.log(error);
        
    }
}
  return (
   <>
   <h1>Login Form...</h1>
   <form onSubmit={handleSubmit} >
    <input type="Email" placeholder="Enter a Email" onChange={handleChange} value={datas.email} name="email"/>
     <input type="password" placeholder="Enter a password" onChange={handleChange} value={datas.password} name="password"/>
     <input type="submit" value={"login"} />
   </form>
   
   </>
  )
}

export default LoginPage