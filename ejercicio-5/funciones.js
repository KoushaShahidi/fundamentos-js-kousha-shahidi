
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
    return descuento
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

    for (let i = 0; i < precios.length; i++) {
        if (precios[i] > precioMascaro) {
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
    return valorTotal.toFixed(2)
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



//eje-1
const producto = "Monitor";
const precio = 189;      // precio por unidad, sin IVA
const cantidad = 2;
const porcentajeIva = 21;

const subtotal = calcularImporteLinea(precio, cantidad)
const Iva = calcularIVA(subtotal)
const total = subtotal + Iva

console.log(`Producto: ${producto}`)
console.log(`${cantidad} x ${precio.toFixed(2)} €`)
console.log(`Subtotal: ${subtotal.toFixed(2)} €`)
console.log(`IVA (${porcentajeIva}%): ${Iva.toFixed(2)} €`)
console.log(`TOTAL: ${total.toFixed(2)} €`)