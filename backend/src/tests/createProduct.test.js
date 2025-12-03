import request from 'supertest';
import app from '../app';

describe('POST /api/productos/nuevo', () => {
  test('Debe crear un producto exitosamente si recibe los datos necesarios.', async () => {
    const datosDeEntrada = {
      product: {
        nombre: 'Mouse Óptico',
        descripcion: 'Mouse USB negro',
        precio_compra: 5.0,
        precio_venta: 12.0,
        proveedor_id: 1
      }
    };

    const response = await request(app)
      .post('/api/productos/nuevo')
      .send(datosDeEntrada)
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(201);
  });

  test('Debe devolver error 400 si faltan datos obligatorios', async () => {
    const datosInvalidos = {
      product: {
        nombre: '',
        precio_venta: 12.0
      }
    };

    const response = await request(app)
      .post('/api/productos/nuevo')
      .send(datosInvalidos);

    expect(response.statusCode).toBe(400);
  });
});
