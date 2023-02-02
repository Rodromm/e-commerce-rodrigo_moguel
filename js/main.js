let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

    const contenedorProductos = document.querySelector("#contenedor-productos");
    const botonesCategorias = document.querySelectorAll(".boton-categoria");
    const tituloPrincipal = document.querySelector("#titulo-principal");
    let botonesAgregar = document.querySelectorAll("#numerito");

 botonesCategorias.forEach(boton => boton.addEventListener("clic", () => {
     aside.classList.remove("aside-visible");
 }))   

 function cargarProductos(productosElegidos) {
    
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(productp => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `<img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
    `;

    contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
 }

 botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLs = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLs) {
    productosEnCarrito = JSON.parse(productosEnCarritoLs);
    actualizarNumerito();
}else {
    productosEnCarrito =[];
}

function agregarAlCarrito(e) {
    toastify({
        Text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", //top or bottom
        position: "right", // left center o right
        stopOnFocus: true, //
        style: {
            background: "linear-gradient(to right, #4b33a8, #785ce9)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offSet: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onclick: function(){}// callback after click
    }).showToast();
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}










//Productos

/*const productos = [
    {
        id: "abrigo-01",
        titulo: "abrigo-01",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "abrigo-02",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "abrigo-03",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "abrigo-04",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "abrigo-05",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    //camisetas
    {
        id: "camiseta-01",
        titulo: "camiseta-01",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "camiseta-02",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "camiseta-03",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "camiseta-04",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "camiseta-05",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "camiseta-06",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "camiseta-07",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "camiseta-08",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    //pantalones
    {
        id: "pantalon-01",
        titulo: "pantalon-01",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "pantalon-02",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "pantalon-03",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "pantalon-04",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "pantalon-05",
        imagen:"../img/burro de machca receta.webp",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
];*/
