const importe = 75

let descuento = 0

if (importe >= 100) {
    descuento = 10
} else if (importe > 50 && importe < 100) {
    descuento = 5
} else {
    descuento = 0
}

const precioDescuento = (importe * (descuento / 100))

const subTotal = importe - (precioDescuento)
let envio = 4.95
if (subTotal >= 50) {
    envio = 0
}


const total = subTotal + envio

console.log(`Importe: ${importe.toFixed(2)} €`)
console.log(`Descuento: ${precioDescuento.toFixed(2)} €`)
console.log(`Importe con desceunto: ${subTotal.toFixed(2)} €`)
console.log(`Envio: ${envio.toFixed(2)} €`)
console.log(`Total: ${total.toFixed(2)} €`)
