const productos = [
    {
        nombre: "Magistral Ultra",
        precio: 3000,
        imagen: "images/magistral-ultra.jpg",
categoria:"limpieza",
stock: true
    },
    {
        nombre: "Magistral Repuesto 450 ml",
        precio: 2500,
        imagen: "images/magistral-repuesto-450ml.jpg",
categoria: "limpieza",
stock: true
    },
    {
        nombre: "Colgate Triple Acción",
        precio: 3000,
        imagen: "images/colgate-triple-accion.jpg",
categoria:"higiene",
stock: true
    },
    {
        nombre: "Colgate Original 180g",
        precio: 3000,
        imagen: "images/colgate-original-180g.jpg",
categoria:"higiene",
stock: true
    },
    {
        nombre: "Dove Original",
        precio: 1500,
        imagen: "images/dove-original.jpg",
categoria:"higiene",
stock: true
    },
    {
        nombre: "Axe Desodorante Apolo",
        precio: 4000,
        imagen: "images/axe-desodorante-apolo.jpg",
categoria:"higiene",
stock: true
    },
    {
        nombre: "Axe Desodorante Black",
        precio: 4000,
        imagen: "images/axe-desodorante-black.jpg",
categoria:"higiene",
stock: true
    },
    {
        nombre: "Babysec Toallitas 50",
        precio: 2000,
        imagen: "images/babysec-toallitas-50.jpg",
categoria:"papeles",
stock: true
    },
    {
        nombre: "Fideos Molto Largos",
        precio: 850,
        imagen: "images/fideos-molto-largos.jpg",
categoria: "almacen",
stock: true
    },
    {
        nombre: "Morenita Saquitos",
        precio: 4000,
        imagen: "images/Caffe-morenita-saquitos.jpg",
categoria: "almacen",
stock: true
    },
    {
        nombre: "Rexona Odorono 60g",
        precio: 2000,
        imagen: "images/rexona-odorono-60gr.jpg",
categoria:"higiene",
stock: true
    },
    {
        nombre: "Pitusas Black",
        precio: 1000,
        imagen: "images/ Pitusas-black.webp",
categoria: "almacen",
stock: true
    },
    {
        nombre: "Alcohol Duplex",
        precio: 2000,
        imagen: "images/Alcohol-duplex.jpeg",
categoria:"higiene",
stock: true
    },
    {
        nombre: "Arroz Molto Largo Fino",
        precio: 1300,
        imagen: "images/Arroz-molto-largo-fino.jpg",
categoria: "almacen",
stock: true
    },
    {
        nombre: "Cif 500 ml",
        precio: 2500,
        imagen: "images/Cif-500-ml.jpeg",
categoria: "limpieza",
stock: true
    },
    {
        nombre: "Dove Invisible Care",
        precio: 4000,
        imagen: "images/Dave-invicible-care.webp",
categoria:"higiene",
stock: true
    },
    {
        nombre: "Esponjas Virulana",
        precio: 1000,
        imagen: "images/Espojas-virulana.jpg",
categoria: "limpieza",
stock: true
    },
    {
        nombre: "Jabón en Polvo 800g",
        precio: 2800,
        imagen: "images/Jabon-en-polvo-800g.webp",
categoria: "limpieza",
stock: true

    },
    {
        nombre: "Jabón Qué Linda",
        precio: 1500,
        imagen: "images/Jabon-que-linda.webp",
categoria:"higiene",
stock: true
    },
    {
        nombre: "Mini Coronitas",
        precio: 1000,
        imagen: "images/Mini-coronitas-.webp",
categoria: "almacen",
stock: true
    },
    {
        nombre: "Mini Pitusas Frutilla",
        precio: 1000,
        imagen: "images/Mini-pitusas-frutilla.webp",
categoria: "almacen",
stock: true
    },
    {
        nombre: "Neosol Dulces Pack de 3",
        precio: 1500,
        imagen: "images/Neosol-dulces-pack-de-3.jpeg",
categoria: "almacen",
stock: true
    },
    {
        nombre: "Nocturna Suave 16",
        precio: 4500,
        imagen: "images/Nocturna-suave-16.jpg",
categoria:"higiene",
stock: true
    },
    {
        nombre: "Plusbelle Frescura",
        precio: 1000,
        imagen: "images/Plusbelle-frescura.jpg",
categoria:"higiene",
stock: true
    },
    {
        nombre: "Rexona Antibac Dama",
        precio: 3000,
        imagen: "images/Reaxona-antibac-dama.webp",
categoria:"higiene",
stock: true
    },
    {
        nombre: "Rexona Control Inteligente",
        precio: 3000,
        imagen: "images/Reaxona-control-inteligente.webp",
categoria:"higiene",
stock: true
    },
    {
        nombre: "Surtido Bagley",
        precio: 2500,
        imagen: "images/Surtido-bagley.jpeg",
categoria: "almacen",
stock: true
    },
    {
        nombre: "esponjas de acero",
        precio: 1000,
        imagen: "images/Virulana.webp",
categoria: "limpieza",
stock: true
    },
    {
        nombre: "Yerba Canarias 1kg",
        precio: 12000,
        imagen: "images/Yerba-canarias-1kg.jpg",
categoria: "almacen",
stock: true
    },
    {
        nombre: "Yerba Mañanita 500ml",
        precio: 1800,
        imagen: "images/Yerba-mañanita-500ml.jpg",
categoria: "almacen",
stock: true
    },
    {
        nombre: "Esencial Limón",
        precio: 1000,
        imagen: "images/esencial-limon.png",
categoria: "limpieza",
stock: true
    },
    {
        nombre: "Jabón de Tocador Plusbelle Frescura 90g",
        precio: 1000,
        imagen: "images/jabon-de-toc-plusbelle-frescura.jpg",
categoria:"higiene",
stock: true
    }
];

// Elementos de la página
const contenedor = document.getElementById('contenedor-productos');
const buscador = document.getElementById('buscador');

// Función para dibujar los productos en pantalla
function mostrarProductos(lista) {
    contenedor.innerHTML = ""; 
    
    if (lista.length === 0) {
        contenedor.innerHTML = `<p style="text-align:center; width:100%; font-size:18px; margin-top:20px; color:#666;">No se encontraron productos.</p>`;
        return;
    }

    lista.forEach(producto => {
        contenedor.innerHTML += `
            <div class="card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p class="precio">$${producto.precio}</p>
                https://wa.me/5491126162963?text=Hola,%20quiero%20comprar%20${encodeURIComponent(producto.nombre)
                <button class="carrito-btn" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">
🛒 Agregar al carrito
</button>

            </div>
        `;
    });
}

// Muestra todos los productos al cargar la web por primera vez
mostrarProductos(productos);

// Escucha lo que se escribe en la barra original de arriba
buscador.addEventListener('input', (e) => {
    const textoBusqueda = e.target.value.toLowerCase();
    
    // Filtra la lista según lo que escribiste
    const productosFiltrados = productos.filter(producto => {
        return producto.nombre.toLowerCase().includes(textoBusqueda);
    });
    
    // Vuelve a mostrar solo los productos que coinciden
    mostrarProductos(productosFiltrados);
});
function filtrarCategoria(categoria) {
    

    if (categoria === "todos") {
        mostrarProductos(productos);
        return;
    }

    const productosFiltrados = productos.filter(producto =>
        producto.categoria === categoria
    );

    mostrarProductos(productosFiltrados);
}
let carrito = [];


function verCarrito() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "🛒 Tu carrito:\n\n";
    let total = 0;

    carrito.forEach(producto => {
        mensaje += `• ${producto.nombre} - $${producto.precio}\n`;
        total += producto.precio;
    });

    mensaje += `\n💰 Total: $${total}`;

    alert(mensaje);
}
function abrirCarrito() {
    document.getElementById("panel-carrito").classList.add("abierto");
}

function cerrarCarrito() {
    document.getElementById("panel-carrito").classList.remove("abierto");
}

