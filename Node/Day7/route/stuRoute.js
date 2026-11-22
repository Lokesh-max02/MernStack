import express from 'express'
import { studentController, stuDetailGet } from '../controller/stucontroller.js'

const stuRoute=express.Router()
stuRoute.post("/addData",studentController)
stuRoute.get("/:_id",stuDetailGet)



export default stuRoute