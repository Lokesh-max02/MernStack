import { useEffect } from "react";

const useFetch=()=>{
   const datas=async()=>{
    let values=await fetch("https://dummyjson.com/users")
    let details=await values.json()
    let result=details.users
    
   }


return(datas)


}
export default useFetch