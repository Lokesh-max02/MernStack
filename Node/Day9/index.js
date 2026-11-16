import express from "express"
import dotenv from  "dotenv"
import cors from "cors"
import   connect  from "./config/newDb.js"
import addData from "./routes/addData.js"

dotenv.config()
const app=express()
const PORT=process.env.PORT||3000
app.use(cors())
app.use(express.json())
connect()
app.use("/api/auth",addData)
app.listen(PORT,()=>{
    console.log(`server Successfully running...  http://localhost:${PORT}`);
    
})
//http://localhost:5000/api/auth/addDatas