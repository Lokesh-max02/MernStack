import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
},{
   timestamps:true
})

const modelss=mongoose.model("CRUD",userSchema)

export default modelss