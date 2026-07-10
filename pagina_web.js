// ============================================================
// DATOS DE PRODUCTOS
// ============================================================
const productos = [{
    nombre: "Torta Chocolate",
    precio: 50,
    categoria: "torta",
    img: "../img/torta_choco.jpg",
    desc: "Bizcocho húmedo de cacao intenso con relleno de ganache de chocolate belga y cobertura de buttercream artesanal.",
    porciones: "10 – 12",
    peso: "1.8 kg",
    diametro: "25 cm",
    anticipacion: "24h",
    ingredientes: ["Cacao premium", "Chocolate belga", "Mantequilla", "Huevos frescos"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos", "🥚 Huevo"],
    rating: "4.9",
    reviews: 128,
    badge: "⭐ Popular",
    requierePersonalizacion: true,
    precioMayor: 42,
    minMayor: 5,
    destacado: true
}, {
    nombre: "Torta Fresa",
    precio: 55,
    categoria: "torta",
    img: "../img/torta_fresa.jpg",
    desc: "Bizcocho esponjoso de vainilla con relleno de crema chantilly y fresas frescas de temporada.",
    porciones: "10 – 12",
    peso: "1.9 kg",
    diametro: "25 cm",
    anticipacion: "24h",
    ingredientes: ["Fresas frescas", "Crema chantilly", "Vainilla natural", "Huevos frescos"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos", "🥚 Huevo"],
    rating: "4.8",
    reviews: 95,
    badge: "🍓 Favorito",
    requierePersonalizacion: true,
    precioMayor: 47,
    minMayor: 5,
    destacado: true
}, {
    nombre: "Cheesecake Oreo",
    precio: 45,
    categoria: "cheesecake",
    img: "../img/cheesecake_oreo.jpg",
    desc: "Base crocante de galleta Oreo con suave relleno de queso crema y cobertura de crema batida.",
    porciones: "8 – 10",
    peso: "1.2 kg",
    diametro: "22 cm",
    anticipacion: "12h",
    ingredientes: ["Queso crema", "Galleta Oreo", "Crema de leche", "Azúcar glass"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos"],
    rating: "4.9",
    reviews: 74,
    requierePersonalizacion: true,
    precioMayor: 38,
    minMayor: 5,
    destacado: true
}, {
    nombre: "Cheesecake Frutos",
    precio: 48,
    categoria: "cheesecake",
    img: "../img/cheescake.jpg",
    desc: "Cheesecake cremoso con base de galleta y cubierto con salsa de frutos rojos naturales.",
    porciones: "8 – 10",
    peso: "1.3 kg",
    diametro: "22 cm",
    anticipacion: "12h",
    ingredientes: ["Queso crema", "Frutos rojos", "Frambuesas", "Galleta base"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos"],
    rating: "4.7",
    reviews: 61,
    badge: "🫐 Frutos rojos",
    requierePersonalizacion: true,
    precioMayor: 41,
    minMayor: 5,
    destacado: true
}, {
    nombre: "Galletas Chips",
    precio: 20,
    categoria: "galleta",
    img: "../img/galletas.jpg",
    desc: "Galletas crocantes por fuera, suaves por dentro, con generosas pepitas de chocolate. Pack de 12.",
    porciones: "12 unid.",
    peso: "300 g",
    diametro: "7 cm",
    anticipacion: "Mismo día",
    ingredientes: ["Harina integral", "Chips de chocolate", "Mantequilla", "Azúcar morena"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos", "🥚 Huevo"],
    rating: "4.8",
    reviews: 210,
    badge: "🍪 Clásico",
    requierePersonalizacion: false,
    precioMayor: 16,
    minMayor: 10,
    destacado: true
}, {
    nombre: "Brownies",
    precio: 25,
    categoria: "cupcake",
    img: "../img/brownie.jpg",
    desc: "Brownies de chocolate intenso, crujientes por fuera y fondants por dentro. Pack de 6.",
    porciones: "6 unid.",
    peso: "400 g",
    diametro: "5×5 cm",
    anticipacion: "Mismo día",
    ingredientes: ["Cacao 70%", "Chocolate cobertura", "Mantequilla", "Nueces opcionales"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos", "🥚 Huevo"],
    rating: "5.0",
    reviews: 183,
    badge: "🏆 N°1",
    requierePersonalizacion: false,
    precioMayor: 20,
    minMayor: 10,
    destacado: true
}, {
    nombre: "Torta Vainilla",
    precio: 48,
    categoria: "torta",
    img: "../img/torta_vainilla.jpg",
    desc: "Bizcocho suave de vainilla con relleno de crema pastelera y frutas confitadas.",
    porciones: "10 – 12",
    peso: "1.7 kg",
    diametro: "24 cm",
    anticipacion: "24h",
    ingredientes: ["Vainilla de Madagascar", "Crema pastelera", "Frutas confitadas", "Huevos frescos"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos", "🥚 Huevo"],
    rating: "4.7",
    reviews: 78,
    badge: "🌸 Clásica",
    requierePersonalizacion: true,
    precioMayor: 40,
    minMayor: 5,
    destacado: false
}, {
    nombre: "Torta 3 Leches",
    precio: 60,
    categoria: "torta",
    img: "../img/torta_3leches.jpg",
    desc: "Bizcocho empapado en tres leches, con cobertura de merengue y toque de canela.",
    porciones: "12 – 14",
    peso: "2.0 kg",
    diametro: "26 cm",
    anticipacion: "24h",
    ingredientes: ["Leche condensada", "Leche evaporada", "Crema de leche", "Merengue"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos", "🥚 Huevo"],
    rating: "4.9",
    reviews: 156,
    badge: "🥇 N°1",
    requierePersonalizacion: true,
    precioMayor: 50,
    minMayor: 5,
    destacado: false
}, {
    nombre: "Cheesecake Maracuyá",
    precio: 50,
    categoria: "cheesecake",
    img: "../img/cheesecake_maracuya.jpg",
    desc: "Cheesecake refrescante con salsa de maracuyá y toque de limón en la base.",
    porciones: "8 – 10",
    peso: "1.2 kg",
    diametro: "22 cm",
    anticipacion: "12h",
    ingredientes: ["Queso crema", "Maracuyá fresco", "Limón", "Galleta base"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos"],
    rating: "4.8",
    reviews: 53,
    badge: "🥭 Tropical",
    requierePersonalizacion: true,
    precioMayor: 42,
    minMayor: 5,
    destacado: false
}, {
    nombre: "Cheesecake Chocolate",
    precio: 52,
    categoria: "cheesecake",
    img: "../img/cheesecake_chocolate.jpg",
    desc: "Cheesecake de chocolate belga con base de galleta y ganache de cobertura.",
    porciones: "8 – 10",
    peso: "1.3 kg",
    diametro: "22 cm",
    anticipacion: "12h",
    ingredientes: ["Queso crema", "Chocolate belga", "Crema de leche", "Galleta base"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos"],
    rating: "4.9",
    reviews: 89,
    badge: "🍫 Chocolate",
    requierePersonalizacion: true,
    precioMayor: 44,
    minMayor: 5,
    destacado: false
}, {
    nombre: "Galletas Avena",
    precio: 22,
    categoria: "galleta",
    img: "../img/galletas_avena.jpg",
    desc: "Galletas nutritivas de avena con pasas y nueces. Pack de 12.",
    porciones: "12 unid.",
    peso: "320 g",
    diametro: "7 cm",
    anticipacion: "Mismo día",
    ingredientes: ["Avena integral", "Pasas", "Nueces", "Miel"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos", "🥚 Huevo", "🌰 Nueces"],
    rating: "4.7",
    reviews: 156,
    badge: "🌾 Saludable",
    requierePersonalizacion: false,
    precioMayor: 18,
    minMayor: 10,
    destacado: false
}, {
    nombre: "Galletas Vainilla",
    precio: 18,
    categoria: "galleta",
    img: "../img/galletas_vainilla.jpg",
    desc: "Galletas suaves de vainilla con chispas de chocolate blanco. Pack de 12.",
    porciones: "12 unid.",
    peso: "280 g",
    diametro: "6 cm",
    anticipacion: "Mismo día",
    ingredientes: ["Vainilla natural", "Chocolate blanco", "Mantequilla", "Azúcar"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos", "🥚 Huevo"],
    rating: "4.8",
    reviews: 134,
    badge: "✨ Delicadas",
    requierePersonalizacion: false,
    precioMayor: 14,
    minMayor: 10,
    destacado: false
}, {
    nombre: "Cupcakes Vainilla",
    precio: 30,
    categoria: "cupcake",
    img: "../img/cook.jpg",
    desc: "Cupcakes esponjosos de vainilla con frosting de buttercream decorado a mano. Pack de 6.",
    porciones: "6 unid.",
    peso: "350 g",
    diametro: "6 cm",
    anticipacion: "24h",
    ingredientes: ["Vainilla natural", "Mantequilla premium", "Queso crema", "Colorantes naturales"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos", "🥚 Huevo"],
    rating: "4.9",
    reviews: 147,
    badge: "🎉 Eventos",
    requierePersonalizacion: false,
    precioMayor: 25,
    minMayor: 6,
    destacado: false
}, {
    nombre: "Rollos Canela",
    precio: 32,
    categoria: "cupcake",
    img: "../img/cinnamol.jpg",
    desc: "Rollos de canela esponjosos glaseados con crema de queso tibia. Pack de 4.",
    porciones: "4 unid.",
    peso: "500 g",
    diametro: "9 cm",
    anticipacion: "Mismo día",
    ingredientes: ["Canela de Ceilán", "Azúcar morena", "Queso crema", "Mantequilla"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos", "🥚 Huevo"],
    rating: "4.8",
    reviews: 92,
    requierePersonalizacion: false,
    precioMayor: 27,
    minMayor: 6,
    destacado: false
}, {
    nombre: "Cupcakes Chocolate",
    precio: 32,
    categoria: "cupcake",
    img: "../img/cupcake_chocolate.jpg",
    desc: "Cupcakes de chocolate con relleno de ganache y frosting de crema de chocolate. Pack de 6.",
    porciones: "6 unid.",
    peso: "380 g",
    diametro: "6 cm",
    anticipacion: "24h",
    ingredientes: ["Cacao premium", "Chocolate belga", "Crema de leche", "Huevos frescos"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos", "🥚 Huevo"],
    rating: "4.9",
    reviews: 118,
    badge: "🍫 Chocolate",
    requierePersonalizacion: false,
    precioMayor: 26,
    minMayor: 6,
    destacado: false
}, {
    nombre: "Cupcakes Red Velvet",
    precio: 35,
    categoria: "cupcake",
    img: "../img/cupcake_redvelvet.jpg",
    desc: "Cupcakes de terciopelo rojo con frosting de queso crema. Pack de 6.",
    porciones: "6 unid.",
    peso: "370 g",
    diametro: "6 cm",
    anticipacion: "24h",
    ingredientes: ["Colorante natural", "Queso crema", "Vainilla", "Mantequilla premium"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos", "🥚 Huevo"],
    rating: "4.9",
    reviews: 98,
    badge: "❤️ Red Velvet",
    requierePersonalizacion: false,
    precioMayor: 29,
    minMayor: 6,
    destacado: false
}, {
    nombre: "Tiramisú",
    precio: 40,
    categoria: "cupcake",
    img: "../img/tiramisu.jpg",
    desc: "Postre italiano con capas de bizcocho empapado en café y crema de mascarpone.",
    porciones: "8 unid.",
    peso: "900 g",
    diametro: "20×20 cm",
    anticipacion: "24h",
    ingredientes: ["Mascarpone", "Café expreso", "Cacao amargo", "Bizcocho"],
    alergenos: ["🌾 Gluten", "🥛 Lácteos", "🥚 Huevo"],
    rating: "4.9",
    reviews: 203,
    badge: "🇮🇹 Italiano",
    requierePersonalizacion: false,
    precioMayor: 34,
    minMayor: 5,
    destacado: false
}];

const categoriaLabels = {
    torta: "Tortas",
    cheesecake: "Cheesecakes",
    galleta: "Galletas",
    cupcake: "Postres"
};

// ============================================================
// VARIABLES GLOBALES
// ============================================================
let carrito = [];
let cantidadModal = 1;
let precioModal = 0;
let productoActual = null;
let comprobanteSeleccionado = "boleta";
let entregaSeleccionada = "delivery";
let momentoSeleccionado = "ahora";
let slideActual = 0;
let personalizacionActiva = false;
let productosFiltrados = [];
let indiceProductoActual = 0;

// ============================================================
// MOSTRAR PRODUCTOS
// ============================================================
function mostrarProductos(lista, esFiltro = false) {
    const contenedor = document.getElementById("productosContainer");
    contenedor.innerHTML = "";
    const noResultados = document.getElementById("noResultados");

    let productosMostrar = lista;
    if (!esFiltro) {
        const destacados = lista.filter(p => p.destacado === true);
        productosMostrar = destacados.length > 0 ? destacados : lista.slice(0, 6);
    }

    if (productosMostrar.length === 0) {
        noResultados.style.display = "block";
        contenedor.style.display = "none";
        return;
    }

    noResultados.style.display = "none";
    contenedor.style.display = "grid";

    productosMostrar.forEach(producto => {
        const estrellas = generarEstrellas(producto.rating);
        const mayorHTML = producto.precioMayor ?
            `<div class="precio-mayor-tag">
                 <iconify-icon icon="lucide:package"></iconify-icon>
                 Mayor: S/${producto.precioMayor} c/u (${producto.minMayor}u)
               </div>` :
            '';
        contenedor.innerHTML += `
            <div class="producto-card fade">
                <div class="producto-img">
                    <img src="${producto.img}" onclick="abrirModal('${producto.nombre}')" 
                         alt="${producto.nombre}" loading="lazy" 
                         onerror="this.src='../img/placeholder.jpg'">
                    <span class="badge">${producto.badge || 'Popular'}</span>
                </div>
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.desc.substring(0, 65)}...</p>
                    ${producto.rating ? `
                    <div class="producto-rating">
                        <div class="rating-stars">${estrellas}</div>
                        <span class="rating-num">${producto.rating}</span>
                        <span class="rating-reviews">(${producto.reviews})</span>
                    </div>` : ''}
                    <div class="precio-row">
                        <span>S/${producto.precio}</span>
                        <button onclick="abrirModal('${producto.nombre}')">Ver</button>
                    </div>
                    ${mayorHTML}
                </div>
            </div>
        `;
    });
}

function generarEstrellas(rating) {
    const r = parseFloat(rating);
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(r)) {
            html += '<iconify-icon icon="lucide:star" style="color:#ffc107;font-size:12px"></iconify-icon>';
        } else if (i - r < 1 && i - r > 0) {
            html += '<iconify-icon icon="lucide:star-half" style="color:#ffc107;font-size:12px"></iconify-icon>';
        } else {
            html += '<iconify-icon icon="lucide:star" style="color:#e0e0e0;font-size:12px"></iconify-icon>';
        }
    }
    return html;
}

// ============================================================
// BUSCADOR - LUPA VISIBLE
// ============================================================
document.getElementById('searchIcon').addEventListener('click', function (e) {
    e.stopPropagation();
    const wrapper = document.getElementById('searchWrapper');
    if (wrapper.classList.contains('expanded')) {
        document.getElementById('searchInput').focus();
    } else {
        expandirBuscador();
    }
});

document.addEventListener('click', function (e) {
    const wrapper = document.querySelector('.search-wrapper');
    const input = document.getElementById('searchInput');
    if (wrapper && !wrapper.contains(e.target)) {
        if (!input.value.trim()) {
            wrapper.classList.remove('expanded');
            document.getElementById('searchResults').classList.remove('active');
        }
    }
});

function expandirBuscador() {
    const wrapper = document.getElementById('searchWrapper');
    if (!wrapper.classList.contains('expanded')) {
        wrapper.classList.add('expanded');
        setTimeout(() => {
            document.getElementById('searchInput').focus();
        }, 300);
    }
}

function contraerBuscador() {
    const wrapper = document.getElementById('searchWrapper');
    wrapper.classList.remove('expanded');
    document.getElementById('searchResults').classList.remove('active');
    document.getElementById('searchInput').value = '';
}

function buscarConSugerencias(texto) {
    const dropdown = document.getElementById('searchResults');
    if (texto.length === 0) {
        dropdown.classList.remove('active');
        return;
    }

    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto.toLowerCase())
    );

    if (filtrados.length === 0) {
        dropdown.innerHTML = `
            <div class="search-no-results">
                <p>No encontramos "${texto}" en nuestra carta.</p>
            </div>
        `;
        dropdown.classList.add('active');
        return;
    }

    dropdown.innerHTML = filtrados.map(p => `
        <div class="search-result-item" onclick="seleccionarSugerencia('${p.nombre}')">
            <img src="${p.img}" alt="${p.nombre}">
            <div class="sr-info">
                <h4>${p.nombre}</h4>
                <span>${categoriaLabels[p.categoria] || 'Postre'}</span>
            </div>
            <span class="sr-price">S/${p.precio}</span>
        </div>
    `).join('');

    dropdown.classList.add('active');
}

function seleccionarSugerencia(nombre) {
    contraerBuscador();
    setTimeout(() => abrirModal(nombre), 300);
}

// ============================================================
// FILTRAR CATEGORÍAS
// ============================================================
function filtrar(categoria) {
    const filtrados = productos.filter(p => p.categoria === categoria);
    mostrarProductos(filtrados, true);
    document.getElementById("productos").scrollIntoView({ behavior: "smooth" });

    const catFiltroActivo = document.getElementById("catFiltroActivo");
    document.getElementById("catFiltroLabel").innerHTML = ` Mostrando: ${categoriaLabels[categoria] || categoria}`;
    catFiltroActivo.style.display = "flex";
    document.getElementById("tituloProductos").textContent = categoriaLabels[categoria] || categoria;
}

function verTodos() {
    mostrarProductos(productos, false);
    document.getElementById("catFiltroActivo").style.display = "none";
    document.getElementById("tituloProductos").textContent = "🌟 Productos Destacados";
}

// ============================================================
// MODAL PRODUCTO
// ============================================================
function abrirModal(nombre) {
    productoActual = productos.find(p => p.nombre === nombre);
    if (!productoActual) return;

    const contenedor = document.getElementById("productosContainer");
    const productosEnPantalla = contenedor.querySelectorAll('.producto-card');
    productosFiltrados = productosEnPantalla.length > 0 && productosEnPantalla.length < productos.length ?
        productos.filter(p => {
            let found = false;
            productosEnPantalla.forEach(card => {
                if (card.querySelector('h3')?.textContent === p.nombre) found = true;
            });
            return found;
        }) : [...productos];

    indiceProductoActual = productosFiltrados.findIndex(p => p.nombre === nombre);
    if (indiceProductoActual === -1) indiceProductoActual = 0;
    productoActual = productosFiltrados[indiceProductoActual];
    mostrarProductoEnModal(indiceProductoActual);
}

function mostrarProductoEnModal(index) {
    if (index < 0 || index >= productosFiltrados.length) return;
    const producto = productosFiltrados[index];
    if (!producto) return;

    indiceProductoActual = index;
    productoActual = producto;
    cantidadModal = 1;
    precioModal = producto.precio;

    document.getElementById('modalTotalProductos').textContent = productosFiltrados.length;
    document.getElementById('modalPosicionActual').textContent = index + 1;

    document.getElementById('modalImg').src = producto.img;
    document.getElementById('modalImg').alt = producto.nombre;
    document.getElementById("modalNombre").textContent = producto.nombre;
    document.getElementById("modalDesc").textContent = producto.desc;

    const factsContainer = document.getElementById("modalQuickFacts");
    let factsHTML = '';
    if (producto.porciones) factsHTML += `<span><iconify-icon icon="lucide:users"></iconify-icon> ${producto.porciones}</span>`;
    if (producto.peso) factsHTML += `<span><iconify-icon icon="lucide:scale"></iconify-icon> ${producto.peso}</span>`;
    if (producto.anticipacion) factsHTML += `<span><iconify-icon icon="lucide:clock"></iconify-icon> ${producto.anticipacion}</span>`;
    factsContainer.innerHTML = factsHTML;

    const modalRating = document.getElementById("modalRating");
    if (producto.rating) {
        modalRating.style.display = "flex";
        modalRating.querySelector(".rating-val").textContent = producto.rating;
        modalRating.querySelector(".rating-rev").textContent = `(${producto.reviews} reseñas)`;
    } else {
        modalRating.style.display = "none";
    }

    const popularBadge = document.getElementById("modalPopularBadge");
    if (producto.badge) {
        popularBadge.textContent = producto.badge;
        popularBadge.classList.add("show");
    } else {
        popularBadge.classList.remove("show");
    }

    document.getElementById("modalPrecio").textContent = "S/" + producto.precio;
    document.getElementById("modalCantidad").textContent = cantidadModal;

    const mayorEl = document.getElementById("modalPrecioMayor");
    if (producto.precioMayor) {
        document.getElementById("modalPrecioMayorVal").textContent = producto.precioMayor;
        document.getElementById("modalMinMayor").textContent = producto.minMayor;
        mayorEl.style.display = "flex";
    } else {
        mayorEl.style.display = "none";
    }

    const toggleSection = document.getElementById("personalizacionToggleSection");
    const toggleCheckbox = document.getElementById("togglePersonalizacion");
    const persEl = document.getElementById("modalPersonalizacion");

    personalizacionActiva = false;
    toggleCheckbox.checked = false;
    persEl.style.display = "none";

    if (producto.requierePersonalizacion) {
        toggleSection.style.display = "block";
        document.getElementById("modalDedicatoria").value = "";
        document.getElementById("modalDetalles").value = "";
    } else {
        toggleSection.style.display = "none";
    }

    mostrarInfo('detalles');
    document.querySelectorAll('.modal-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.modal-tab[data-tab="detalles"]')?.classList.add('active');

    actualizarBotonModal();
    document.getElementById("btnAgregarModal").onclick = function () {
        if (producto.requierePersonalizacion && personalizacionActiva) {
            const dedicatoria = document.getElementById("modalDedicatoria").value.trim();
            const detalles = document.getElementById("modalDetalles").value.trim();
            if (!dedicatoria || !detalles) {
                mostrarToastPersonalizado("Completa la dedicatoria y detalles", "#ff9800");
                return;
            }
            agregarCarrito(producto.nombre, cantidadModal, dedicatoria, detalles);
        } else {
            agregarCarrito(producto.nombre, cantidadModal);
        }
        cerrarModal();
    };

    document.getElementById("modal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function navegarProducto(direccion) {
    const nuevoIndex = indiceProductoActual + direccion;
    if (nuevoIndex < 0 || nuevoIndex >= productosFiltrados.length) {
        document.querySelector('.modal-content').style.animation = 'shake .3s ease';
        setTimeout(() => document.querySelector('.modal-content').style.animation = '', 300);
        return;
    }
    mostrarProductoEnModal(nuevoIndex);
}

function togglePersonalizacionSwitch() {
    const checkbox = document.getElementById("togglePersonalizacion");
    const persEl = document.getElementById("modalPersonalizacion");
    personalizacionActiva = checkbox.checked;
    persEl.style.display = personalizacionActiva ? "block" : "none";
    if (!personalizacionActiva) {
        document.getElementById("modalDedicatoria").value = "";
        document.getElementById("modalDetalles").value = "";
    }
}

function mostrarInfo(tipo) {
    if (!productoActual) return;

    document.querySelectorAll('.modal-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.modal-tab[data-tab="${tipo}"]`)?.classList.add('active');

    const content = document.getElementById('infoPanelContent');
    let html = '';

    switch (tipo) {
        case 'detalles':
            html = `
                <div class="modal-info-detalles">
                    <div class="det-item">
                        <span class="det-label">🍰 Porciones</span>
                        <span class="det-value">${productoActual.porciones || '—'}</span>
                    </div>
                    <div class="det-item">
                        <span class="det-label">⚖️ Peso</span>
                        <span class="det-value">${productoActual.peso || '—'}</span>
                    </div>
                    <div class="det-item">
                        <span class="det-label">📏 Tamaño</span>
                        <span class="det-value">${productoActual.diametro || '—'}</span>
                    </div>
                    <div class="det-item">
                        <span class="det-label">⏰ Anticipación</span>
                        <span class="det-value">${productoActual.anticipacion || '—'}</span>
                    </div>
                </div>
            `;
            break;

        case 'ingredientes':
            html = `
                <div style="margin-bottom:8px;font-size:12px;color:var(--text-soft);font-weight:600;">🌿 Lista de ingredientes</div>
                <div class="modal-info-ingredientes">
                    ${productoActual.ingredientes?.length ? productoActual.ingredientes.map(ing => `<span class="ing-tag">${ing}</span>`).join('') : '<span style="color:var(--text-soft);font-size:13px;">No hay ingredientes listados</span>'}
                </div>
            `;
            break;

        case 'alergenos':
            html = `
                <div style="margin-bottom:8px;font-size:12px;color:var(--text-soft);font-weight:600;">⚠️ Información de alérgenos</div>
                <div class="modal-info-alergenos">
                    ${productoActual.alergenos?.length ? productoActual.alergenos.map(aler => `<span class="aler-tag">${aler}</span>`).join('') : '<span style="color:var(--text-soft);font-size:13px;">Sin alérgenos comunes</span>'}
                </div>
                <p style="font-size:11px;color:var(--text-soft);margin-top:10px;font-style:italic;">* Los alérgenos pueden variar según la preparación. Consulta con nuestro equipo.</p>
            `;
            break;
    }

    content.innerHTML = html;
    content.style.animation = 'none';
    requestAnimationFrame(() => content.style.animation = 'fadeSlide .25s ease');
}

function actualizarBotonModal() {
    const total = precioModal * cantidadModal;
    document.getElementById("btnAgregarTexto").textContent = `Agregar al carrito · S/${total}`;
}

function cambiarCantidadModal(cambio) {
    cantidadModal = Math.min(Math.max(cantidadModal + cambio, 1), 20);
    document.getElementById("modalCantidad").textContent = cantidadModal;
    actualizarBotonModal();
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "";
    productosFiltrados = [];
    indiceProductoActual = 0;
}

function cerrarModalFuera(e) {
    if (e.target === document.getElementById("modal")) cerrarModal();
}

// ============================================================
// CARRITO
// ============================================================
function agregarCarrito(nombre, cantidad = 1, dedicatoria = "", detalles = "") {
    const producto = productos.find(p => p.nombre === nombre);
    if (!producto) return;

    const existe = carrito.find(item =>
        item.nombre === nombre && item.dedicatoria === dedicatoria && item.detalles === detalles
    );

    if (existe) {
        existe.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad, dedicatoria, detalles });
    }

    actualizarCarrito();
    mostrarToast();
    document.getElementById("carrito").classList.add("active");
    document.getElementById("carritoOverlay").classList.add("active");
}

function actualizarCarrito() {
    const lista = document.getElementById("listaCarrito");
    lista.innerHTML = "";
    let subtotal = 0;
    let cantidadTotal = 0;

    if (carrito.length === 0) {
        lista.innerHTML = `
            <div class="carrito-vacio">
                <iconify-icon icon="lucide:shopping-bag"></iconify-icon>
                <p>Tu carrito está vacío</p>
                <span style="font-size:var(--fs-xs);color:var(--carrito-text-soft)">Agrega algún postre delicioso 🍰</span>
            </div>
        `;
    } else {
        carrito.forEach((item, index) => {
            const itemSubtotal = item.precio * item.cantidad;
            subtotal += itemSubtotal;
            cantidadTotal += item.cantidad;
            lista.innerHTML += `
                <div class="item-carrito">
                    <img src="${item.img}" alt="${item.nombre}">
                    <div class="info-carrito">
                        <h4>${item.nombre}</h4>
                        ${item.dedicatoria ? `<p style="font-size:9px;color:#b97b8d;">✏️ ${item.dedicatoria}</p>` : ''}
                        ${item.detalles ? `<p style="font-size:9px;color:#b97b8d;">📝 ${item.detalles}</p>` : ''}
                        <p>S/${item.precio} x ${item.cantidad} = <strong>S/${itemSubtotal}</strong></p>
                        <div class="cantidad-box">
                            <button onclick="cambiarCantidad(${index}, -1)">−</button>
                            <span>${item.cantidad}</span>
                            <button onclick="cambiarCantidad(${index}, 1)">+</button>
                        </div>
                    </div>
                    <button class="eliminar-btn" onclick="eliminarProducto(${index})">✕</button>
                </div>
            `;
        });
    }

    const igv = subtotal * 0.18;
    const total = subtotal + igv;

    document.getElementById("subtotalCarrito").textContent = subtotal.toFixed(2);
    document.getElementById("igvCarrito").textContent = igv.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("contador").textContent = cantidadTotal;
}

function toggleCart() {
    document.getElementById("carrito").classList.toggle("active");
    document.getElementById("carritoOverlay").classList.toggle("active");
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function cambiarCantidad(index, cambio) {
    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }
    actualizarCarrito();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// ============================================================
// COMPRAR
// ============================================================
function comprar() {
    if (carrito.length === 0) {
        mostrarToastPersonalizado("Tu carrito está vacío", "#ff9800");
        return;
    }

    const resumenDiv = document.getElementById("resumenPedidoMini");
    let subtotal = 0;
    let resumenHTML = '<h4>📋 Resumen:</h4>';

    carrito.forEach(item => {
        const itemSubtotal = item.precio * item.cantidad;
        subtotal += itemSubtotal;
        resumenHTML += `
            <div class="mini-item"><span>${item.cantidad}x ${item.nombre}</span><span>S/${itemSubtotal}</span></div>
            ${item.dedicatoria ? `<div class="mini-item" style="color:#b97b8d;font-size:10px;padding-left:10px;">✏️ ${item.dedicatoria}</div>` : ''}
            ${item.detalles ? `<div class="mini-item" style="color:#b97b8d;font-size:10px;padding-left:10px;">📝 ${item.detalles}</div>` : ''}
        `;
    });

    const igv = subtotal * 0.18;
    const total = subtotal + igv;

    resumenHTML += `
        <div class="mini-item" style="border-top:1px solid var(--border);margin-top:6px;padding-top:6px;"><span>Subtotal:</span><span>S/${subtotal.toFixed(2)}</span></div>
        <div class="mini-item"><span>IGV (18%):</span><span>S/${igv.toFixed(2)}</span></div>
        <div class="mini-total"><span>Total:</span><span>S/${total.toFixed(2)}</span></div>
    `;

    resumenDiv.innerHTML = resumenHTML;
    document.getElementById("modalConfirmacion").classList.add("visible");
}

function cerrarModalConfirmacion() {
    document.getElementById("modalConfirmacion").classList.remove("visible");
}

function seleccionarComprobante(tipo) {
    comprobanteSeleccionado = tipo;
    document.getElementById("btnBoleta").classList.toggle("active", tipo === "boleta");
    document.getElementById("btnFactura").classList.toggle("active", tipo === "factura");
    const docInput = document.getElementById("clienteDocumento");
    docInput.placeholder = tipo === "boleta" ? "DNI (8 dígitos)" : "RUC (11 dígitos)";
    docInput.maxLength = tipo === "boleta" ? 8 : 11;
    docInput.value = "";
}

function seleccionarEntrega(tipo) {
    entregaSeleccionada = tipo;
    document.getElementById("btnDelivery").classList.toggle("active", tipo === "delivery");
    document.getElementById("btnRecojo").classList.toggle("active", tipo === "recojo");
    const campoDireccion = document.getElementById("campoDireccion");
    const inputDireccion = document.getElementById("clienteDireccion");
    campoDireccion.style.display = tipo === "delivery" ? "block" : "none";
    inputDireccion.required = tipo === "delivery";
}

function seleccionarMomento(tipo) {
    momentoSeleccionado = tipo;
    document.getElementById("btnAhora").classList.toggle("active", tipo === "ahora");
    document.getElementById("btnProgramado").classList.toggle("active", tipo === "programado");
    document.getElementById("campoProgramado").style.display = tipo === "programado" ? "flex" : "none";
    if (tipo === "programado") {
        const fechaInput = document.getElementById("fechaProgramada");
        if (!fechaInput.value) fechaInput.value = new Date().toISOString().split("T")[0];
    }
}

function enviarPedidoConfirmado(event) {
    event.preventDefault();

    const nombre = document.getElementById("clienteNombre").value.trim();
    const telefono = document.getElementById("clienteTelefono").value.trim();
    const direccion = document.getElementById("clienteDireccion").value.trim();
    const documento = document.getElementById("clienteDocumento").value.trim();
    const notas = document.getElementById("clienteNotas").value.trim();

    if (!nombre || !telefono) {
        mostrarToastPersonalizado("Completa todos los campos obligatorios", "#ff5722");
        return;
    }

    if (entregaSeleccionada === "delivery" && !direccion) {
        mostrarToastPersonalizado("Ingresa la dirección de entrega", "#ff5722");
        return;
    }

    if (comprobanteSeleccionado === "factura" && documento.length !== 11) {
        mostrarToastPersonalizado("El RUC debe tener 11 dígitos", "#ff5722");
        return;
    }
    if (comprobanteSeleccionado === "boleta" && documento && documento.length !== 8) {
        mostrarToastPersonalizado("El DNI debe tener 8 dígitos", "#ff5722");
        return;
    }

    let fechaHoraTexto = "Lo antes posible";
    if (momentoSeleccionado === "programado") {
        const fechaProg = document.getElementById("fechaProgramada").value;
        const horaProg = document.getElementById("horaProgramada").value;
        if (!fechaProg || !horaProg) {
            mostrarToastPersonalizado("Selecciona fecha y hora", "#ff5722");
            return;
        }
        fechaHoraTexto = `${fechaProg} a las ${horaProg}`;
    }

    let subtotal = 0;
    let mensaje = "*NUEVO PEDIDO - DULCE ATARDECER*%0A%0A";
    mensaje += `👤 *Cliente:* ${nombre}%0A📞 *Teléfono:* ${telefono}%0A`;
    mensaje += `🚚 *Entrega:* ${entregaSeleccionada === "delivery" ? "Delivery" : "Recojo en tienda"}%0A`;
    if (entregaSeleccionada === "delivery") mensaje += `📍 *Dirección:* ${direccion}%0A`;
    mensaje += `🕐 *Cuándo:* ${fechaHoraTexto}%0A`;
    mensaje += `🧾 *Comprobante:* ${comprobanteSeleccionado === "factura" ? "Factura" : "Boleta"}${documento ? " - " + documento : ""}%0A%0A`;
    mensaje += "*PRODUCTOS:*%0A─────────────────%0A";

    const itemsPedido = [];
    carrito.forEach(item => {
        const itemSubtotal = item.precio * item.cantidad;
        subtotal += itemSubtotal;
        mensaje += `*${item.nombre}*%0A   ${item.cantidad}x S/${item.precio} = S/${itemSubtotal}%0A`;
        if (item.dedicatoria) mensaje += `   ✏️ ${item.dedicatoria}%0A`;
        if (item.detalles) mensaje += `   📝 ${item.detalles}%0A`;
        itemsPedido.push({ nombre: item.nombre, cantidad: item.cantidad, precio: item.precio, subtotal: itemSubtotal });
    });

    const igv = subtotal * 0.18;
    const total = subtotal + igv;

    mensaje += "─────────────────%0A";
    mensaje += `Subtotal: S/${subtotal.toFixed(2)}%0AIGV (18%): S/${igv.toFixed(2)}%0A*TOTAL: S/${total.toFixed(2)}*%0A%0A`;
    if (notas) mensaje += `📌 *Notas:*%0A${notas}%0A%0A`;

    const numeroPedido = "DA-" + new Date().getTime().toString().slice(-6);
    mensaje += `🧾 Pedido: ${numeroPedido}%0A_Gracias por tu compra. En breve te contactamos._`;

    guardarPedidoLocal({
        numero: numeroPedido,
        nombre,
        telefono,
        direccion: entregaSeleccionada === "delivery" ? direccion : "Recojo en tienda",
        entrega: entregaSeleccionada,
        momento: momentoSeleccionado,
        fechaHoraTexto,
        comprobante: comprobanteSeleccionado,
        documento,
        items: itemsPedido,
        subtotal,
        igv,
        total,
        notas,
        fecha: new Date().toISOString(),
        estado: "recibido"
    });

    cerrarModalConfirmacion();
    window.open(`https://wa.me/51975734099?text=${mensaje}`);
    vaciarCarrito();
    mostrarToastPersonalizado("¡Pedido enviado! ✅", "#4caf50");
}

function guardarPedidoLocal(pedido) {
    const pedidos = JSON.parse(localStorage.getItem("pedidosDulceAtardecer") || "[]");
    pedidos.push(pedido);
    localStorage.setItem("pedidosDulceAtardecer", JSON.stringify(pedidos));
}

// ============================================================
// MODALES INFORMATIVOS - MÁS GRANDES
// ============================================================
function abrirModalInfo(tipo) {
    const overlay = document.getElementById('modalInfoOverlay');
    const contenidoDiv = document.getElementById('modalInfoContenido');
    let contenido = '';

    switch (tipo) {
        case 'nosotros-detalle':
            contenido = `
        <span class="info-tag">🌟 Sobre nosotros</span>
        <h2>Conoce más sobre Dulce Atelier</h2>
        
        <p style="font-size:var(--fs-base);line-height:1.8;color:var(--text-soft);">
            Somos una pastelería artesanal con más de 5 años de experiencia endulzando los 
            momentos más especiales de nuestros clientes. Cada uno de nuestros postres es 
            elaborado con ingredientes de la más alta calidad y un toque de amor que nos caracteriza.
        </p>

        <!-- MISIÓN, VISIÓN, VALORES -->
        <div class="mision-grid">
            <div class="mision-card">
                <div class="icono">🎯</div>
                <h4>Misión</h4>
                <p>Crear experiencias dulces que perduren en la memoria de nuestros clientes, superando sus expectativas en cada bocado.</p>
            </div>
            <div class="mision-card">
                <div class="icono">👁️</div>
                <h4>Visión</h4>
                <p>Ser la pastelería de referencia en Perú, reconocida por la excelencia de nuestros productos y la calidez de nuestro servicio.</p>
            </div>
            <div class="mision-card">
                <div class="icono">💎</div>
                <h4>Valores</h4>
                <p>Calidad, pasión, innovación y compromiso con nuestros clientes. Cada detalle importa.</p>
            </div>
        </div>

        <!-- GALERÍA -->
        <h3 style="margin-top:var(--sp-lg);font-size:var(--fs-xl);">📸 Nuestra Pastelería</h3>
        <div class="galeria-grid">
            <div class="galeria-item">
                <img src="../img/pasteleria1.jpg" alt="Pastelería" onerror="this.style.display='none'">
            </div>
            <div class="galeria-item">
                <img src="../img/pasteleria2.jpg" alt="Pastelería" onerror="this.style.display='none'">
            </div>
            <div class="galeria-item">
                <img src="../img/pasteleria3.jpg" alt="Pastelería" onerror="this.style.display='none'">
            </div>
            <div class="galeria-item">
                <img src="../img/pasteleria4.jpg" alt="Pastelería" onerror="this.style.display='none'">
            </div>
        </div>

        <!-- COMENTARIOS -->
        <h3 style="margin-top:var(--sp-lg);font-size:var(--fs-xl);">💬 Comentarios de nuestros clientes</h3>
        <div class="comentarios-grid" id="comentariosModal"></div>

        <!-- FORMULARIO DE COMENTARIOS -->
        <div class="form-comentario">
            <h4 style="font-size:var(--fs-base);margin-bottom:var(--sp-sm);">✍️ Deja tu comentario</h4>
            <form id="formComentarioModal" onsubmit="enviarComentarioModal(event)">
                <div class="form-row">
                    <input type="text" id="comentarioNombreModal" placeholder="Tu nombre" required>
                    <input type="number" id="comentarioEstrellasModal" placeholder="Estrellas (1-5)" min="1" max="5" required>
                </div>
                <textarea id="comentarioTextoModal" rows="3" placeholder="Cuéntanos tu experiencia..." required></textarea>
                <button type="submit">
                    <iconify-icon icon="lucide:send"></iconify-icon> Enviar comentario
                </button>
            </form>
        </div>
    `;
            break;

        case 'contacto-detalle':
            contenido = `
        <span class="info-tag">📞 Más información</span>
        <h2>Información de contacto</h2>
        <p>Estamos disponibles para atenderte de lunes a domingo de 7am a 10pm.</p>

        <!-- TARJETAS DE CONTACTO - 4 COLUMNAS -->
        <div class="contacto-tarjetas">
            <div class="contacto-tarjeta">
                <span class="icono">💬</span>
                <strong>WhatsApp</strong>
                <a href="https://wa.me/51975734099" target="_blank">975 734 099</a>
            </div>
            <div class="contacto-tarjeta">
                <span class="icono">📞</span>
                <strong>Teléfono</strong>
                <a href="tel:+51975734099">975 734 099</a>
            </div>
            <div class="contacto-tarjeta">
                <span class="icono">✉️</span>
                <strong>Correo</strong>
                <a href="mailto:pedidos@dulce.com">pedidos@dulce.com</a>
            </div>
            <div class="contacto-tarjeta">
                <span class="icono">📍</span>
                <strong>Dirección</strong>
                <span>Pucallpa, Perú</span>
            </div>
        </div>

        <!-- SEGUIMIENTO DE PEDIDOS -->
        <h3>📦 Seguimiento de pedidos</h3>
        <div class="seguimiento-pedido">
            <p>Ingresa tu número de teléfono para ver el estado de tu pedido.</p>
            <div class="seguimiento-input-group">
                <input type="tel" id="telefonoSeguimientoModal" placeholder="Ej: 934 367 074">
                <button onclick="consultarPedidoModal()">
                    <iconify-icon icon="lucide:search"></iconify-icon> Consultar
                </button>
            </div>
            <div class="seguimiento-resultado" id="seguimientoResultadoModal"></div>
        </div>

        <!-- MAPA -->
        <h3>📍 Ubicación</h3>
        <div class="mapa-container">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126799.456456456!2d-74.600000!3d-8.383333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a9b00000000000%3A0x0000000000000000!2sPucallpa%2C%20Peru!5e0!3m2!1sen!2spe!4v1700000000000"
                width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
        </div>
    `;
            break;

        case 'seguimiento':
            contenido = `
                <span class="info-tag">📦 Seguimiento</span>
                <h2>¿Cómo va mi pedido?</h2>
                <p>Ingresa tu número de teléfono para ver el estado de tu último pedido.</p>
                <div class="seguimiento-pedido">
                    <div class="seguimiento-input-group">
                        <input type="tel" id="telefonoSeguimientoModal" placeholder="Ej: 934 367 074">
                        <button onclick="consultarPedidoModal()"><iconify-icon icon="lucide:search"></iconify-icon> Consultar</button>
                    </div>
                    <div class="seguimiento-resultado" id="seguimientoResultadoModal"></div>
                </div>
            `;
            break;

        case 'delivery':
            contenido = `
                <span class="info-tag">🚚 Zonas y costos</span>
                <h2>Zonas de Delivery</h2>
                <p>Realizamos entregas en toda la ciudad de Pucallpa.</p>
                <div style="margin:var(--sp-md) 0;">
                    <div style="display:flex;justify-content:space-between;padding:10px;background:var(--pink-soft);border-radius:var(--r-sm);margin-bottom:6px;">
                        <span>📍 Zona Centro</span><span style="font-weight:700;color:#d96f89;">S/5.00</span>
                    </div>
                    <div style="display:flex;justify-content:space-between;padding:10px;background:var(--pink-soft);border-radius:var(--r-sm);margin-bottom:6px;">
                        <span>📍 Yarinacocha</span><span style="font-weight:700;color:#d96f89;">S/8.00</span>
                    </div>
                    <div style="display:flex;justify-content:space-between;padding:10px;background:var(--pink-soft);border-radius:var(--r-sm);margin-bottom:6px;">
                        <span>📍 San Fernando / Manantay</span><span style="font-weight:700;color:#d96f89;">S/10.00</span>
                    </div>
                    <div style="display:flex;justify-content:space-between;padding:10px;background:var(--pink-soft);border-radius:var(--r-sm);">
                        <span>📍 Otras zonas</span><span style="font-weight:700;color:#d96f89;">Consultar</span>
                    </div>
                </div>
                <p><strong>Horario:</strong> Lun - Dom 7am - 10pm</p>
                <p>Tiempo estimado: 45-90 minutos según zona.</p>
            `;
            break;

        case 'mision':
            contenido = `
                <span class="info-tag">🌟 Nuestra esencia</span>
                <h2>Misión y Visión</h2>
                <p><strong>Misión:</strong> Crear postres Gourmet que endulcen los momentos especiales de nuestros clientes, utilizando ingredientes de la más alta calidad.</p>
                <p><strong>Visión:</strong> Ser la pastelería con mayor reputación en Perú, reconocida por la excelencia de nuestros productos y la calidez de nuestro servicio.</p>
            `;
            break;

        case 'faq':
            contenido = `
                <span class="info-tag">❓ Dudas frecuentes</span>
                <h2>Preguntas Frecuentes</h2>
                <h3>¿Hacen entregas a domicilio?</h3>
                <p>Sí, realizamos entregas en toda Pucallpa. El costo varía según zona.</p>
                <h3>¿Con cuánta anticipación debo pedir?</h3>
                <p>Recomendamos 24-48 horas para garantizar disponibilidad.</p>
                <h3>¿Personalizan tortas?</h3>
                <p>¡Sí! Puedes personalizar tu torta. Contáctanos para más info.</p>
                <h3>¿Medios de pago?</h3>
                <p>Aceptamos transferencias, Yape, Plin y efectivo contra entrega.</p>
            `;
            break;

        case 'terminos':
            contenido = `
                <span class="info-tag">📋 Normativas</span>
                <h2>Términos y Condiciones</h2>
                <p>Al realizar un pedido, aceptas los siguientes términos:</p>
                <ul>
                    <li>Los pedidos deben cancelarse con 12h de anticipación para reembolso.</li>
                    <li>Los productos son artesanales y pueden variar en apariencia.</li>
                    <li>Los precios están sujetos a cambios sin previo aviso.</li>
                    <li>Las entregas se realizan en horario 7am - 10pm.</li>
                </ul>
            `;
            break;

        default:
            contenido = `<span class="info-tag">ℹ️ Información</span><h2>${tipo}</h2><p>Contenido no disponible.</p>`;
    }

    contenidoDiv.innerHTML = contenido;
    overlay.classList.add('visible');

    if (tipo === 'nosotros-detalle') {
        cargarComentariosModal();
    }
    if (tipo === 'contacto-detalle' || tipo === 'seguimiento') {
        document.getElementById('telefonoSeguimientoModal')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') consultarPedidoModal();
        });
    }
}

function cerrarModalInfo() {
    document.getElementById('modalInfoOverlay').classList.remove('visible');
}

// ============================================================
// COMENTARIOS EN MODAL
// ============================================================
function cargarComentariosModal() {
    const container = document.getElementById('comentariosModal');
    const comentarios = JSON.parse(localStorage.getItem('comentariosDulceAtardecer') || '[]');

    if (comentarios.length === 0) {
        container.innerHTML = `<p style="color:var(--text-soft);text-align:center;">Aún no hay comentarios. ¡Sé el primero en opinar!</p>`;
        return;
    }

    container.innerHTML = comentarios.slice(-6).reverse().map(c => `
        <div class="comentario-card">
            <div class="comentario-header">
                <span class="comentario-nombre">${c.nombre}</span>
                <span class="comentario-estrellas">${'⭐'.repeat(c.estrellas)}</span>
            </div>
            <p class="comentario-texto">${c.texto}</p>
            <span class="comentario-fecha">${new Date(c.fecha).toLocaleDateString()}</span>
        </div>
    `).join('');
}

function enviarComentarioModal(event) {
    event.preventDefault();

    const nombre = document.getElementById('comentarioNombreModal').value.trim();
    const estrellas = parseInt(document.getElementById('comentarioEstrellasModal').value);
    const texto = document.getElementById('comentarioTextoModal').value.trim();

    if (!nombre || !estrellas || !texto) {
        mostrarToastPersonalizado('Completa todos los campos', '#ff5722');
        return;
    }

    if (estrellas < 1 || estrellas > 5) {
        mostrarToastPersonalizado('Las estrellas deben ser entre 1 y 5', '#ff5722');
        return;
    }

    const comentarios = JSON.parse(localStorage.getItem('comentariosDulceAtardecer') || '[]');
    comentarios.push({ nombre, estrellas, texto, fecha: new Date().toISOString() });
    localStorage.setItem('comentariosDulceAtardecer', JSON.stringify(comentarios));

    document.getElementById('formComentarioModal').reset();
    cargarComentariosModal();
    mostrarToastPersonalizado('¡Comentario enviado! ✅', '#4caf50');
}

// ============================================================
// SEGUIMIENTO DE PEDIDOS EN MODAL
// ============================================================
function consultarPedidoModal() {
    const telefono = document.getElementById('telefonoSeguimientoModal').value.trim();
    const resultadoDiv = document.getElementById('seguimientoResultadoModal');

    if (!telefono) {
        resultadoDiv.innerHTML = `<p style="color:var(--text-soft);text-align:center;font-size:0.9rem;">📱 Ingresa un número de teléfono.</p>`;
        return;
    }

    const pedidos = JSON.parse(localStorage.getItem('pedidosDulceAtardecer') || '[]');
    const pedidosCliente = pedidos.filter(p => p.telefono.replace(/\s/g, '').includes(telefono.replace(/\s/g, '')));

    if (pedidosCliente.length === 0) {
        resultadoDiv.innerHTML = `
            <div style="text-align:center;padding:var(--sp-lg);color:var(--text-soft);background:var(--surface);border-radius:var(--r-sm);">
                <p style="font-size:1rem;">❌ No encontramos pedidos con ese número.</p>
                <span style="font-size:var(--fs-xs);">Escríbenos por WhatsApp para más información.</span>
            </div>
        `;
        return;
    }

    const ultimoPedido = pedidosCliente[pedidosCliente.length - 1];
    const pasos = ['recibido', 'preparando', 'camino', 'entregado'];
    const labels = {
        recibido: '📋 Recibido',
        preparando: '👨‍🍳 Preparando',
        camino: '🚚 En camino',
        entregado: '🎉 Entregado'
    };
    const iconos = {
        recibido: 'lucide:clipboard-check',
        preparando: 'lucide:chef-hat',
        camino: 'lucide:truck',
        entregado: 'lucide:party-popper'
    };
    const pasoActualIndex = pasos.indexOf(ultimoPedido.estado);

    let timelineHTML = '<div class="timeline">';
    pasos.forEach((paso, i) => {
        const completado = i <= pasoActualIndex;
        timelineHTML += `
            <div class="timeline-step ${completado ? 'completed' : ''}">
                <div class="step-icon"><iconify-icon icon="${iconos[paso]}"></iconify-icon></div>
                <span>${labels[paso]}</span>
            </div>
        `;
    });
    timelineHTML += '</div>';

    resultadoDiv.innerHTML = `
        <div style="background:var(--pink-soft-flat);border-radius:var(--r-md);padding:var(--sp-md);border:1px solid var(--border);">
            <div style="display:flex;justify-content:space-between;margin-bottom:var(--sp-sm);flex-wrap:wrap;gap:4px;">
                <strong style="font-size:1rem;color:var(--text);">🧾 Pedido ${ultimoPedido.numero}</strong>
                <span style="font-size:var(--fs-xs);color:var(--text-soft);">📅 ${new Date(ultimoPedido.fecha).toLocaleDateString()}</span>
            </div>
            ${timelineHTML}
            <div style="text-align:right;margin-top:var(--sp-sm);font-weight:700;color:#d96f89;font-size:1.1rem;">
                Total: S/${ultimoPedido.total.toFixed(2)}
            </div>
        </div>
    `;
}
// ============================================================
// AYUDA FLOTANTE
// ============================================================
function toggleAyudaPanel() {
    const panel = document.getElementById('ayudaPanel');
    const icono = document.getElementById('ayudaIcono');
    panel.classList.toggle('visible');
    icono.setAttribute('icon', panel.classList.contains('visible') ? 'lucide:x' : 'lucide:message-circle-question');
}

// ============================================================
// TEMA
// ============================================================
function toggleTheme() {
    const root = document.documentElement;
    const icon = document.getElementById('themeIcon');
    const currentTheme = root.getAttribute('data-theme');
    const nuevoTema = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', nuevoTema);
    icon.setAttribute('icon', nuevoTema === 'dark' ? 'lucide:sun' : 'lucide:moon');
    localStorage.setItem('tema', nuevoTema);
}

function aplicarTemaGuardado() {
    const temaGuardado = localStorage.getItem('tema');
    const icon = document.getElementById('themeIcon');
    if (temaGuardado) {
        document.documentElement.setAttribute('data-theme', temaGuardado);
        if (icon) icon.setAttribute('icon', temaGuardado === 'dark' ? 'lucide:sun' : 'lucide:moon');
    }
}

// ============================================================
// TOAST
// ============================================================
function mostrarToast() {
    const toast = document.getElementById('toast');
    toast.innerHTML = `<iconify-icon icon="lucide:circle-check"></iconify-icon> Producto agregado 🍰`;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 2500);
}

function mostrarToastPersonalizado(mensaje, color) {
    const toast = document.getElementById('toast');
    toast.innerHTML = `<iconify-icon icon="lucide:circle-check"></iconify-icon> ${mensaje}`;
    toast.style.borderLeftColor = color || '#f08ca0';
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
}

// ============================================================
// NEWSLETTER
// ============================================================
function suscribirNewsletter(event) {
    event.preventDefault();
    const form = document.getElementById('footerNewsletterForm');
    const input = form.querySelector('input[type="email"]');
    const email = input.value.trim();

    if (!email) {
        mostrarToastPersonalizado('📧 Ingresa un correo válido', '#ff5722');
        return;
    }

    const suscriptores = JSON.parse(localStorage.getItem('newsletterSuscriptores') || '[]');
    if (suscriptores.includes(email)) {
        mostrarToastPersonalizado('📧 Ya estás suscrito', '#ff9800');
        return;
    }

    suscriptores.push(email);
    localStorage.setItem('newsletterSuscriptores', JSON.stringify(suscriptores));
    mostrarToastPersonalizado('✅ ¡Suscripción exitosa!', '#25d366');
    input.value = '';
}

// ============================================================
// SLIDER
// ============================================================
function irSlide(index) {
    slideActual = index;
    document.querySelectorAll('.hero-slide').forEach((el, i) => el.classList.toggle('active', i === slideActual));
    document.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === slideActual));
}

// ============================================================
// NAVEGACIÓN
// ============================================================
function scrollProductos() {
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

function scrollNosotros(e) {
    e.preventDefault();
    document.getElementById('nosotros').scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    const nav = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
    
    // Bloquear scroll cuando el menú está abierto
    if (nav.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function cerrarMenu() {
    const nav = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
}

// Cerrar menú al hacer clic fuera (opcional)
document.addEventListener('click', function(e) {
    const nav = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    
    if (nav.classList.contains('open')) {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            cerrarMenu();
        }
    }
});
// ============================================================
// NAVEGACIÓN POR TECLADO
// ============================================================
document.addEventListener('keydown', function (e) {
    const modal = document.getElementById('modal');
    if (modal && modal.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            navegarProducto(-1);
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            navegarProducto(1);
        }
    }

    if (e.key === 'Escape') {
        cerrarModal();
        cerrarModalConfirmacion();
        cerrarModalInfo();
        document.getElementById('ayudaPanel')?.classList.remove('visible');
        document.getElementById('searchWrapper')?.classList.remove('expanded');
    }
});

// ============================================================
// INICIALIZACIÓN
// ============================================================
window.onload = function () {
    aplicarTemaGuardado();
    mostrarProductos(productos, false);
    actualizarCarrito();

    setInterval(() => {
        slideActual = (slideActual + 1) % 3;
        irSlide(slideActual);
    }, 5000);

    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', cerrarMenu);
    });
};