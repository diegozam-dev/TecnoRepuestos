import { productsDb } from '../../db/products.db';

class ProductRepository {
  createProduct = product => {
    const newProduct = {
      id: Date.now(),
      ...product
    };

    productsDb.push(newProduct);

    return newProduct;
  };
}

export default ProductRepository;
