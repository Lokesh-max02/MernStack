import express from 'express'
import { studentController } from '../controller/stucontroller.js'

const stuRoute=express.Router()
stuRoute.post("/addData",studentController)



export default stuRoute