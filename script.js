// --- TU LISTA DE PRODUCTOS CON SUS IMÁGENES REALES ---
const productos = [
  { 
    nombre: "Magistral Ultra", 
    precio: 2400, 
    categoria: "limpieza",
    imagen: "magistral-ultra.jpg" // Nombre exacto de tu archivo
  },
  { 
    nombre: "Colgate Triple Acción", 
    precio: 3000, 
    categoria: "higiene",
    imagen: "colgate-triple-accion.jpg" 
  },
  { 
    nombre: "Axe Desodorante Apolo", 
    precio: 2100, 
    categoria: "higiene",
    imagen: "axe-desodorante-apolo.jpg" 
  },
  { 
    nombre: "Axe Desodorante Black", 
    precio: 2100, 
    categoria: "higiene",
    imagen: "axe-desodorante-black.jpg" 
  },
  { 
    nombre: "Dove Original", 
    precio: 2500, 
    categoria: "higiene",
    imagen: "dove-original.jpg" 
  },
  { 
    nombre: "Tostada Manieri 200g", 
    precio: 1200, 
    categoria: "almacen",
    imagen: "tostada-manieri-200gr-mesa.jpg" 
  },
  { 
    nombre: "Café La Morenita Saquitos", 
    precio: 1800, 
    categoria: "almacen",
    imagen: "morenita-saquitos-400×400.jpg" 
  }
];

// --- LÓGICA PARA DIBUJAR LAS TARJETAS ---
const contenedor = document.getElementById('contenedor-productos');

function cargarProductos() {
  if (!contenedor) return;
  contenedor.innerHTML = "";

  productos.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'card';

    // Mensaje automático para tu WhatsApp
    const mensajeWhatsapp = encodeURIComponent(`Hola El Puestito, quiero comprar: ${producto.nombre} - $${producto.precio}`);

    // Modificamos el diseño para agregar la etiqueta de imagen <img> arriba del título
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
      <h3>${producto.nombre}</h3>
      <p class="precio">$${producto.precio}</p>
      <a class="whatsapp" href="https://wa.me/541126162963?text=${mensajeWhatsapp}" target="_blank">
        Comprar
      </a>
    `;

    contenedor.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', cargarProductos);
