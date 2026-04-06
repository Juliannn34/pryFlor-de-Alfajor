function renderizarProductos(arregloProductos, refContenedor) {
    let html = ""

    arregloProductos.forEach((producto) => {
        const plantilla = `
            <article class="producto-card">
                <a href="productos.html">
                    <img src="${producto.imagen}" alt="${producto.nombre}">

                    <h3 class="nombre">${producto.nombre}</h3>
                    <p class="precio">$ ${producto.precio}</p>
                    <p class="stock">Stock: ${producto.stock}</p>

                    <button>AÑADIR AL CARRITO</button>
                </a>
            </article>
        `

        html += plantilla

    });

    refContenedor.innerHTML = html

}

export { renderizarProductos }