const producto = "Ratón";
const precio = 19.90;      // precio por unidad, sin IVA
const cantidad = 3;
const porcentajeIva = 21;

const subtotal = precio * cantidad; // 189 * 2 = 378
const Iva = subtotal * porcentajeIva / 100; // 378 * 0.21 = 79.38
const total = subtotal + Iva // 457.38

console.log(`Producto: ${producto}`)
console.log(`${cantidad} x ${precio.toFixed(2)} €`)
console.log(`Subtotal: ${subtotal.toFixed(2)} €`)
console.log(`IVA (${porcentajeIva}%): ${Iva.toFixed(2)} €`)
console.log(`TOTAL: ${total.toFixed(2)} €`)