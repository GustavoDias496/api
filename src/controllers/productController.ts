import { Request, Response } from "express"
import productModel from "../database/productModel"

const ProductsController = {

    async getAllProducts(req:Request, res:Response): Promise<Response>{

        let products = await productModel.find()
        return res.json(products)
    },

    async getOneProduct(req:Request, res:Response): Promise<Response>{
        const {id} = req.params
        let product = await productModel.findById(id)
        return res.json(product)
    },

    async createProduct(req:Request, res:Response): Promise<Response>{
        const { productName, value, amountSales, productCode, description} = req.body

        let product = await productModel.create(req.body)
        return res.json(product)
    },

    async updateProduct(req:Request, res:Response): Promise<Response>{
        const {id} = req.params
        
        const { productName, value, amountSales, productCode, description} = req.body

        let product = await productModel.findByIdAndUpdate(id, {
            productName:productName,
            value:value, 
            amountSales:amountSales, 
            productCode:productCode, 
            description:description
        })
        return res.json(product)
    },

    async deleteProduct(req:Request, res:Response): Promise<Response>{
        const {id} = req.params
        let product = await productModel.findByIdAndDelete(id)
        return res.json(product)
    },
}

export default ProductsController