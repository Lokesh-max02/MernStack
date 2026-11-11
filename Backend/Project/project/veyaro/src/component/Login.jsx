import React, { useState } from 'react'

const Login = () => {
    const[login,setLogin]=useState({email:"",password:""})

    const handleData=(e)=>{
        setLogin({...Login,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const getDatas=localStorage.getItem("Register")||[]
        if(getDatas){
            
        }
       
        
    }
  return (
   <>
   <form onSubmit={handleSubmit}>
   <input type="email" placeholder='Enter a Email' onChange={handleData} value={login.email} name='email' />
   <input type="password" placeholder='Enter a Password' onChange={handleData} value={login.password} name='password'/>
   <button type='submit'>Submit</button>
   </form>
   </>
  )
}

export default Login