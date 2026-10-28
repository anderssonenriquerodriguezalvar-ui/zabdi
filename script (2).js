/* =========================================================
   ZABDI RESTAURANTE
   Lo que normalmente vas a cambiar está al inicio:
   CONFIG (datos del negocio) y MENU (platillos y precios).
   ========================================================= */

const CONFIG = {
  telefono: "50370214691",            // código 503 + número
  telefonoVisible: "7021 4691",
  direccion: "Tecpan, desvío de Apico, El Salvador",
  direccionMapa: "Desvío de Apico, Tecpan, El Salvador",
  horario: "",                        // Ejemplo: "Lunes a domingo, 7:00 am a 9:00 pm". Vacío = no se muestra.
  moneda: "$",
  usarFotos: false,                   // Ponlo en true cuando subas fotos a la carpeta img/
  carpetaFotos: "img/"
};

/* Los precios son de ejemplo: cámbialos por los reales.
   ico = ilustración que se muestra  |  c y acc = colores de la ilustración
   foto = nombre del archivo dentro de img/ (solo se usa si usarFotos es true) */
const MENU = {
  pupusas: {
    nombre: "Pupusas", tile: "#FFE9A8", nota: "Precio por unidad",
    items: [
      { id: "pu1", nombre: "Pupusa revuelta", desc: "Chicharrón, queso y frijol en maíz recién hecho.", precio: 1.00, ico: "pupusa", acc: "#D2693A", foto: "pupusa-revuelta.jpg", tag: "Favorita" },
      { id: "pu2", nombre: "Pupusa de queso", desc: "Queso fundido que se estira en cada mordida.", precio: 1.00, ico: "pupusa", acc: "#FFD84D", foto: "pupusa-queso.jpg" },
      { id: "pu3", nombre: "Pupusa de frijol con queso", desc: "Clásica y reconfortante.", precio: 1.00, ico: "pupusa", acc: "#6B3B2A", foto: "pupusa-frijol.jpg" },
      { id: "pu4", nombre: "Pupusa de chicharrón", desc: "Cerdo sazonado y bien jugoso.", precio: 1.00, ico: "pupusa", acc: "#C65A3A", foto: "pupusa-chicharron.jpg" },
      { id: "pu5", nombre: "Pupusa de loroco con queso", desc: "El aroma del loroco con queso cremoso.", precio: 1.25, ico: "pupusa", acc: "#6BA34A", foto: "pupusa-loroco.jpg" },
      { id: "pu6", nombre: "Pupusa de ayote", desc: "Suave y dulce, para variar.", precio: 1.25, ico: "pupusa", acc: "#F29A2E", foto: "pupusa-ayote.jpg" },
      { id: "pu7", nombre: "Combo de 3 pupusas con horchata", desc: "Tres pupusas a tu gusto y horchata fría.", precio: 3.50, ico: "combo", c: "#F3E8D2", acc: "#FFD84D", foto: "combo-pupusas.jpg", tag: "Combo" }
    ]
  },
  comida: {
    nombre: "Comida", tile: "#FFD9C2", nota: "",
    items: [
      { id: "co1", nombre: "Pollo frito con papas", desc: "Pollo dorado y crujiente con papas y ensalada.", precio: 4.50, ico: "pollo", c: "#D9822B", foto: "pollo-frito.jpg", tag: "Popular" },
      { id: "co2", nombre: "Pollo encebollado", desc: "Con cebolla guisada, arroz y ensalada.", precio: 4.50, ico: "plato", c: "#D9822B", foto: "pollo-encebollado.jpg" },
      { id: "co3", nombre: "Carne asada", desc: "Con arroz, frijoles y ensalada.", precio: 6.00, ico: "plato", c: "#8B3A22", foto: "carne-asada.jpg" },
      { id: "co4", nombre: "Pescado frito", desc: "Entero y crujiente, con ensalada y tajadas.", precio: 6.50, ico: "pescado", c: "#6F9FB0", foto: "pescado-frito.jpg" },
      { id: "co5", nombre: "Sopa de gallina", desc: "Caliente y casera.", precio: 4.00, ico: "sopa", c: "#C4492F", foto: "sopa-gallina.jpg" },
      { id: "co6", nombre: "Desayuno típico", desc: "Huevos, frijoles, plátano, crema y tortillas.", precio: 3.50, ico: "desayuno", foto: "desayuno-tipico.jpg" },
      { id: "co7", nombre: "Yuca frita con chicharrón", desc: "Crocante por fuera, suave por dentro.", precio: 3.50, ico: "yuca", foto: "yuca-frita.jpg" },
      { id: "co8", nombre: "Tamal de pollo", desc: "Envuelto en hoja, con masa suave.", precio: 1.25, ico: "tamal", foto: "tamal.jpg" }
    ]
  },
  bebidas: {
    nombre: "Bebidas", tile: "#D6ECF4", nota: "",
    items: [
      { id: "be1", nombre: "Gaseosa", desc: "Bien fría, a elegir sabor.", precio: 1.00, ico: "vaso", c: "#A8321F", acc: "#fff", foto: "gaseosa.jpg" },
      { id: "be2", nombre: "Agua embotellada", desc: "Para acompañar tu comida.", precio: 0.75, ico: "agua", foto: "agua.jpg" },
      { id: "be3", nombre: "Horchata", desc: "Tradicional y bien fría.", precio: 1.00, ico: "vaso", c: "#F3E8D2", acc: "#C8301F", foto: "horchata.jpg" },
      { id: "be4", nombre: "Ensalada", desc: "Fruta picada en jugo, refrescante.", precio: 1.00, ico: "vaso", c: "#E8603C", acc: "#2E6B3A", foto: "ensalada.jpg" },
      { id: "be5", nombre: "Café", desc: "Caliente y recién colado.", precio: 1.00, ico: "taza", c: "#4A2A1C", foto: "cafe.jpg" },
      { id: "be6", nombre: "Chocolate caliente", desc: "Espeso y reconfortante.", precio: 1.25, ico: "taza", c: "#7A4A2E", foto: "chocolate.jpg" }
    ]
  },
  licuados: {
    nombre: "Licuados", tile: "#FFD6DE", nota: "Indica en las notas si lo quieres en leche o en agua",
    items: [
      { id: "li1", nombre: "Licuado de fresa", desc: "Fresa natural, cremoso y frío.", precio: 2.00, ico: "licuado", c: "#F2708A", acc: "#D62E4E", foto: "licuado-fresa.jpg", tag: "Favorito" },
      { id: "li2", nombre: "Licuado de banano", desc: "Cremoso y energético.", precio: 2.00, ico: "licuado", c: "#F5DB7A", acc: "#E6B422", foto: "licuado-banano.jpg" },
      { id: "li3", nombre: "Licuado de melón", desc: "Fresco y ligero.", precio: 2.00, ico: "licuado", c: "#BFE19A", acc: "#7DBA4A", foto: "licuado-melon.jpg" },
      { id: "li4", nombre: "Licuado de papaya", desc: "Dulce y suave.", precio: 2.00, ico: "licuado", c: "#F59A5A", acc: "#E2702B", foto: "licuado-papaya.jpg" },
      { id: "li5", nombre: "Licuado mixto", desc: "Frutas de temporada en un solo vaso.", precio: 2.25, ico: "licuado", c: "#C77DDB", acc: "#8E3FB0", foto: "licuado-mixto.jpg" }
    ]
  },
  frozen: {
    nombre: "Frozen", tile: "#DDF0DE", nota: "",
    items: [
      { id: "fr1", nombre: "Frozen de fresa", desc: "Helado y espumoso.", precio: 2.50, ico: "frozen", c: "#F2708A", foto: "frozen-fresa.jpg", tag: "Refrescante" },
      { id: "fr2", nombre: "Frozen de limón", desc: "Ácido y fresco, ideal para el calor.", precio: 2.50, ico: "frozen", c: "#C9E265", foto: "frozen-limon.jpg" },
      { id: "fr3", nombre: "Frozen de mango", desc: "Mango dulce y bien frío.", precio: 2.50, ico: "frozen", c: "#F8B133", foto: "frozen-mango.jpg" },
      { id: "fr4", nombre: "Frozen de maracuyá", desc: "Tropical e intenso.", precio: 2.50, ico: "frozen", c: "#E9C46A", foto: "frozen-maracuya.jpg" },
      { id: "fr5", nombre: "Piña colada frozen", desc: "Piña y coco, sin alcohol.", precio: 3.00, ico: "frozen", c: "#F7E08A", foto: "frozen-pina.jpg" }
    ]
  }
};

/* =========================================================
   CÓDIGO (normalmente no hace falta tocar nada de aquí abajo)
   ========================================================= */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const money = n => CONFIG.moneda + n.toFixed(2);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const CATEGORIAS = Object.keys(MENU);
const TODOS = CATEGORIAS.flatMap(k => MENU[k].items.map(it => ({ ...it, cat: k })));
const buscar = id => TODOS.find(i => i.id === id);

/* ---------- Estado ---------- */
let categoria = CATEGORIAS[0];
let consulta = "";
let carrito = {};
try { carrito = JSON.parse(localStorage.getItem("zabdi_carrito")) || {}; } catch (e) { carrito = {}; }
Object.keys(carrito).forEach(id => { if (!buscar(id) || !(carrito[id] > 0)) delete carrito[id]; });

const guardar = () => { try { localStorage.setItem("zabdi_carrito", JSON.stringify(carrito)); } catch (e) {} };

/* ---------- Piezas de interfaz ---------- */
const icono = n => `<svg class="i" aria-hidden="true"><use href="#i-${n}"/></svg>`;

function ilustracion(it) {
  const vars = [it.c ? `--c:${it.c}` : "", it.acc ? `--acc:${it.acc}` : ""].filter(Boolean).join(";");
  return `<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"${vars ? ` style="${vars}"` : ""}><use href="#i-${it.ico}"/></svg>`;
}

function miniatura(it) {
  const foto = CONFIG.usarFotos && it.foto
    ? `<img src="${CONFIG.carpetaFotos}${esc(it.foto)}" alt="" loading="lazy" onerror="this.remove()">`
    : "";
  return `<span class="thumb" style="--tile:${MENU[it.cat].tile}">${ilustracion(it)}${foto}</span>`;
}

function accion(id) {
  const it = buscar(id), q = carrito[id] || 0;
  if (!q) {
    return `<button class="add" type="button" data-add="${id}" aria-label="Agregar ${esc(it.nombre)} al pedido">${icono("plus")}</button>`;
  }
  return `<div class="step-ctl" role="group" aria-label="Cantidad de ${esc(it.nombre)}">
    <button type="button" data-menos="${id}" aria-label="Quitar uno de ${esc(it.nombre)}">${icono("minus")}</button>
    <output aria-live="polite">${q}</output>
    <button type="button" data-mas="${id}" aria-label="Agregar uno más de ${esc(it.nombre)}">${icono("plus")}</button>
  </div>`;
}

/* ---------- Menú ---------- */
function renderTabs() {
  $("#tabs").innerHTML = CATEGORIAS.map(k =>
    `<button class="tab" type="button" data-cat="${k}" aria-pressed="${!consulta && k === categoria}">${MENU[k].nombre}</button>`
  ).join("");
}

function renderBoard() {
  const q = consulta.toLowerCase();
  let lista;
  if (q) {
    lista = TODOS.filter(i => (i.nombre + " " + i.desc).toLowerCase().includes(q));
    $("#boardTitle").textContent = `Resultados para “${consulta}”`;
    $("#boardNote").textContent = "";
  } else {
    lista = TODOS.filter(i => i.cat === categoria);
    $("#boardTitle").textContent = MENU[categoria].nombre;
    $("#boardNote").textContent = MENU[categoria].nota;
  }
  $("#items").innerHTML = lista.map(it => `
    <li class="item" data-item="${it.id}">
      ${miniatura(it)}
      <div class="item-main">
        <div class="item-top"><h4>${esc(it.nombre)}</h4><span class="leader" aria-hidden="true"></span><span class="price">${money(it.precio)}</span></div>
        <p class="item-desc">${esc(it.desc)}</p>
        ${it.tag ? `<span class="tag">${esc(it.tag)}</span>` : ""}
      </div>
      <div class="item-act">${accion(it.id)}</div>
    </li>`).join("");
  $("#sinResultados").hidden = lista.length > 0;
}

$("#tabs").addEventListener("click", e => {
  const b = e.target.closest("[data-cat]");
  if (!b) return;
  categoria = b.dataset.cat;
  consulta = "";
  $("#buscador").value = "";
  renderTabs();
  renderBoard();
});

$("#buscador").addEventListener("input", e => {
  consulta = e.target.value.trim();
  renderTabs();
  renderBoard();
});

/* ---------- Pedido ---------- */
function totales() {
  let cantidad = 0, total = 0;
  for (const [id, q] of Object.entries(carrito)) {
    const it = buscar(id);
    if (it) { cantidad += q; total += q * it.precio; }
  }
  return { cantidad, total };
}

function cambiar(id, delta, enfocar) {
  const antes = carrito[id] || 0;
  const despues = Math.max(0, antes + delta);
  if (despues === 0) delete carrito[id]; else carrito[id] = Math.min(despues, 99);
  guardar();

  // Actualiza solo las filas afectadas para no perder el foco del teclado
  $$(`[data-item="${id}"] .item-act`).forEach(el => { el.innerHTML = accion(id); });
  const fila = $(`[data-item="${id}"] .item-act`);
  if (enfocar === "menu" && fila) {
    (fila.querySelector(delta > 0 ? "[data-mas], [data-add]" : "[data-menos], [data-add]") || fila.querySelector("button"))?.focus();
  }

  renderResumen();
  renderCarrito(enfocar === "carrito" ? { id, delta } : null);
}

document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  const mas = e.target.closest("[data-mas]");
  const menos = e.target.closest("[data-menos]");
  const dentro = e.target.closest("#drawer") ? "carrito" : "menu";
  if (add) cambiar(add.dataset.add, 1, dentro);
  else if (mas) cambiar(mas.dataset.mas, 1, dentro);
  else if (menos) cambiar(menos.dataset.menos, -1, dentro);
});

let primeraVez = true;
function renderResumen() {
  const { cantidad, total } = totales();
  const badge = $("#cartCount");
  badge.textContent = cantidad;
  if (!primeraVez) { badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump"); }
  $("#cartTotal").textContent = money(total);
  $("#cartbarQty").textContent = cantidad === 1 ? "1 producto" : `${cantidad} productos`;
  $("#cartbarTotal").textContent = money(total);
  $("#cartbar").hidden = cantidad === 0;
  document.body.classList.toggle("has-items", cantidad > 0);
  $("#btnEnviar").disabled = cantidad === 0;
  $("#btnVaciar").hidden = cantidad === 0;
  primeraVez = false;
}

function renderCarrito(foco) {
  const ids = Object.keys(carrito).filter(buscar);
  const cont = $("#cartItems");

  if (!ids.length) {
    cont.innerHTML = `<div class="cart-empty">
      <svg class="ic" viewBox="0 0 64 64" aria-hidden="true" style="--acc:#FFD84D"><use href="#i-pupusa"/></svg>
      <p>Aún no hay nada en tu pedido. Elige tus pupusas y lo que se te antoje en el menú.</p>
      <a class="btn btn-dark" href="#menu" data-cerrar>Ir al menú</a>
    </div>`;
    if (foco) cont.focus();
    return;
  }

  cont.innerHTML = ids.map(id => {
    const it = buscar(id), q = carrito[id];
    return `<div class="cart-row" data-fila="${id}">
      ${miniatura(it)}
      <div><strong>${esc(it.nombre)}</strong><small>${money(it.precio)} c/u, ${money(it.precio * q)}</small></div>
      ${accion(id)}
    </div>`;
  }).join("");

  if (foco) {
    const fila = $(`[data-fila="${foco.id}"]`);
    const objetivo = fila && fila.querySelector(foco.delta > 0 ? "[data-mas]" : "[data-menos]");
    (objetivo || cont).focus();
  }
}

$("#btnVaciar").addEventListener("click", () => {
  carrito = {};
  guardar();
  $$(".item-act").forEach(el => { el.innerHTML = accion(el.closest("[data-item]").dataset.item); });
  renderResumen();
  renderCarrito({});
});

/* ---------- Abrir y cerrar el pedido ---------- */
const drawer = $("#drawer"), scrim = $("#scrim");
let abridor = null;

function abrirPedido(desde) {
  abridor = desde || document.activeElement;
  drawer.classList.add("open");
  scrim.classList.add("on");
  document.body.classList.add("lock");
  $("#closeCart").focus();
}

function cerrarPedido() {
  if (!drawer.classList.contains("open")) return;
  drawer.classList.remove("open");
  scrim.classList.remove("on");
  document.body.classList.remove("lock");
  if (abridor && document.contains(abridor)) abridor.focus();
}

$("#openCart").addEventListener("click", e => abrirPedido(e.currentTarget));
$("#cartbar").addEventListener("click", e => abrirPedido(e.currentTarget));
$("#closeCart").addEventListener("click", cerrarPedido);
scrim.addEventListener("click", cerrarPedido);
drawer.addEventListener("click", e => { if (e.target.closest("[data-cerrar]")) cerrarPedido(); });

document.addEventListener("keydown", e => {
  if (!drawer.classList.contains("open")) return;
  if (e.key === "Escape") { cerrarPedido(); return; }
  if (e.key !== "Tab") return;
  const f = $$("button, a[href], input, select, textarea", drawer).filter(el => !el.disabled && !el.hidden && el.offsetParent !== null);
  if (!f.length) return;
  const primero = f[0], ultimo = f[f.length - 1];
  if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
  else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
});

/* ---------- WhatsApp ---------- */
const urlWhatsApp = texto => `https://wa.me/${CONFIG.telefono}?text=${encodeURIComponent(texto)}`;

try { $("#clienteNombre").value = localStorage.getItem("zabdi_nombre") || ""; } catch (e) {}
$("#clienteNombre").addEventListener("input", e => { try { localStorage.setItem("zabdi_nombre", e.target.value); } catch (err) {} });

$("#orderForm").addEventListener("submit", e => {
  e.preventDefault();
  const { cantidad, total } = totales();
  if (!cantidad) return;

  const nombre = $("#clienteNombre").value.trim();
  const nota = $("#clienteNota").value.trim();
  const tipo = $('input[name="tipo"]:checked').value;
  const lineas = Object.entries(carrito)
    .filter(([id]) => buscar(id))
    .map(([id, q]) => `• ${q} x ${buscar(id).nombre} (${money(buscar(id).precio * q)})`);

  const partes = ["Hola ZABDI, quiero hacer este pedido:", "", ...lineas, "", `Total: ${money(total)}`, `Tipo: ${tipo}`];
  if (nombre) partes.push(`Nombre: ${nombre}`);
  if (nota) partes.push(`Notas: ${nota}`);

  window.open(urlWhatsApp(partes.join("\n")), "_blank", "noopener");
});

$$(".js-wa").forEach(a => { a.href = urlWhatsApp("Hola ZABDI, quisiera hacer una consulta."); });

/* ---------- Datos del negocio ---------- */
$("#dirTxt").textContent = CONFIG.direccion;
const tel = $("#telTxt");
tel.textContent = CONFIG.telefonoVisible;
tel.href = `tel:+${CONFIG.telefono}`;
if (CONFIG.horario) {
  $("#horarioTxt").textContent = CONFIG.horario;
  $("#rowHorario").hidden = false;
}
const consultaMapa = encodeURIComponent(CONFIG.direccionMapa);
$("#mapFrame").src = `https://www.google.com/maps?q=${consultaMapa}&output=embed`;
$("#btnMapa").href = `https://www.google.com/maps/search/?api=1&query=${consultaMapa}`;
$("#year").textContent = new Date().getFullYear();

/* ---------- Navegación en celular ---------- */
const burger = $("#burger"), nav = $("#nav");
const cerrarNav = () => { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); burger.setAttribute("aria-label", "Abrir navegación"); };
burger.addEventListener("click", () => {
  const abierto = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(abierto));
  burger.setAttribute("aria-label", abierto ? "Cerrar navegación" : "Abrir navegación");
});
$$("a", nav).forEach(a => a.addEventListener("click", cerrarNav));
document.addEventListener("keydown", e => { if (e.key === "Escape" && nav.classList.contains("open")) { cerrarNav(); burger.focus(); } });

/* ---------- Galería (solo si hay fotos) ---------- */
async function cargarGaleria() {
  if (!CONFIG.usarFotos) return;
  const total = 8;
  const rutas = await Promise.all(Array.from({ length: total }, (_, i) => new Promise(res => {
    const im = new Image();
    const src = `${CONFIG.carpetaFotos}galeria-${i + 1}.jpg`;
    im.onload = () => res(src);
    im.onerror = () => res(null);
    im.src = src;
  })));
  const ok = rutas.filter(Boolean);
  if (ok.length < 3) return;
  $("#galleryGrid").innerHTML = ok.map(src => `<li><img src="${src}" alt="Platillo de ZABDI" loading="lazy"></li>`).join("");
  $("#galeria").hidden = false;
}

/* ---------- Inicio ---------- */
renderTabs();
renderBoard();
renderResumen();
renderCarrito();
cargarGaleria();
