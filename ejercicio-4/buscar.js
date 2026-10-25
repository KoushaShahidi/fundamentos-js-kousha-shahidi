const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];

let buscado = "MONITOR"
let posicion = -1
for (let i = 0; i < productos.length; i++) {
    if (buscado.toLowerCase() === productos[i].toLowerCase()) {
        posicion = i
    }
}

if (posicion === -1) {
    console.log(`Posición: ${posicion}. ${buscado} no exsite en catálogo`)
} else {
    console.log(`${buscado} esta en la posición ${posicion}. Precio: ${precios[posicion].toFixed(2)} €. Stock: ${stock[posicion]}`)
}



