import mongoose from "mongoose";

const connect=async()=>{
    try{
    const connections=await mongoose.connect(process.env.MONGO_URL)
    console.log("DB connected successfully");
    
    }catch{
        console.log("error",error.message);
        
        
    }
}
export default connect