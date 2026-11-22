import mongoose from "mongoose";

const DB=async () => {
    try {
        const connects=await mongoose.connect(process.env.MONGO_URL)
        console.log(`DB connected successfully...  ${connects.connection.host}`);
        
    } catch (error) {
        console.log(error);
        
    }
}
export default DB