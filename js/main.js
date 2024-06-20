
// const app = document.getElementById("app")


// app.innerHTML = `<h2> Buenas que tal </h2>
//                 <p>todo bien </p>
//                 `


// const lista = document.getElementById("lista")
// lista.innerHTML = `<li> `


// const frutas = ["Annana", "Pera", "Manzana"]

// const cargarDom = () => {

//     const titulo = document.getElementById("titulo")
//     titulo.innerHTML = "Nuevo titulo"

//     const listado = document.getElementById("listado")
//     frutas.forEach((fruta) => {

//         const elementoDeLista = document.createElement("li")
//         elementoDeLista.innerText = fruta
//         listado.append(elementoDeLista)

//     }
//     )


// }

// cargarDom()

// Swal.fire({
//     // icon: "error",
//     title: "Oops...",
//     text: "Something went wrong!",
//     footer: '<a href="#">Why do I have this issue?</a>',
//     showCloseButton: true,
//     showConfirmButton: true,
//     showCancelButton: true,
//     position: "center",
// });


let catalogo = JSON.parse(localStorage.getItem("catalogo")) || []

let prendaDelCarrito = JSON.parse(localStorage.getItem("carrito")) || []

let numeroDeProductos = JSON.parse(localStorage.getItem("numeroDelCarrito")) || 0

const mostrarNumeroDelCarrito = () => {

    if (numeroDeProductos >= 1) {

        const num = document.getElementById("pagesCarrito")
        num.innerHTML = `
                            ${numeroDeProductos}
                        `

    }

}

mostrarNumeroDelCarrito()

const crearCatalogo = document.querySelector("#crear-catalogo")

crearCatalogo.addEventListener("submit", (e) => {

    e.preventDefault()

    const id = crypto.randomUUID()
    const marca = e.target.children["marca"].value
    const tipoDePrenda = e.target.children["tipo-de-prenda"].value
    const precio = e.target.children["precio"].value
    const talle = e.target.children["talle"].value
    const producto = {id,marca,tipoDePrenda,precio,talle}
    catalogo.push(producto)
    localStorage.setItem("catalogo",JSON.stringify(catalogo))
    const contenedor = document.getElementById("app-aside")

    const nuevoDiv = document.createElement("div")
    nuevoDiv.classList = "contenedor"
    nuevoDiv.id = producto.id
    nuevoDiv.innerHTML = 
                        `
                            <h3> ${producto.tipoDePrenda} </h3> 
                            <p> Marca : ${producto.marca}</p>
                            <span> Precio : $${producto.precio}</span>
                            <span> Talle : ${producto.talle}</span>
                            <button class="btn btn-eliminar" id="eliminar">Eliminar</button>
                            <button class="btn btn-carrito" id="añadirAlCarro"><i class="bi bi-cart-plus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                          </svg></i></button>
                        `

    contenedor.append(nuevoDiv)
    crearCatalogo.reset()
    
})

const borrarCatalogo = (id) => {
    
    catalogo = catalogo.filter(prenda => prenda.id != id)
    localStorage.setItem("catalogo",JSON.stringify(catalogo))

}

const borrarCatalogoDiv = (id) => {

    const contenedor = document.getElementById(id)
    contenedor.remove()

}


const cargarCatalogo = () => {

    const contenedor = document.getElementById("app-aside")
    
    catalogo.forEach((producto) => {
        
        const nuevoDiv = document.createElement("div")
        nuevoDiv.classList = "contenedor"
        nuevoDiv.id = producto.id
        nuevoDiv.innerHTML = 
                            `
                            <h3> ${producto.tipoDePrenda} </h3> 
                            <p> Marca : ${producto.marca}</p>
                            <span> Precio : $${producto.precio}</span>
                            <span> Talle : ${producto.talle}</span>
                            <button class="btn btn-eliminar" id="eliminar">Eliminar</button>
                            <button class="btn btn-carrito" id="añadirAlCarro">Añadir al Carrito<i class="bi bi-cart-plus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg></i></button>
                            `

        contenedor.append(nuevoDiv)                           
    })

    const app = document.getElementById("app-aside")
    app.addEventListener("click", (event) =>{

        

        if (event.target && event.target.classList.contains("btn-eliminar")) {
            
            const parentElement = event.target.parentElement

            const id = parentElement.id

            borrarCatalogo(id)
            borrarCatalogoDiv(id)
            
        }

        if (event.target && event.target.classList.contains("btn-carrito")) {

            const parentElement = event.target.parentElement

            const id = parentElement.id

            const prendaElegida = catalogo.find(prenda => prenda.id === id)
            prendaDelCarrito.push(prendaElegida)
            
            localStorage.setItem("carrito",JSON.stringify(prendaDelCarrito))
            numeroDeProductos = numeroDeProductos + 1
            localStorage.setItem("numeroDelCarrito",JSON.stringify(numeroDeProductos))

            mostrarNumeroDelCarrito()

        }
    })
}

cargarCatalogo()







//Borrador//


// const cargarDomDiv = () => {

//     const titulo = document.getElementById("titulo")
//     titulo.innerHTML = "Nuevo titulo"

//     const tarjetas = document.getElementById("tarjetas")

//     cartas.forEach((carta) => {

//         const elementoDeLista = document.createElement("div")
//         elementoDeLista.classList = "contenedor"
//         elementoDeLista.innerHTML = `<h3>DATOS</h3>
//                                     <ul> 
//                                         <li> ${carta.nombre} </li>
//                                         <li> ${carta.id} </li>
//                                     </ul>
                                    
//                                     `
//         tarjetas.append(elementoDeLista)
//     })
// }

// cargarDomDiv()


