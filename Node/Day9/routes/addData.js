import express from "express"
import { controls } from "../controller/controls.js"
const addData=express.Router()

   addData.post("/addDatas",controls) 



export default addData