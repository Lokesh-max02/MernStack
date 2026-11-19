import mongoose from "mongoose"
import modelss from "../Model/modelss.js"

export const studentController=async (req,res) => {
    try {
        const {name,email,course,age}=req.body
        const datas=await modelss.create({name,email,course,age})
        res.status(201).json({msg:"created successfully...",data:datas})
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg:"error..."})
        
    }
    
}
  