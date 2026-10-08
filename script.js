/* =========================================
   ZABDI RESTAURANTE
   JAVASCRIPT PRINCIPAL
========================================= */


/* =========================================
   AÑO AUTOMÁTICO
========================================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =========================================
   NAVBAR AL HACER SCROLL
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   BOTÓN VOLVER ARRIBA
========================================= */

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        btnTop.classList.add("show");
    } else {
        btnTop.classList.remove("show");
    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   MENÚ ACTIVO
========================================= */

const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 130;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${current}`) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   CERRAR MENÚ MOBILE
========================================= */

const menuPrincipal = document.getElementById("menuPrincipal");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            const menu = bootstrap.Collapse.getInstance(menuPrincipal);

            if (menu) {
                menu.hide();
            }

        }

    });

});


/* =========================================
   MODAL DE PEDIDO
========================================= */

let productoActual = "";


/**
 * Abre el modal con el producto seleccionado.
 */
function mostrarPedido(producto) {

    productoActual = producto;

    const productoSeleccionado =
        document.getElementById("productoSeleccionado");

    productoSeleccionado.textContent = producto;

    const cantidad =
        document.getElementById("cantidad");

    cantidad.value = 1;

    const modalElement =
        document.getElementById("pedidoModal");

    const modal =
        bootstrap.Modal.getOrCreateInstance(modalElement);

    modal.show();
}


/**
 * Confirma el pedido.
 */
function confirmarPedido() {

    const cantidad =
        parseInt(document.getElementById("cantidad").value);

    if (isNaN(cantidad) || cantidad < 1) {

        alert("Por favor, selecciona una cantidad válida.");

        return;
    }

    alert(
        `Pedido seleccionado:\n\n${cantidad} x ${productoActual}\n\nGracias por elegir ZABDI.`
    );

    const modalElement =
        document.getElementById("pedidoModal");

    const modal =
        bootstrap.Modal.getInstance(modalElement);

    if (modal) {
        modal.hide();
    }

}


/* =========================================
   ANIMACIÓN DE ENTRADA
========================================= */

const animatedElements = document.querySelectorAll(
    ".food-card, .pupusa-card, .info-card, .drink-item, .about-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

animatedElements.forEach(element => {

    element.classList.add("scroll-hidden");

    observer.observe(element);

});


/* =========================================
   ESTILOS DINÁMICOS PARA ANIMACIÓN
========================================= */

const animationStyle = document.createElement("style");

animationStyle.textContent = `

    .scroll-hidden {
        opacity: 0;
        transform: translateY(25px);
        transition:
            opacity 0.7s ease,
            transform 0.7s ease;
    }

    .scroll-hidden.visible {
        opacity: 1;
        transform: translateY(0);
    }

`;

document.head.appendChild(animationStyle);


/* =========================================
   VALIDACIÓN DE CANTIDAD
========================================= */

const cantidadInput =
    document.getElementById("cantidad");

if (cantidadInput) {

    cantidadInput.addEventListener("input", () => {

        if (cantidadInput.value < 1) {
            cantidadInput.value = 1;
        }

    });

}


/* =========================================
   CONSOLA DE DESARROLLO
========================================= */

console.log("ZABDI Restaurante cargado correctamente.");