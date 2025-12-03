import { calcularTotalVenta, validarStockSuficiente } from '../ventas.utils.js';

describe('Pruebas para Utilidades de Ventas', () => {
  describe('Función: calcularTotalVenta', () => {
    test('Debe calcular correctamente el total de una lista de productos', () => {
      const detalles = [{ subtotal: 16.5 }, { subtotal: 5 }];
      expect(calcularTotalVenta(detalles)).toBe(21.5);
    });

    test('Debe devolver 0 si el array de detalles está vacío', () => {
      expect(calcularTotalVenta([])).toBe(0);
    });
  });

  describe('Función: validarStockSuficiente', () => {
    test('Debe retornar TRUE si el stock es mayor a la cantidad solicitada', () => {
      expect(validarStockSuficiente(100, 10)).toBe(true);
    });

    test('Debe retornar FALSE si el stock es insuficiente', () => {
      expect(validarStockSuficiente(10, 15)).toBe(false);
    });
  });
});
