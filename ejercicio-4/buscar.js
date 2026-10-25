const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];

let buscado = "Monitor"
let posicion = -1
for (let i = 0; i < productos.length; i++) {
    if (buscado === productos[i]) {
        posicion = i
    }
}
console.log(`${buscado} esta en la posición ${posicion}. Precio: ${precios[posicion].toFixed(2)} €. Stock: ${stock[posicion]}`)