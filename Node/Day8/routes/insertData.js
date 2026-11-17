import express from "express"
import { addDatas } from "../controllers/addDatas.js"

const insertData=express.Router()
insertData.post("/adding",addDatas)
//http://localhost:5000/api/auth/adding

export default insertData