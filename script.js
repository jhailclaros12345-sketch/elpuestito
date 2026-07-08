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
  }
];

const contenedor = document.getElementById("contenedor-productos");

productos.forEach(producto => {
  contenedor.innerHTML += `
    <div class="card">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p class="precio">$${producto.precio}</p>
      <a class="whatsapp" href="https://wa.me/541126162963?text=Hola,%20quiero%20comprar%20${encodeURIComponent(producto.nombre)}" target="_blank">
        Pedir por WhatsApp
      </a>
    </div>
  `;
});
