import modelss from "../models/models.js"
import bcrypt from 'bcrypt'
export  const addDatas=async (req,res) => {
    try {
        const{name,email,password}=req.body

      const checkEmail=await modelss.findOne({email})
      if(checkEmail){
        res.status(401).json({msg:"Email is Already Registered"})
        return
      }
       
        const hashed=await bcrypt.hash(password,10)
         const data=await modelss.create({name,email,password:hashed})
        console.log(hashed);
        
        res.status(201).json({msg:"Register Successfully..."})
    } catch (error) {
        res.status(500).json({msg:"error...."})
    }
    
}
export const getDatas=async (req,res) => {
    try {
        const {email,password}=req.body
        if(!email ||!password){
            res.status(500).json({msg:"please Fill the Form"})
            return
        }
        const getDatas=await modelss.findOne({email})
        
        if(!getDatas){
             res.status(500).json({msg:"your not a validUser"})
             return
        }
        const decoded=await bcrypt.compare(password,getDatas.password)
        res.status(200).json({msg:"Login Successfully..."})
    } catch (error) {
         res.status(500).json({msg:"error...."})
         console.log(error);
         
    }
}