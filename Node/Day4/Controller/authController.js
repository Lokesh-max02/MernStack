let arr=[]
export const authController=async(req,res)=>{
try {
   console.log(req);
   const{name,age}=req.body
   arr.push(name,age)
   console.log(arr);
   
    
} catch (error) {
    console.log(error);
    
}
}