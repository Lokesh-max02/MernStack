
import modelss from "../Models/model.js";

export const addDatas=async (req,res) => {
    try {
        const datas=await modelss.create(req.body)
        res.status(200).json({msg:"Data added",data:datas})
    } catch (error) {
         res.status(400).json({ msg: error.message });
    }
    
}