# Fundamentos de Programación con JavaScript

**Alumno:** Kousha Shahidi  
**Curso:** Fullstack Developer con IA  
**Módulo:** Fundamentos de Programación con JavaScript  
**Lenguaje:** JavaScript  
**Entorno de ejecución:** Node.js

## Descripción del proyecto

Este repositorio contiene cinco ejercicios preliminares y un ejercicio obligatorio desarrollados durante el módulo de fundamentos de programación con JavaScript.

El objetivo de la práctica es aplicar los conocimientos adquiridos sobre variables, operadores, condicionales, arrays, bucles y funciones.

Los cinco primeros ejercicios permiten practicar diferentes conceptos de programación, que posteriormente se utilizan para desarrollar una tienda online que funciona desde la consola.

## Estructura del repositorio

```text
fundamentos-js-kousha-shahidi/
│
├── README.md
├── IA.md
│
├── ejercicio-1/
│   └── ticket.js
│
├── ejercicio-2/
│   └── descuento-envio.js
│
├── ejercicio-3/
│   └── catalogo.js
│
├── ejercicio-4/
│   └── buscar.js
│
├── ejercicio-5/
│   └── funciones.js
│
└── obligatorio/
    └── tienda.js
```

---

## Ejercicio 1 — Ticket de un producto

### Descripción

Programa que simula la compra de varias unidades de un producto informático.

El programa calcula el subtotal, el IVA del 21 % y el importe total de la compra, mostrando los resultados en formato de ticket.

### Funcionalidades

- Calcular el subtotal según el precio y la cantidad.
- Calcular el IVA correspondiente.
- Calcular el importe total.
- Mostrar los importes con dos decimales.
- Mostrar el ticket en la consola.

### Conceptos utilizados

- Variables `const` y `let`.
- Operadores aritméticos.
- Template strings.
- `console.log()`.
- `.toFixed(2)`.

### Ejecutar desde Warp

```bash
node ejercicio-1/ticket.js
```

**Rama:** `feature/ej1-ticket`

---

## Ejercicio 2 — Descuento y envío

### Descripción

Programa que calcula el descuento y los gastos de envío de una compra según su importe.

### Funcionalidades

- Aplicar diferentes porcentajes de descuento.
- Calcular el importe después del descuento.
- Comprobar si el pedido tiene envío gratuito.
- Calcular los gastos de envío cuando corresponda.
- Mostrar el total final de la compra.

### Reglas de descuento

| Importe | Descuento |
|---|---|
| Más de 100 € | 10 % |
| Más de 50 € y hasta 100 € | 5 % |
| 50 € o menos | Sin descuento |

Los gastos de envío son de 4,95 €, excepto cuando el importe después del descuento es igual o superior a 50 €.

### Conceptos utilizados

- Variables.
- Condicionales `if`, `else if` y `else`.
- Operadores de comparación.
- Operaciones matemáticas.
- `.toFixed(2)`.
- `console.log()`.

### Ejecutar desde Warp

```bash
node ejercicio-2/descuento-envio.js
```

**Rama:** `feature/ej2-descuento-envio`

---

## Ejercicio 3 — Explorar el catálogo

### Descripción

Programa que permite recorrer y analizar el catálogo de productos de una tienda informática.

Los productos, sus precios y sus existencias se almacenan en tres arrays relacionados por sus posiciones.

### Funcionalidades

- Mostrar el listado de productos con sus precios.
- Mostrar las unidades disponibles.
- Identificar productos agotados.
- Contar cuántos productos están agotados.
- Encontrar el producto más caro.
- Calcular el valor total del inventario.

### Conceptos utilizados

- Arrays.
- Bucles `for`.
- Condicionales.
- Contadores.
- Acumuladores.
- Comparaciones.
- Acceso a elementos mediante índices.

### Ejecutar desde Warp

```bash
node ejercicio-3/catalogo.js
```

**Rama:** `feature/ej3-catalogo`

---

## Ejercicio 4 — Buscar un producto

### Descripción

Programa que permite buscar un producto dentro de un catálogo utilizando su nombre.

El programa comprueba si el producto existe y muestra la información correspondiente.

### Funcionalidades

- Buscar un producto dentro de un array.
- Identificar su posición.
- Mostrar su precio.
- Mostrar sus unidades disponibles.
- Mostrar un aviso cuando el producto no existe.

### Conceptos utilizados

- Arrays.
- Bucles `for`.
- Condicionales.
- Operadores de comparación.
- Índices.
- Búsqueda de elementos.
- `.toLowerCase()` para búsquedas sin distinguir mayúsculas y minúsculas.

### Ejecutar desde Warp

```bash
node ejercicio-4/buscar.js
```

**Rama:** `feature/ej4-buscar-producto`

---

## Ejercicio 5 — Refactorizar en funciones

### Descripción

En este ejercicio se reorganiza la lógica de los ejercicios anteriores mediante funciones reutilizables.

El objetivo es evitar repetir código y mejorar su organización.

Las funciones reciben parámetros y devuelven resultados utilizando `return`.

### Funciones desarrolladas

| Función | Descripción |
|---|---|
| `calcularImporteLinea()` | Calcula el importe de un producto según su precio y cantidad. |
| `calcularIVA()` | Calcula el IVA del 21 %. |
| `calcularDescuento()` | Calcula el descuento según el importe. |
| `calcularEnvio()` | Calcula los gastos de envío. |
| `contarAgotados()` | Cuenta los productos con stock igual a cero. |
| `productoMasCaro()` | Devuelve el nombre del producto más caro. |
| `valorInventario()` | Calcula el valor total de las existencias. |
| `buscarProducto()` | Busca un producto y devuelve su posición. |

### Funcionalidades

- Crear funciones reutilizables.
- Recibir datos mediante parámetros.
- Devolver resultados con `return`.
- Utilizar las funciones desde diferentes partes del programa.
- Comprobar su funcionamiento mediante llamadas con distintos datos.

### Conceptos utilizados

- Declaración de funciones.
- Parámetros.
- `return`.
- Variables locales.
- Arrays.
- Bucles.
- Condicionales.
- Reutilización de código.

### Ejecutar desde Warp

```bash
node ejercicio-5/funciones.js
```

**Rama:** `feature/ej5-funciones`

---

## Ejercicio 6 — Tienda online en consola

### Descripción

Desarrollo de una tienda online de productos informáticos utilizando JavaScript.

Este ejercicio integra los conocimientos adquiridos en los cinco ejercicios anteriores.

El programa procesa un pedido, comprueba la disponibilidad de los productos, calcula descuentos, IVA y envío, genera un ticket de compra y actualiza el inventario.

### Funcionalidades principales

#### 1. Mostrar catálogo

El programa muestra inicialmente los productos disponibles, incluyendo sus precios y unidades en stock.

#### 2. Procesar el pedido

El programa comprueba cada producto solicitado y gestiona las siguientes situaciones:

- Producto existente con stock suficiente.
- Producto inexistente en el catálogo.
- Producto agotado.
- Producto con stock insuficiente.

Cuando no existen suficientes unidades, el programa sirve únicamente las disponibles.

#### 3. Calcular importes

El programa calcula:

- Subtotal de los productos servidos.
- Descuento correspondiente.
- Base imponible.
- IVA del 21 %.
- Gastos de envío.
- Total final.

#### 4. Generar ticket

Se muestra un ticket con los productos servidos, cantidades, precios unitarios e importes.

También incluye el subtotal, descuento, IVA, envío y total.

#### 5. Actualizar inventario

Después de procesar el pedido, el programa descuenta las unidades servidas.

Finalmente, muestra el stock actualizado y los productos agotados.

### Funciones principales

- `buscarProducto()`
- `calcularImporteLinea()`
- `calcularDescuento()`
- `calcularIVA()`
- `calcularEnvio()`

Estas funciones permiten reutilizar la lógica desarrollada anteriormente.

### Conceptos utilizados

- Variables `const` y `let`.
- Arrays paralelos.
- Bucles `for`.
- Condicionales.
- Funciones.
- Parámetros.
- `return`.
- Operadores aritméticos y de comparación.
- `.push()`.
- `.toFixed(2)`.
- Template strings.
- `console.log()`.

### Casos que debe gestionar el programa

| Situación | Comportamiento |
|---|---|
| Producto disponible | Procesa la cantidad solicitada. |
| Producto inexistente | Muestra un aviso. |
| Producto agotado | No añade el producto al ticket. |
| Stock insuficiente | Sirve las unidades disponibles. |
| Pedido con descuento | Aplica el descuento correspondiente. |
| Envío gratuito | No añade gastos de envío. |
| Envío de pago | Añade 4,95 €. |
| Pedido finalizado | Muestra el inventario actualizado. |

### Ejecutar desde Warp

```bash
node obligatorio/tienda.js
```

**Rama:** `feature/tienda`

---

## Ejecución de los ejercicios

Para ejecutar los programas es necesario tener instalado Node.js.

Los ejercicios se pueden ejecutar desde Warp, situándose en la carpeta principal del repositorio.

| Ejercicio | Comando |
|---|---|
| 1 — Ticket | `node ejercicio-1/ticket.js` |
| 2 — Descuento | `node ejercicio-2/descuento-envio.js` |
| 3 — Catálogo | `node ejercicio-3/catalogo.js` |
| 4 — Búsqueda | `node ejercicio-4/buscar.js` |
| 5 — Funciones | `node ejercicio-5/funciones.js` |
| 6 — Tienda online | `node obligatorio/tienda.js` |

Todos los resultados se muestran directamente en la terminal.

---

## Git y GitHub

Cada ejercicio se desarrolla en su propia rama de Git.

El flujo de trabajo consiste en crear una rama, desarrollar el ejercicio, realizar commits descriptivos, subir los cambios a GitHub y crear una Pull Request para integrarlos en `main`.

La práctica exige un mínimo de tres commits por ejercicio preliminar y seis commits para el ejercicio obligatorio.

## Uso de inteligencia artificial

Durante la práctica se ha utilizado ChatGPT como herramienta de apoyo al aprendizaje.

La ayuda recibida incluye explicaciones de los enunciados, orientación mediante pseudocódigo, revisión de errores y apoyo en la documentación del proyecto.

Las consultas realizadas y el uso de las respuestas están registrados en `IA.md`.

## Objetivo final

Consolidar los conocimientos fundamentales de JavaScript mediante ejercicios prácticos y desarrollar un programa de tienda online que combine variables, arrays, bucles, condicionales y funciones.

El proyecto permite practicar tanto la lógica de programación como la organización del código y el uso de Git y GitHub.