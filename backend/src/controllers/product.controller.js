import ProductService from '../services/product.service';

class ProductController {
  constructor() {
    this.productService = new ProductService();
  }

  createProduct = (req, res) => {
    const { product } = req.body;

    try {
      const createdProduct = this.productService.createProduct(product);

      res.status(201).json({
        statusCode: 201,
        mensaje: 'Producto creado exitosamente',
        producto: createdProduct
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  };
}

export default ProductController;
