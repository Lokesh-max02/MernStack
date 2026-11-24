import express from 'express'
import { addDatas } from '../controller/controller.js'

const routers=express.Router()
//http://localhost:5000/api/auth/add
routers.post("/add",addDatas)

export default routers