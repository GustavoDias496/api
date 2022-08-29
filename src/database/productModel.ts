import { Schema } from "mongoose";
import mongoose from "mongoose";

const ProductModel = new Schema({
    productName:String,
    value:Number,
    amountSales:Number,
    productCode:String,
    description:String,
},
{timestamps:true})


export default mongoose.model('Product', ProductModel)