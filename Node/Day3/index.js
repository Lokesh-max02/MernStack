import os from 'os'
import fs from 'fs'
import path from 'path'
import process from 'process'

const datas=async () => {
// console.log(os);

    const systemInfo={platform:os.platform(),
        architecture:os.arch(),
        hostName:os.hostname(),
        RAM:os.totalmem()
    }
const folderpath=path.join(process.cwd(),"data")
const filePath=path.join(folderpath,"ComputerInfo.json")
await fs.mkdir(folderpath,{recursive:true},(err)=>{
    if(err){
 throw err;
 console.log("folder created........");
 
    }
})
const jsonData = JSON.stringify(systemInfo);
await fs.writeFile(filePath,jsonData,"utf-8",()=>{
    console.log("writeFile successfully...");
    
})
await fs.readFile(filePath,"utf-8",(data,error)=>{
    try {
        console.log("Reading Files...",);
        console.log(jsonData);
        
    } catch (error) {
        console.log(error.message);
        
    }
    
    
})
const result=JSON.parse(jsonData)
console.log(result);

console.log("platform: ",result.platform);
console.log("Architecture:", result.architecture);
console.log("HostName ",result.hostName);
console.log("RAM ",result.RAM);

console.log("OS information saved:", filePath);

    console.log("result are...",systemInfo);
    
}
datas()