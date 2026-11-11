import http from 'http'
import { files } from "./component/files.js";
import dotenv from "dotenv"
const app=http.createServer()
const port=process.env.PORT||5000
files()
app.listen(port,()=>{
    console.log("sucessfully");
    
})