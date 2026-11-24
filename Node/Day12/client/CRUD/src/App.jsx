import axios from "axios"
import { useState } from "react"

const App = () => {
  const[forms,setForms]=useState({name:"",email:"",password:""})
  const handleChange=(e)=>{
    setForms({...forms,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const datas=await axios.post("http://localhost:5000/api/auth/add",forms)
    alert("Register successfully...")
  }
  return (
    <>
    <h1>Register Form..</h1>
    <form onSubmit={handleSubmit} >
      <input type="text" placeholder="Enter a Name" onChange={handleChange} value={forms.name} name="name"/>
       <input type="email" placeholder="Enter a Email" onChange={handleChange} value={forms.email} name="email"/>
        <input type="password" placeholder="Enter a password" onChange={handleChange} value={forms.password} name="password"/>
       <button type="submit">Register</button>
    </form>
    </>
  )
}

export default App