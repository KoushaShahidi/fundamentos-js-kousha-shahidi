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