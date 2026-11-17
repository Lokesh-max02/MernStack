
import modelss from "../Models/model.js";

export const addDatas=async (req,res) => {
    try {
        const datas=await modelss.create(req.body)
        res.status(200).json({msg:"Data added",data:datas})
    } catch (error) {
         res.status(400).json({ msg: error.message });
    }
    
}
export const insertManyData=async (req,res) => {
    try {
        const manyStudent=await modelss.insertMany(req.body)
        res.status(201).json({msg:"added",data:manyStudent})
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
    
}
export const findData=async (req,res) => {
    try {
        const {course}=req.body
         const findStudent=await modelss.find({course})
        res.status(201).json({msg:"added",data:findStudent})
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
    
}
export const findOneData=async (req,res) => {
    try {
        const {course}=req.body
         const findStudent=await modelss.findOne({course})
        res.status(201).json({msg:"added",data:findStudent})
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
    
}