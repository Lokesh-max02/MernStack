import { useEffect } from "react";
import useFetch from "./component/useFetch";

const App = () => {
  const dataDetails=useFetch()
  console.log(dataDetails.result);
  useEffect(()=>{
    dataDetails()
  },[])
  return (
   <>
   
   
   </>
  )
}

export default App