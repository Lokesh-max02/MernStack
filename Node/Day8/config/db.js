import mongoose from "mongoose";

const db=async () => {
    try {
        const connects=await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connected successfully");
        
    } catch (error) {
        console.log("error",error);
        
    }
}
export default db