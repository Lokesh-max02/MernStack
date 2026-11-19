import mongoose from "mongoose";

const db = async () => {
    try {
        const connectDB = await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Database connection failed:", error.message);
    }
};

export default db;