import { Router } from 'express'
import ProductController from './controllers/productController'

const router = Router()


router.get('/products', ProductController.getAllProducts)
router.get('/products/:id', ProductController.getOneProduct)
router.post('/products', ProductController.createProduct)
router.put('/products/:id', ProductController.updateProduct)
router.delete('/products/:id', ProductController.deleteProduct)

export default router