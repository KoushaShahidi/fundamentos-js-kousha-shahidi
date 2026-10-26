
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



// //eje-1
// const producto = "Monitor";
// const precio = 189;      // precio por unidad, sin IVA
// const cantidad = 2;
// const porcentajeIva = 21;

// const subtotal = calcularImporteLinea(precio, cantidad)
// const Iva = calcularIVA(subtotal)
// const total = subtotal + Iva

// console.log(`Producto: ${producto}`)
// console.log(`${cantidad} x ${precio.toFixed(2)} €`)
// console.log(`Subtotal: ${subtotal.toFixed(2)} €`)
// console.log(`IVA (${porcentajeIva}%): ${Iva.toFixed(2)} €`)
// console.log(`TOTAL: ${total.toFixed(2)} €`)
// console.log()




// //eje-2
// const importe = 49.90
// let descuento = calcularDescuento(importe)

// const subTotal = importe - (descuento)
// let envio = calcularEnvio(subTotal)

// const totalConEnvio = subTotal + envio

// console.log(`Importe: ${importe.toFixed(2)} €`)
// console.log(`Descuento: ${descuento.toFixed(2)} €`)
// console.log(`Importe con desceunto: ${subTotal.toFixed(2)} €`)
// if (envio === 0) {
//     console.log(`Envio: Gratis`)
// } else {
//     console.log(`Envio: ${envio.toFixed(2)} €`)
// }
// console.log(`Total: ${totalConEnvio.toFixed(2)} €`)
// console.log()




// // eje-3
// // const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
// // const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
// // const stock = [10, 25, 3, 0, 7];

// // for (let i = 0; i < productos.length; i++) {
// //     if (stock[i] === 0) {
// //         console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (AGOTADO)`)
// //     } else {
// //         console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (${stock[i]} uds)`)
// //     }
// // }

// // let contadorDeAgotados = contarAgotados(stock)
// // console.log(`Productos agotados: ${contadorDeAgotados}`)

// // let productomascaro = productoMasCaro(productos, precios)
// // console.log(`Producto más caro: ${productomascaro}`)


// // let valorTotal = valorInventario(precios, stock)
// // console.log(`Valor de inventario: ${valorTotal.toFixed(2)} €`)
// // console.log()


// //eje-4
// let buscado = "Altavoz"
// let posicion = buscarProducto(productos, buscado)
// if (posicion === -1) {
//     console.log(`Posición: ${posicion}. ${buscado} no exsite en catálogo`)
// } else {
//     console.log(`${buscado} esta en la posición ${posicion}. Precio: ${precios[posicion].toFixed(2)} €. Stock: ${stock[posicion]}`)
// }


const resultadoImporteLinea = calcularImporteLinea(189, 2)
const resultadoImporteLinea2 = calcularImporteLinea(45.99, 10)
console.log(resultadoImporteLinea.toFixed(2))
console.log(resultadoImporteLinea2.toFixed(2))
console.log()

const resultadoIVA = calcularIVA(378)
const resultadoIVA2 = calcularIVA(189)
console.log(resultadoIVA.toFixed(2))
console.log(resultadoIVA2.toFixed(2))
console.log()

const resultadoDescuento = calcularDescuento(120)
const resultadoDescuento2 = calcularDescuento(59.95)
console.log(resultadoDescuento.toFixed(2))
console.log(resultadoDescuento2.toFixed(2))
console.log()

const resultadoEnvio = calcularEnvio(49.40)
const resultadoEnvio2 = calcularEnvio(59.95)
console.log(resultadoEnvio)
console.log(resultadoEnvio2)
console.log()


const stock = [10, 25, 3, 0, 7];
const stock2 = [3, 0, 7, 0, 0];
const resultadoAgotados = contarAgotados(stock)
const resultadoAgotados2 = contarAgotados(stock2)
console.log(resultadoAgotados)
console.log(resultadoAgotados2)
console.log()

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const resultadoMasCaro = productoMasCaro(productos, precios)
console.log(resultadoMasCaro)

const productos2 = ["Impresora", "Disco duro", "Tablet", "Router", "Altavoces"];
const precios2 = [129.99, 74.50, 249.90, 59.95, 39.99];
const resultadoMasCaro2 = productoMasCaro(productos2, precios2)
console.log(resultadoMasCaro2)
console.log()


const resultadoValorInvertido = valorInventario(precios, stock)
console.log(resultadoValorInvertido)
const resultadoValorInvertido2 = valorInventario(precios2, stock2)//aqui usa a stok2 linea 182
console.log(resultadoValorInvertido2)
console.log()

//buscar en array lista de producto linea 189
const resultadoBuscarProducto = buscarProducto(productos, "altavoz")
console.log(resultadoBuscarProducto)
const resultadoBuscarProducto2 = buscarProducto(productos, "pendrive")
console.log(resultadoBuscarProducto2)