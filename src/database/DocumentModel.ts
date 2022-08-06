import { Schema } from 'mongoose'
import mongoose from 'mongoose'

const DocumentModel = new Schema({
    name: String,
    date: String,
    link: String,
    type: String
},
{timestamps: true})

export default mongoose.model('Document', DocumentModel)