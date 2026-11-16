let arr=[]



export const productControls = async (req, res) => {
    try {
        console.log("POST API CALLED");
        console.log("Received data:", req.body);

        const datas = req.body;

        arr.push(...datas);

        console.log("Stored array:", arr);

        res.status(201).json({
            msg: "Products added successfully",
            data: arr
        });

    } catch (error) {
        console.log("POST ERROR:", error.message);

        res.status(400).json({
            msg: error.message
        });
    }
};

export const getProducts=async(req,res)=>{
    try {
        console.log(arr);
        
         res.status(200).json({msg:"Get product successfully",data:arr})
    } catch (error) {
        res.status(400).json({msg:"errorr..."})
    }
}

export const updateProduct=async (req,res) => {
    
    try {
      
        
      const{id}=req.params
      const{name,quantity,price}=req.body
      const finds=arr.findIndex((e)=>e.id===id)
      console.log("ID:", id);
console.log("Array:", arr);
console.log("Index:", finds);
      if(finds===-1){
        return res.status(404).json({msg:"product not found"});
      }
      
      arr[finds]={...arr[finds],name,quantity,price}
      res.status(200).json({msg:"updated successfully",data:arr})
    } catch (error) {
        console.log(error.message);
        
         res.status(400).json({msg:"errorr..."})
    }
    
}

export const deleteProduct=async (req,res) => {
    try {
        const{id}=req.params
        const deletes=arr.findIndex((e)=>e.id===id)
        if(deletes===-1){
        return res.status(404).json({msg:"product not found"});
      }
      arr.splice(deletes,1)
      res.status(200).json({msg:"Delete successfully",data:arr})
    } catch (error) {
         console.log(error.message);
         res.status(400).json({msg:"errorr..."})
    }
    
}