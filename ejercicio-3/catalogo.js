const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock = [10, 25, 3, 0, 7];

for (let i = 0; i < productos.length; i++) {
    if (stock[i] === 0) {
        console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (AGOTADO)`)
    } else {
        console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (${stock[i]} uds)`)
    }
}

let contador = 0

for (let i = 0; i < stock.length; i++) {
    if (stock[i] === 0) {
        contador++
    }
}
console.log()
console.log(`Productos agotados: ${contador}`)
