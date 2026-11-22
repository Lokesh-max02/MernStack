import modelss from "../models/Models.js";

export const addDatas=async (req,res) => {
    try {
       const{name,email,password}=req.body
       const datas=await modelss.create({name,email,password})
       console.log(datas);
       
       res.status(201).json({msg:"create successfully",data:datas})
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg:"error..."})
    }
    
}
export const getDatas=async (req,res) => {
    try {
        const datas=await modelss.find()
        res.status(200).json({msg:"show data",data:datas})
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg:"error..."})
    }
    
}
export const editDatas=async (req,res) => {
    try {
        const{userId}=req.params
        const{name,email,password}=req.body
        const datas=await modelss.findByIdAndUpdate(userId,{name,email,password},{returnDocument:"after",runValidators:true})
        console.log(datas);
        
        res.status(200).json({msg:"updated successfully...",data:datas})
    } catch (error) {
         console.log(error.message);
        res.status(400).json({msg:"error..."})
    }
    
}
export const deleteData=async (req,res) => {
    try {
        const {userId}=req.params
        const deleteDetail = await modelss.findByIdAndDelete(userId)
         res.status(200).json({msg:"Delete successfully..."})
    } catch (error) {
          console.log(error.message);
        res.status(400).json({msg:"error..."})
    }
}
