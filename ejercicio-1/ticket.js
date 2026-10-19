const producto = "Monitor";
const precio = 189;      // precio por unidad, sin IVA
const cantidad = 2;
const porcentajeIva = 21;

const subtotal = precio * cantidad; // 189 * 2 = 378
const Iva = subtotal * porcentajeIva / 100; // 378 * 0.21 = 79.38
const total = subtotal + Iva // 457.38

