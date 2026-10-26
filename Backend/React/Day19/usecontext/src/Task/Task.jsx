import React from 'react'

const Task = () => {
    const data=[{name:"lokesh",salary:20467,subject:"node",dept:"it"},
        {name:"lokesh",salary:30467,subject:"node",dept:"it"},
        {name:"lokesh",salary:60467,subject:"node",dept:"it"},
        {name:"lokesh",salary:100467,subject:"node",dept:"it"}
    ]
    let totalSalary=0
    
    let total=data.map((e,i)=>e.salary+=totalSalary)
  return (
    <>
    <div>
        <h1>{total}</h1>
    </div>
    
    </>
  )
}

export default Task