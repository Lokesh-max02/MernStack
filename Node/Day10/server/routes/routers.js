import express from 'express'
import { addDatas, deleteData, editDatas, getDatas } from '../controllers/controllers.js'

const routers=express.Router()
//http://localhost:5000/api/auth/add
routers.post("/add",addDatas)
routers.get("/get",getDatas)
routers.put("/:userId",editDatas)
routers.delete("/:userId",deleteData)
export default routers