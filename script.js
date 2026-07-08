const productos = [
    {
        nombre: "Magistral Ultra",
        precio: 3000,
        imagen: "images/magistral-ultra.jpg"
    },
    {
        nombre: "Magistral Repuesto 450 ml",
        precio: 2500,
        imagen: "images/magistral-repuesto-450ml.jpg"
    },
    {
        nombre: "Colgate Triple Acción",
        precio: 3000,
        imagen: "images/colgate-triple-accion.jpg"
    },
    {
        nombre: "Colgate Original 180g",
        precio: 3000,
        imagen: "images/colgate-original-180g.jpg"
    },
    {
        nombre: "Dove Original",
        precio: 1500,
        imagen: "images/dove-original.jpg"
    },
    {
        nombre: "Axe Desodorante Apolo",
        precio: 4000,
        imagen: "images/axe-desodorante-apolo.jpg"
    },
    {
        nombre: "Axe Desodorante Black",
        precio: 4000,
        imagen: "images/axe-desodorante-black.jpg"
    },
    {
        nombre: "Babysec Toallitas 50",
        precio: 2000,
        imagen: "images/babysec-toallitas-50.jpg"
    },
    {
        nombre: "Fideos Molto Largos",
        precio: 850,
        imagen: "images/fideos-molto-largos.jpg"
    },
    {
        nombre: "Morenita Saquitos",
        precio: 4000,
        imagen: "images/morenita-saquitos.jpg"
    },
    {
        nombre: "Rexona Odorono 60g",
        precio: 2000,
        imagen: "images/rexona-odorono-60gr.jpg"
    },
    {
        nombre: "Pitusas Black",
        precio: 1200,
        imagen: "images/Pitusas-black.webp"
    },
    {
        nombre: "Alcohol Duplex",
        precio: 1500,
        imagen: "images/Alcohol-duplex.jpeg"
    },
    {
        nombre: "Arroz Molto Largo Fino",
        precio: 1800,
        imagen: "images/Arroz-molto-largo-fino.jpg"
    },
    {
        nombre: "Cif 500 ml",
        precio: 2800,
        imagen: "images/Cif-500-ml.jpeg"
    },
    {
        nombre: "Dove Invisible Care",
        precio: 3500,
        imagen: "images/Dave-invisible-care.webp"
    },
    {
        nombre: "Esponjas Virulana",
        precio: 900,
        imagen: "images/Espojas-virulana.jpg"
    },
    {
        nombre: "Jabón en Polvo 800g",
        precio: 3200,
        imagen: "images/Jabon-en-polvo-800g.webp"
    },
    {
        nombre: "Jabón Qué Linda",
        precio: 1100,
        imagen: "images/Jabon-que-linda.webp"
    },
    {
        nombre: "Mini Coronitas",
        precio: 1300,
        imagen: "images/Mini-coronitas-.webp"
    },
    {
        nombre: "Mini Pitusas Frutilla",
        precio: 1200,
        imagen: "images/Mini-pitusas-frutilla.webp"
    },
    {
        nombre: "Nocsol Dulces Pack de 3",
        precio: 2000,
        imagen: "images/Noosol-dulces-pack-do-3.jpeg"
    },
    {
        nombre: "Nocturna Suave 16",
        precio: 2400,
        imagen: "images/Nocturna-suave-16.jpg"
    },
    {
        nombre: "Plusbelle Frescura",
        precio: 1700,
        imagen: "images/Plusbelle-frescura.jpg"
    },
    {
        nombre: "Rexona Antibac Dama",
        precio: 2600,
        imagen: "images/Reaxona-antibac-dama.webp"
    },
    {
        nombre: "Rexona Control Inteligente",
        precio: 2600,
        imagen: "images/Reaxona-control-inteligente.webp"
    },
    {
        nombre: "Surtido Bagley",
        precio: 2200,
        imagen: "images/Surtido-bagley.jpeg"
    },
    {
        nombre: "Virulana",
        precio: 800,
        imagen: "images/Virulana.webp"
    },
    {
        nombre: "Yerba Canarias 1kg",
        precio: 4500,
        imagen: "images/Yerba-canarias-1kg.jpg"
    },
    {
        nombre: "Yerba Mañanita 500ml",
        precio: 2100,
        imagen: "images/Yerba-mañanita-500ml.jpg"
    },
    {
        nombre: "Esencial Limón",
        precio: 1600,
        imagen: "images/esencial-limon.png"
    },
    {
        nombre: "Jabón de Tocador Plusbelle Frescura 120g",
        precio: 1000,
        imagen: "images/jabde-toc-plusbelle-frescura-vft-120gr.jpg"
    }
];

const contenedor = document.getElementById('contenedor-productos');

productos.forEach(producto => {
    contenedor.innerHTML += `
        <div class="card">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p class="precio">$${producto.precio}</p>
            <a class="whatsapp" href="https://wa.me/541125162963?text=Hola,%20quiero%20comprar%20${encodeURIComponent(producto.nombre)}">Pedir por WhatsApp</a>
        </div>
    `;
});
