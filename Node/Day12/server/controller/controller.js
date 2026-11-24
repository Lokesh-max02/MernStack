import modelss from "../models/models.js"

export  const addDatas=async (req,res) => {
    try {
        const{name,email,password}=req.body
        const data=await modelss.create({name,email,password})
        res.status(201).json({msg:"Register Successfully..."})
    } catch (error) {
        res.status(500).json({msg:"error...."})
    }
    
}