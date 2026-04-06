import { obtenerDatos } from "./servicios.js"
import { renderizarProductos } from "./vista.js"

const url = './datos/productos.json'
const productos = await obtenerDatos(url)
console.log(productos)

const $contenedor = document.getElementById("productos-contenedor")
renderizarProductos(productos, $contenedor)

