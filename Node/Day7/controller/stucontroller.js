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
export const stuDetailGet=async (req,res) => {
    try {
        const{_id}=req.params
        
        const finds=await modelss.findOne({_id})
         if (!finds) {
            return res.status(404).json({
                msg: "Student not found"
            });
        }
        console.log(finds);
         res.status(201).json({msg:"Find successfully...",data:finds})
        
    } catch (error) {
         res.status(400).json({msg:"error..."})
    }
    
}
  