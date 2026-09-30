import React from 'react'

const Login = () => {
  return (
    <>
    <div>
        <div>
            <label >Name:</label>
            <input type="text" placeholder='Enter a Name'/><br/>
            <label>Password:</label>
            <input type="password" placeholder='Enter a password'/><br/>
          <button>Login</button>
        </div>
    </div>
    
    </>
  )
}

export default Login