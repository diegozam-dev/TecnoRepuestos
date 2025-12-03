export const calcularTotalVenta = detalles => {
  if (!Array.isArray(detalles) || detalles.length === 0) {
    return 0;
  }

  const total = detalles.reduce(
    (acumulador, item) => acumulador + item.subtotal,
    0
  );

  return total;
};

export const validarStockSuficiente = (stockActual, cantidadSolicitada) => {
  if (cantidadSolicitada <= 0) return false;

  if (stockActual < 0) return false;

  return stockActual >= cantidadSolicitada;
};
