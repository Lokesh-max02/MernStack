import React, { useState } from 'react'
import Context from '../component/Context'

const Provider = ({children}) => {
  let names={name:"lokesh",age:23,course:"FS Mern"}
  const[theme,setTheme]=useState(true)
  const [details,setDetail]=useState({isLoggedIn:false,userName:"Lokesh"})

  return (
    <>
    <Context.Provider value={{names,details,setDetail,theme,setTheme}}>
      {children}
    </Context.Provider>
    
    </>
  )
}

export default Provider