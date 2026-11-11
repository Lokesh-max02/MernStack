import fs from "fs"
export const fileHandling=async () => {
    const file=fs
    fs.writeFile("create.js","This is created file",()=>{
    console.log("successfully");
    
})
}
