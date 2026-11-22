import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routers from './routes/routers.js'
import DB from './config/DB.js'

const server=express()
dotenv.config()
const PORT=process.env.PORT||3000
server.use(cors())
server.use(express.json())
server.use("/api/auth",routers)
DB()
server.listen(PORT,()=>{
    console.log(`successfully server connected... http://localhost:${PORT}`);
    
})