import { useState } from "react"

const App = () => {
  //task-1
  const[data,setData]=useState({name:"",Dept:"",salary:""})
  const[getData,setGetData]=useState([])
  const [editId, setEditId] = useState(null);

  //task-2
  const[stu,setStu]=useState({name:"",trainer:"",Field:""})
  const[getStu,setGetStu]=useState([])


//task-1
const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value})

}
const addDetail=(e)=>{
  e.preventDefault()
   if (editId !== null) {
      const updated = getData.map((emp) =>
        emp.id === editId ? { ...emp, ...data } : emp
      );
      setGetData(updated);
      setEditId(null);
    } else {
      const employee = {
        id: Date.now(),
        ...data
      };
      setGetData([...getData, employee]);
    }
    setData({ name: "", Dept: "", salary: "" });
  };

const editDetail=(ed)=>{
setData({name:ed.name,Dept:ed.Dept,salary:ed.salary})
setEditId(ed)
}
const deleteDetail=(ed)=>{
let remove=getData.filter((e,i)=>e!==ed)
setGetData(remove)
}

//task-2
const changeTrainer=(e)=>{
  
  setStu({...stu,[e.target.name]:e.target.value})
}
const updateStudent=(e)=>{
  e.preventDefault()
  setGetStu((p)=>[...p,stu])
  setStu({name:"",trainer:"",Field:""})
}
  return (
   <>
   <div>
    <h1>task-1</h1>
   <form className="p-3">
   <input type="text" placeholder="Enter a Name" onChange={handleChange} value={data.name} name="name"/>
   <input type="text" placeholder="Enter a Dept" onChange={handleChange} value={data.Dept} name="Dept"/>
   <input type="number" placeholder="Enter a salary" onChange={handleChange} value={data.salary} name="salary"/>
   <button onClick={addDetail}>Click</button>
   </form>
   {getData.map((ed,i)=>(
    <div key={i+1}>
      <h1>{ed.name}</h1>
      <h1>{ed.Dept}</h1>
      <h1>{ed.salary}</h1>
      
      <button className="bg-blue-600 text-black p-1" onClick={()=>editDetail(ed)}>Edit</button>
      <button className="bg-blue-600 text-black p-1" onClick={()=>deleteDetail(ed)}>Delete</button>
    </div>
   ))}
</div>
<form className="p-3">
  <h1>task-2</h1>
  <input type="text" placeholder="Enter a Name" onChange={changeTrainer} value={stu.name} name="name" />
  <input type="text" placeholder="Enter a Trainer Name" onChange={changeTrainer} value={stu.trainer} name="trainer" />
  <input type="text" placeholder="Enter a Feild" onChange={changeTrainer} value={stu.Field} name="Field" />
  <button onClick={updateStudent}>ADD</button>
</form>

<div className="overflow-x-auto p-4">
  <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
    
    <thead className="bg-blue-600 text-white">
      <tr>
        <th className="px-6 py-3 text-left">Name</th>
        <th className="px-6 py-3 text-left">Trainer Name</th>
        <th className="px-6 py-3 text-left">Field</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {getStu.map((e, i) => (
        <tr
          key={i}
          className="hover:bg-blue-50 transition duration-200"
        >
          <td className="px-6 py-4 text-gray-800">{e.name}</td>
          <td className="px-6 py-4 text-gray-800">{e.trainer}</td>
          <td className="px-6 py-4 text-gray-800">{e.Field}</td>
        </tr>
      ))}
    </tbody>

  </table>
</div>
   </>
  )
}

export default App