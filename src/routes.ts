import { Router } from 'express'
import DocumentController from './database/DocumentController'

const router = Router()

router.get('/documents', DocumentController.getAll)
router.get('/documents/:id', DocumentController.findById)
router.post('/documents', DocumentController.create)
router.put('/documents/:id', DocumentController.update)
router.delete('/documents/:id', DocumentController.delete)

export default router