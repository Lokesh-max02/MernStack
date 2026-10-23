import { useRef } from "react"



const App = () => {
  const name=useRef(null)
   const email=useRef(null)
  const password=useRef(null)
  const home=useRef(null)
  const about=useRef(null)
  const service=useRef(null)
  const time=useRef(null)

   const handleSubmit=(e)=>{
    e.preventDefault()
    alert(name.current.value,email.current.value)
   }
   const handleClear=()=>{
    name.current.value=""
    email.current.value=""
   }
   const showPassword=()=>{
    password.current.type="text"
   }
   const hidePassword=()=>{
    password.current.type="password"
   }
   const scrollToSection=(section)=>{
     section.current.scrollIntoView({behavior:"smooth"})
   }
   const startTime=()=>{
    const values=time.current.value + 1
    console.log(values);
    
      time.current.innerHTML=values
   }
   const stopTime=()=>{
  
   }
   const resetTime=()=>{

   }
  return (
    <>
    <h1>Task-1</h1>
    <input type="text" ref={name} />
    <button onClick={()=>name.current.focus()}>Focus</button><br /><br />
    <input type="email" ref={email} />
     <button onClick={()=>email.current.focus()}>Focus</button><br /><br />
    <button onClick={handleSubmit}>submit</button>
    <button onClick={handleClear}>Clear</button>
    
    <h1>Task-2</h1>
    <input type="password"  ref={password}/>
    <button onClick={showPassword}>show</button>
    <button  onClick={hidePassword}>Hide</button>
    <div>
      <h1>Task-3</h1>
      <button onClick={()=>scrollToSection(home)}>Home</button>
      <button onClick={()=>scrollToSection(about)}>About</button>
      <button onClick={()=>scrollToSection(service)}>service</button>
      
      <section>
        <h1 ref={home}>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores, impedit reiciendis quae in accusamus, deserunt  ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores, impedit reiciendis quae in accusamus, deseruntvero reprehenderit sunt soluta consequuntur provident nemo dolor perferendis culpa a commodi doloremque et?</p>
      </section>
      <section>
        <h1 ref={about}>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores, impedit reiciendis quae in accusamus, deserunt  ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores, impedit reiciendis quae in accusamus, deseruntvero reprehenderit sunt soluta consequuntur provident nemo dolor perferendis culpa a commodi doloremque et?</p>
      </section>
      <section>
        <h1 ref={service}>Service</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores, impedit reiciendis quae in accusamus, deserunt  ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores, impedit reiciendis quae in accusamus, deseruntvero reprehenderit sunt soluta consequuntur provident nemo dolor perferendis culpa a commodi doloremque et?</p>
      </section>
    </div>
    <h1>Task-4</h1>
    <h1 ref={time}></h1>
    <button onClick={startTime}>start</button>
    <button onClick={stopTime}>stop</button>
    <button onClick={resetTime}>Reset</button>
    </>
  )
}

export default App

