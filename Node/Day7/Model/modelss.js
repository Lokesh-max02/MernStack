import mongoose, { Types } from "mongoose";

const schemas =new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    course:String,
    city:String
},{
    timestamps:true
})
const modelss=mongoose.model("studentDB",schemas)
export default modelss