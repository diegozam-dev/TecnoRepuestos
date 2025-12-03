import { Router } from 'express';
import productRouter from './product.routes';

const apiRouter = Router();

apiRouter.use('/api/productos', productRouter);

export default apiRouter;
