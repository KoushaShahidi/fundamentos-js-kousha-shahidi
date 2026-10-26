function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad
}

function calcularIVA(importe) {
    return importe * 0.21
}

function calcularDescuento(importe) {
    let descuento = 0

    if (importe > 100) {
        descuento = 10
    } else if (importe > 50 && importe <= 100) {
        descuento = 5
    } else {
        descuento = 0
    }
    return (importe * (descuento / 100))
}

function calcularEnvio(importe) {
    let envio = 4.95
    if (importe >= 50) {
        envio = 0
    }
    return envio
}

function contarAgotados(stock) {
    let contador = 0

    for (let i = 0; i < stock.length; i++) {
        if (stock[i] === 0) {
            contador++
        }
    }
    return contador
}

function productoMasCaro(productos, precios) {
    let productoMascaro = ""
    let precioMascaro = 0

    for (let i = 0; i < precios.length; i++) {
        if (precios[i] > precioMascaro) {
            precioMascaro = precios[i]
            productoMascaro = productos[i]
        }
    }

    return productoMascaro
}

function valorInventario(precios, stock) {
    let valorTotal = 0

    for (let i = 0; i < precios.length; i++) {
        valorTotal = precios[i] * stock[i] + valorTotal

    }
    return valorTotal
}

function buscarProducto(productos, nombre) {
    let posicion = -1
    for (let i = 0; i < productos.length; i++) {
        if (nombre.toLowerCase() === productos[i].toLowerCase()) {
            posicion = i
        }
    }
    return posicion
}

// Catálogo
const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];   // sin IVA
const stock = [10, 25, 3, 0, 7];

// Pedido del cliente (también arrays paralelos)
const pedidoProductos = ["Ratón", "Monitor", "Auriculares", "Teclado", "Altavoz"];
const pedidoCantidades = [2, 4, 1, 1, 1];


for (let i = 0; i < productos.length; i++) {
    if (stock[i] === 0) {
        console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (AGOTADO)`)
    } else {
        console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (${stock[i]} uds)`)
    }
}
console.log()

let ticketProductos = []
let ticketCantidades = []
let ticketPrecios = []

console.log(`=== PROCESANDO PEDIDO ===`)
for (let i = 0; i < pedidoProductos.length; i++) {
    let nombreDelProducto = pedidoProductos[i]
    let productoPosicion = buscarProducto(productos, nombreDelProducto)
    if (productoPosicion === -1) { //producto no existe en catalogo
        console.log(`AVISO: ${nombreDelProducto} no existe en catálogo`)
    } else { //productos que existen en catalogo
        let cantidadDePedido = pedidoCantidades[i]
        let cantidadDeStock = stock[productoPosicion]
        if (cantidadDeStock === 0) { //productos agodotados
            console.log(`AVISO: ${nombreDelProducto} está agotado`)
        } else if (cantidadDePedido > cantidadDeStock) { // servir cantidad que existe
            console.log(`AVISO: solo hay ${cantidadDeStock} uds de ${nombreDelProducto}, se sirven ${cantidadDeStock}`)
            ticketProductos.push(nombreDelProducto)
            ticketPrecios.push(precios[productoPosicion])
            ticketCantidades.push(cantidadDeStock)
        } else {//cantidad suficinete ok servir
            console.log(`OK: ${cantidadDePedido} x ${nombreDelProducto}`)
            ticketProductos.push(nombreDelProducto)
            ticketPrecios.push(precios[productoPosicion])
            ticketCantidades.push(cantidadDePedido)
        }
    }
}

console.log()
let subtotal = 0
console.log(`=== TICKET ===`)
for (let i = 0; i < ticketProductos.length; i++) {
    console.log(`${ticketCantidades[i]} x ${ticketProductos[i]} (${ticketPrecios[i].toFixed(2)} €) = ${calcularImporteLinea(ticketPrecios[i], ticketCantidades[i])} €`)
    subtotal = subtotal + calcularImporteLinea(ticketPrecios[i], ticketCantidades[i])
}
const descuento = calcularDescuento(subtotal)
const baseImponible = subtotal - descuento
const iva = calcularIVA(baseImponible)
const envio = calcularEnvio(baseImponible)
const total = baseImponible + iva + envio

console.log(`Subtotal: ${subtotal.toFixed(2)} €`)
console.log(`Descuento: -${descuento.toFixed(2)} €`)
console.log(`Base imponible: ${baseImponible.toFixed(2)} €`)
console.log(`IVA (21%): ${iva.toFixed(2)} €`)
if (envio === 0) {
    console.log(`Envio: Gratis`)
} else {
    console.log(`Envio: ${envio.toFixed(2)} €`)
}
console.log(`TOTAL: ${total.toFixed(2)} €`)


