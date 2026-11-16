import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
// import addDatas from './routes/addDatas.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
const app=express()
const PORT=process.env.PORT||3000
app.use(cors())
app.use(express.json())
//http://localhost:5000/api/auth/datas
// http://localhost:5000/api/auth/getData

//http://localhost:5000/api/product/addProduct

// app.use("/api/auth",addDatas)
app.use("/api/product",productRoutes)
app.listen(PORT,()=>{
    console.log(`server successfully running...  http://localhost:${PORT}`);
    
})