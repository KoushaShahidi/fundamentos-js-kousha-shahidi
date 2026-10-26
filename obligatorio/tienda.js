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
