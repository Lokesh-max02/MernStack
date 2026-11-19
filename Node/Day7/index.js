import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import stuRoute from './route/stuRoute.js'
import db from './config/mongoDB.js'


const app=express()
dotenv.config()

const PORT=process.env.PORT||3000
app.use(cors())
app.use(express.json())
app.use("/api/student",stuRoute)
//http://localhost:5000/api/student/addData
db()
app.listen(PORT,()=>{
    console.log(`server running successfully... http://localhost:${PORT}  `);
    
})