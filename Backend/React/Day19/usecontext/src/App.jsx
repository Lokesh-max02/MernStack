import React, { useContext } from 'react'
import Context from './component/Context'
import Task from './Task/Task'

const App = () => {
  const{names,details,setDetail,theme,setTheme}=useContext(Context)
  
  return (
    <>
    <div>
      <h1>Task-1</h1>
      <h1>{names.name}</h1>
      <h1>{names.age}</h1>
      <h1>{names.course}</h1>
    </div>
     <div className={ theme ? "bg-amber-100 text-black p-4" : "bg-black text-white p-4"}>
      <h1>Task-2</h1>
      <h1>Theme</h1>
    <button className='bg-amber-50 text-black p-1 rounded-l' onClick={()=>setTheme(!theme)}>{theme?"Dark":"Light"}</button>
    </div>
    <div>
      <h1>Task-3</h1>
      <h1>{details.isLoggedIn?"Welcome"+" "+details.userName:"Please Login"}</h1>
      <button onClick={()=>setDetail({...details,isLoggedIn:!details.isLoggedIn})}>{details.isLoggedIn?"Not login":"Login"}</button>
    </div>
    </>
  )
}

export default App