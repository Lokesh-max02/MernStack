import express from "express"
import { deleteProduct, getProducts, productControls, updateProduct } from "../controoler/productControls.js"

const productRoutes=express.Router()

productRoutes.post("/addProduct",productControls)
productRoutes.get("/getProduct",getProducts)
productRoutes.put("/:id",updateProduct)
productRoutes.delete("/:id",deleteProduct)
export default productRoutes