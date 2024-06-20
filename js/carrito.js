

let prendaDelCarrito = JSON.parse(localStorage.getItem("carrito")) || []

let numeroDeProductos = JSON.parse(localStorage.getItem("numeroDelCarrito")) || 0

let total = JSON.parse(localStorage.getItem("totalPagar")) || 0



const mostrarNumeroDelCarrito = () => {

    const num = document.getElementById("pagesCarrito")

    if (numeroDeProductos >= 1) {

        num.innerHTML = `
                            ${numeroDeProductos}
                        `

    } else {

        num.innerHTML = ``

    }



}

mostrarNumeroDelCarrito()

const sumarTotal = (precioDelProducto) => {

    total = total + precioDelProducto
    localStorage.setItem("totalPagar", JSON.stringify(total))

}

const restarTotal = (precioDelProducto) => {

    total = total - precioDelProducto
    localStorage.setItem("totalPagar", JSON.stringify(total))

}


const borrarCarrito = (id) => {

    prendaDelCarrito = prendaDelCarrito.filter(prenda => prenda.id != id)
    localStorage.setItem("carrito", JSON.stringify(prendaDelCarrito))

}

const borrarCarritoDiv = (id) => {

    const contenedor = document.getElementById(id)
    contenedor.remove()


}

const cargarPrecioTotal = () => {

    const contenedorDelTotal = document.getElementById("app-aside")
    contenedorDelTotal.classList = "total"
    contenedorDelTotal.innerHTML = `
                                <h3> Total: ${total} </h3> 
                                `

}

const cargarCarrito = () => {

    const contenedor = document.getElementById("app")



    if (prendaDelCarrito == 0) {

        const nuevoDiv = document.createElement("div")
        nuevoDiv.classList = "contenedorCarrito"
        nuevoDiv.innerHTML =
            `
                            <h3>No se ah agregado nada al carrito</h3>
                            
                            `

        contenedor.append(nuevoDiv)

    } else {

        total = 0

        prendaDelCarrito.forEach((producto) => {

            const nuevoDiv = document.createElement("div")
            nuevoDiv.classList = "contenedorCarrito"
            nuevoDiv.id = producto.id
            nuevoDiv.innerHTML =
                `
                                <h3> ${producto.marca} </h3> 
                                <h2> ${producto.tipoDePrenda} </h2> 
                                <span> Talle : ${producto.talle}</span>
                                <span> Precio : $ ${producto.precio}</span>
                                <button type="button" class="btn btn-eliminar" id="eliminiarDelCarro">Eliminar</button>
                                `

            contenedor.append(nuevoDiv)


            let precioDelProducto = parseFloat(producto.precio)

            sumarTotal(precioDelProducto)


        })


        cargarPrecioTotal()

    }

    if (numeroDeProductos === 0) {

        total = 0
        localStorage.setItem("totalPagar", JSON.stringify(total))

    }

    const app = document.getElementById("app")
    app.addEventListener("click", (event) => {

        if (event.target && event.target.classList.contains("btn-eliminar")) {

            const parentElement = event.target.parentElement

            const id = parentElement.id
            const precio = parseFloat(parentElement.precio)

            console.log(precio)
            borrarCarrito(id)
            borrarCarritoDiv(id)

            numeroDeProductos = numeroDeProductos - 1
            localStorage.setItem("numeroDelCarrito", JSON.stringify(numeroDeProductos))

            mostrarNumeroDelCarrito()

        }
    })


}



cargarCarrito()