import mongoose from "mongoose";
//schema
const userSchema=new mongoose.Schema({
    userName:String,
    userEmail:{type:String,unique:true},
    userPassword:String,
    userCity:String,
    status:{type:Boolean,default:true}
},{
    //generate a date and time
    timestamps:true
})

//model
const userModel=mongoose.model("userModel",userSchema)
export default userModel