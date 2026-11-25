import express from 'express'
import { addDatas, getDatas } from '../controller/controller.js'

const routers=express.Router()
//http://localhost:5000/api/auth/add
routers.post("/add",addDatas)
routers.post("/get",getDatas)

export default routers