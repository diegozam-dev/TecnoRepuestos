import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productController = new ProductController();
const productRouter = Router();

productRouter.post('/nuevo', productController.createProduct);

export default productRouter;
