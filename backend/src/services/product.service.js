import ProductRepository from '../repositories/product.repository';

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  createProduct = product => {
    if (!product.nombre || !product.precio_venta) {
      throw new Error('El nombre y el precio de venta son obligatorios');
    }

    if (!product.stock) product.stock = 0;

    return this.productRepository.createProduct(product);
  };
}

export default ProductService;
