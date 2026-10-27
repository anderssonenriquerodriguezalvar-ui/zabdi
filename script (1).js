/* =========================================================
   ZABDI RESTAURANTE
   Todo lo que normalmente querrás cambiar está aquí arriba:
   CONFIG (datos del negocio) y MENU (platillos y precios).
   ========================================================= */

const CONFIG = {
  telefono: "50370214691",          // 503 + 7021 4691
  telefonoVisible: "7021 4691",
  horario: "Lunes a domingo · 7:00 am – 9:00 pm",   // <-- ajusta a tu horario real
  direccionMapa: "Desvío de Apico, Tecpan, El Salvador",
  moneda: "$"
};

/* Precios de ejemplo: cámbialos por los reales.
   Las imágenes van en la carpeta img/ (si falta una, se muestra el emoji). */
const MENU = {
  pupusas: {
    nombre: "Pupusas", icono: "🫓",
    items: [
      { id: "pu1", nombre: "Pupusa revuelta",        desc: "Chicharrón, queso y frijol en maíz recién hecho.", precio: 1.00, img: "img/pupusa-revuelta.jpg", emoji: "🫓", tag: "Favorita" },
      { id: "pu2", nombre: "Pupusa de queso",        desc: "Queso fundido que se estira en cada mordida.",      precio: 1.00, img: "img/pupusa-queso.jpg",    emoji: "🧀" },
      { id: "pu3", nombre: "Pupusa de frijol con queso", desc: "Clásica y reconfortante.",                      precio: 1.00, img: "img/pupusa-frijol.jpg",   emoji: "🫘" },
      { id: "pu4", nombre: "Pupusa de chicharrón",   desc: "Cerdo sazonado, bien jugosa.",                      precio: 1.00, img: "img/pupusa-chicharron.jpg", emoji: "🥓" },
      { id: "pu5", nombre: "Pupusa de loroco con queso", desc: "El aroma del loroco con queso cremoso.",        precio: 1.25, img: "img/pupusa-loroco.jpg",   emoji: "🌿" },
      { id: "pu6", nombre: "Pupusa de ayote",        desc: "Suave y dulce, para variar.",                       precio: 1.25, img: "img/pupusa-ayote.jpg",    emoji: "🎃" },
      { id: "pu7", nombre: "Combo 3 pupusas + horchata", desc: "Tres pupusas a tu gusto y horchata fría.",      precio: 3.50, img: "img/combo-pupusas.jpg",   emoji: "🍽️", tag: "Combo" }
    ]
  },
  comida: {
    nombre: "Comida", icono: "🍗",
    items: [
      { id: "co1", nombre: "Pollo frito con papas",  desc: "Pollo dorado y crujiente con papas y ensalada.",    precio: 4.50, img: "img/pollo-frito.jpg",     emoji: "🍗", tag: "Popular" },
      { id: "co2", nombre: "Pollo encebollado",      desc: "Con cebolla guisada, arroz y ensalada.",            precio: 4.50, img: "img/pollo-encebollado.jpg", emoji: "🍛" },
      { id: "co3", nombre: "Carne asada",            desc: "Acompañada de arroz, frijoles y ensalada.",         precio: 6.00, img: "img/carne-asada.jpg",     emoji: "🥩" },
      { id: "co4", nombre: "Pescado frito",          desc: "Entero, crujiente, con ensalada y tajadas.",        precio: 6.50, img: "img/pescado-frito.jpg",   emoji: "🐟" },
      { id: "co5", nombre: "Sopa de gallina",        desc: "Caliente y casera, perfecta para el día.",          precio: 4.00, img: "img/sopa-gallina.jpg",    emoji: "🍲" },
      { id: "co6", nombre: "Desayuno típico",        desc: "Huevos, frijoles, plátano, crema y tortillas.",     precio: 3.50, img: "img/desayuno-tipico.jpg", emoji: "🍳" },
      { id: "co7", nombre: "Yuca frita con chicharrón", desc: "Crocante por fuera, suave por dentro.",          precio: 3.50, img: "img/yuca-frita.jpg",      emoji: "🍟" },
      { id: "co8", nombre: "Tamal de pollo",         desc: "Envuelto en hoja, con masa suave.",                 precio: 1.25, img: "img/tamal.jpg",           emoji: "🌽" }
    ]
  },
  bebidas: {
    nombre: "Bebidas", icono: "🥤",
    items: [
      { id: "be1", nombre: "Gaseosa",            desc: "Fría, a elegir sabor.",                    precio: 1.00, img: "img/gaseosa.jpg",   emoji: "🥤" },
      { id: "be2", nombre: "Agua embotellada",   desc: "Para acompañar tu comida.",                precio: 0.75, img: "img/agua.jpg",      emoji: "💧" },
      { id: "be3", nombre: "Horchata",           desc: "Tradicional salvadoreña, bien fría.",      precio: 1.00, img: "img/horchata.jpg",  emoji: "🥛" },
      { id: "be4", nombre: "Ensalada (fresco)",  desc: "Frutas picadas en jugo, refrescante.",     precio: 1.00, img: "img/ensalada.jpg",  emoji: "🍹" },
      { id: "be5", nombre: "Café",               desc: "Caliente, recién colado.",                 precio: 1.00, img: "img/cafe.jpg",      emoji: "☕" },
      { id: "be6", nombre: "Chocolate caliente", desc: "Espeso y reconfortante.",                  precio: 1.25, img: "img/chocolate.jpg", emoji: "🍫" }
    ]
  },
  licuados: {
    nombre: "Licuados", icono: "🍓",
    items: [
      { id: "li1", nombre: "Licuado de fresa",   desc: "Fresa natural, en leche o agua.",   precio: 2.00, img: "img/licuado-fresa.jpg",  emoji: "🍓", tag: "Favorito" },
      { id: "li2", nombre: "Licuado de banano",  desc: "Cremoso y energético.",             precio: 2.00, img: "img/licuado-banano.jpg", emoji: "🍌" },
      { id: "li3", nombre: "Licuado de melón",   desc: "Fresco y ligero.",                  precio: 2.00, img: "img/licuado-melon.jpg",  emoji: "🍈" },
      { id: "li4", nombre: "Licuado de papaya",  desc: "Dulce y suave.",                    precio: 2.00, img: "img/licuado-papaya.jpg", emoji: "🥭" },
      { id: "li5", nombre: "Licuado mixto",      desc: "Combinación de frutas de temporada.", precio: 2.25, img: "img/licuado-mixto.jpg", emoji: "🥤" }
    ]
  },
  frozen: {
    nombre: "Frozen", icono: "🧊",
    items: [
      { id: "fr1", nombre: "Frozen de fresa",     desc: "Helado y espumoso.",               precio: 2.50, img: "img/frozen-fresa.jpg",    emoji: "🍧", tag: "Refrescante" },
      { id: "fr2", nombre: "Frozen de limón",     desc: "Ácido y fresco, ideal para el calor.", precio: 2.50, img: "img/frozen-limon.jpg", emoji: "🍋" },
      { id: "fr3", nombre: "Frozen de mango",     desc: "Mango dulce y bien frío.",         precio: 2.50, img: "img/frozen-mango.jpg",    emoji: "🥭" },
      { id: "fr4", nombre: "Frozen de maracuyá",  desc: "Tropical e intenso.",              precio: 2.50, img: "img/frozen-maracuya.jpg", emoji: "🍹" },
      { id: "fr5", nombre: "Piña colada frozen",  desc: "Piña y coco, sin alcohol.",        precio: 3.00, img: "img/frozen-pina.jpg",     emoji: "🍍" }
    ]
  }
};

/* Imágenes de la galería (opcionales). Si no existe la foto, se muestra el emoji. */
const GALERIA = [
  { img: "img/galeria-1.jpg", emoji: "🫓" },
  { img: "img/galeria-2.jpg", emoji: "🍗" },
  { img: "img/galeria-3.jpg", emoji: "🍓" },
  { img: "img/galeria-4.jpg", emoji: "🍧" },
  { img: "img/galeria-5.jpg", emoji: "🥩" },
  { img: "img/galeria-6.jpg", emoji: "🍲" },
  { img: "img/galeria-7.jpg", emoji: "🥤" },
  { img: "img/galeria-8.jpg", emoji: "🍳" }
];

/* =========================================================
   CÓDIGO (normalmente no hace falta tocar nada de aquí abajo)
   ========================================================= */

const $ = (s, el = document) => el.querySelector(s);
const money = n => CONFIG.moneda + n.toFixed(2);
const todosLosItems = Object.values(MENU).flatMap(c => c.items);
const buscarItem = id => todosLosItems.find(i => i.id === id);

let categoriaActual = "pupusas";
let carrito = {};
try { carrito = JSON.parse(localStorage.getItem("zabdi_carrito")) || {}; } catch (e) { carrito = {}; }
// Quita del carrito productos que ya no existan en el menú
Object.keys(carrito).forEach(id => { if (!buscarItem(id)) delete carrito[id]; });

/* ---------- Imágenes con respaldo ---------- */
function imgConRespaldo(src, emoji, alt) {
  return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=&quot;emoji&quot;>${emoji}</span>'">`;
}

/* ---------- Menú ---------- */
function renderTabs() {
  $("#menuTabs").innerHTML = Object.entries(MENU).map(([key, c]) =>
    `<li class="nav-item"><button class="nav-link ${key === categoriaActual ? "active" : ""}" data-cat="${key}">${c.icono} ${c.nombre}</button></li>`
  ).join("");
}

function tarjeta(item) {
  return `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <article class="dish">
        <div class="dish-img">
          ${imgConRespaldo(item.img, item.emoji, item.nombre)}
          <span class="dish-price">${money(item.precio)}</span>
          ${item.tag ? `<span class="dish-tag">${item.tag}</span>` : ""}
        </div>
        <div class="dish-body">
          <h3>${item.nombre}</h3>
          <p>${item.desc}</p>
          <button class="btn btn-add" data-add="${item.id}"><i class="bi bi-plus-circle"></i> Agregar</button>
        </div>
      </article>
    </div>`;
}

function renderMenu() {
  const q = $("#buscador").value.trim().toLowerCase();
  let items;
  if (q) {
    items = todosLosItems.filter(i => (i.nombre + " " + i.desc).toLowerCase().includes(q));
  } else {
    items = MENU[categoriaActual].items;
  }
  $("#menuGrid").innerHTML = items.map(tarjeta).join("");
  $("#sinResultados").classList.toggle("d-none", items.length > 0);
}

$("#menuTabs").addEventListener("click", e => {
  const b = e.target.closest("[data-cat]");
  if (!b) return;
  categoriaActual = b.dataset.cat;
  $("#buscador").value = "";
  renderTabs();
  renderMenu();
});
$("#buscador").addEventListener("input", renderMenu);

$("#menuGrid").addEventListener("click", e => {
  const b = e.target.closest("[data-add]");
  if (b) agregar(b.dataset.add);
});

/* ---------- Carrito ---------- */
function guardar() {
  try { localStorage.setItem("zabdi_carrito", JSON.stringify(carrito)); } catch (e) {}
}

function agregar(id) {
  carrito[id] = (carrito[id] || 0) + 1;
  guardar();
  renderCarrito();
  $("#toastMsg").textContent = `${buscarItem(id).nombre} agregado al pedido`;
  bootstrap.Toast.getOrCreateInstance($("#toastAdd"), { delay: 1600 }).show();
}

function cambiarCantidad(id, delta) {
  carrito[id] = (carrito[id] || 0) + delta;
  if (carrito[id] <= 0) delete carrito[id];
  guardar();
  renderCarrito();
}

function totales() {
  let cantidad = 0, total = 0;
  Object.entries(carrito).forEach(([id, q]) => {
    const it = buscarItem(id);
    if (it) { cantidad += q; total += q * it.precio; }
  });
  return { cantidad, total };
}

function renderCarrito() {
  const ids = Object.keys(carrito);
  const { cantidad, total } = totales();
  $("#cartCount").textContent = cantidad;
  $("#cartTotal").textContent = money(total);

  if (!ids.length) {
    $("#cartItems").innerHTML = `<div class="cart-empty"><i class="bi bi-bag"></i>Tu pedido está vacío.<br>Agrega algo rico del menú.</div>`;
    return;
  }
  $("#cartItems").innerHTML = ids.map(id => {
    const it = buscarItem(id), q = carrito[id];
    return `
      <div class="cart-row">
        <div class="thumb">${imgConRespaldo(it.img, it.emoji, it.nombre)}</div>
        <div class="info"><strong>${it.nombre}</strong><small>${money(it.precio)} c/u · ${money(it.precio * q)}</small></div>
        <div class="qty">
          <button data-menos="${id}" aria-label="Quitar uno">−</button>
          <span>${q}</span>
          <button data-mas="${id}" aria-label="Agregar uno">+</button>
        </div>
      </div>`;
  }).join("");
}

$("#cartItems").addEventListener("click", e => {
  const mas = e.target.closest("[data-mas]"), menos = e.target.closest("[data-menos]");
  if (mas) cambiarCantidad(mas.dataset.mas, 1);
  if (menos) cambiarCantidad(menos.dataset.menos, -1);
});

$("#btnVaciar").addEventListener("click", () => { carrito = {}; guardar(); renderCarrito(); });

/* ---------- WhatsApp ---------- */
function urlWhatsApp(texto) {
  return `https://wa.me/${CONFIG.telefono}?text=${encodeURIComponent(texto)}`;
}

$("#btnEnviar").addEventListener("click", () => {
  const { cantidad, total } = totales();
  if (!cantidad) { alert("Agrega al menos un producto a tu pedido."); return; }
  const nombre = $("#clienteNombre").value.trim();
  const nota = $("#clienteNota").value.trim();
  const lineas = Object.entries(carrito).map(([id, q]) => {
    const it = buscarItem(id);
    return `• ${q} x ${it.nombre} — ${money(it.precio * q)}`;
  });
  const msg = [
    "Hola ZABDI 👋, quiero hacer este pedido:",
    "",
    ...lineas,
    "",
    `Total: ${money(total)}`,
    `Tipo: ${$("#tipoPedido").value}`,
    nombre ? `Nombre: ${nombre}` : "",
    nota ? `Notas: ${nota}` : ""
  ].filter((l, i, a) => l !== "" || (a[i - 1] !== "" && i !== a.length - 1)).join("\n");
  window.open(urlWhatsApp(msg), "_blank", "noopener");
});

document.querySelectorAll(".js-whatsapp").forEach(a => {
  a.href = urlWhatsApp("Hola ZABDI 👋, quisiera información.");
  a.target = "_blank";
  a.rel = "noopener";
});

/* ---------- Galería ---------- */
$("#galleryGrid").innerHTML = GALERIA.map(g =>
  `<div class="col-6 col-md-3 reveal"><div class="gallery-item">${imgConRespaldo(g.img, g.emoji, "Platillo de ZABDI")}</div></div>`
).join("");

/* ---------- Sección Nosotros: foto con respaldo ---------- */
(function () {
  const probe = new Image();
  probe.onload = () => { $("#aboutImg").innerHTML = ""; };
  probe.src = "img/nosotros.jpg";
})();

/* ---------- Ubicación ---------- */
$("#horarioTxt").textContent = CONFIG.horario;
$("#telTxt").textContent = CONFIG.telefonoVisible;
const q = encodeURIComponent(CONFIG.direccionMapa);
$("#mapFrame").src = `https://www.google.com/maps?q=${q}&output=embed`;
$("#btnMapa").href = `https://www.google.com/maps/search/?api=1&query=${q}`;
$("#year").textContent = new Date().getFullYear();

/* ---------- Navbar y animaciones ---------- */
const nav = $("#navbar");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Cierra el menú móvil al elegir un enlace
document.querySelectorAll("#menuNav .nav-link").forEach(l =>
  l.addEventListener("click", () => {
    const c = bootstrap.Collapse.getInstance($("#menuNav"));
    if (c) c.hide();
  })
);

const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---------- Inicio ---------- */
renderTabs();
renderMenu();
renderCarrito();
