import { Request, Response } from 'express';
import DocumentModel from './DocumentModel';
const DocumentController = {
    async getAll(req:Request, res:Response): Promise<Response>{
        
        let documents = await DocumentModel.find()
        return res.json(documents)
    },

    async findById(req:Request, res:Response): Promise<Response>{
        
        const { id } = req.params
        let document = await DocumentModel.findById(id)
        return res.json(document)
    },

    async create(req:Request, res:Response): Promise<Response>{
        
        const { name, date, link, type } = req.body
        let document = await DocumentModel.create(req.body)
        return res.json(document)
    },

    async update(req:Request, res:Response): Promise<Response>{
        const { id } = req.params
        const { name, date, link, type } = req.body
        let document = await DocumentModel.findByIdAndUpdate(id, {
            name: name,
            date:date,
            link:link,
            type: type
        })
        return res.json(document)
    },

    async delete(req:Request, res:Response): Promise<Response>{
        
        const { id } = req.params
        let document = await DocumentModel.findByIdAndDelete(id)
        return res.json(document)
    }
}


export default DocumentController