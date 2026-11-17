import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import insertData from './routes/insertData.js'
import db from './config/db.js'


const app=express()
dotenv.config()
const PORT=process.env.PORT||3000
app.use(cors())
app.use(express.json())
app.use("/api/auth",insertData)
db()
app.listen(PORT,()=>{
    console.log(`server running successfully...  http://localhost:${PORT} `);
    
})
