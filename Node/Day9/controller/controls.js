import userModel from "../model/model.js"

export const controls=async (req,res) => {
    try {
        const {userName,userEmail,userPassword,userCity,status}=req.body
        const getData=userModel.create({userName,userEmail,userPassword,userCity,status})
        req.status(200).json("data get successfully",getData)
    } catch (error) {
        console.log("err",error);
        
    }
}