import express from "express"
import { addDatas, findData, insertManyData,findOneData } from "../controllers/addDatas.js"

const insertData=express.Router()
insertData.post("/adding",addDatas)
insertData.post("/insertMany",insertManyData)
insertData.post("/find",findData)
insertData.post("/findOne",findOneData)
//http://localhost:5000/api/auth/adding

export default insertData