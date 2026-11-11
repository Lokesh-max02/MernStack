import express from 'express'
import {  authController } from '../Controller/authController.js'

//http://localhost:5000/api/auth/userAdding
const routes=express.Router()

routes.post("/userAdding",authController)



export default routes