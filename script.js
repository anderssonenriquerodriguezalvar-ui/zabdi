/* =====================================================
   ZABDI - JAVASCRIPT
   ===================================================== */


/* =====================================================
   NAVBAR AL HACER SCROLL
   ===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   BOTÓN VOLVER ARRIBA
   ===================================================== */

const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        btnArriba.classList.add("mostrar");

    } else {

        btnArriba.classList.remove("mostrar");

    }

});


btnArriba.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   CERRAR NAVBAR EN CELULAR
   ===================================================== */

const enlacesNavbar = document.querySelectorAll(".navbar .nav-link");
const menuNavbar = document.getElementById("menu");

enlacesNavbar.forEach(enlace => {

    enlace.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            const bootstrapCollapse =
                bootstrap.Collapse.getInstance(menuNavbar);

            if (bootstrapCollapse) {
                bootstrapCollapse.hide();
            }

        }

    });

});


/* =====================================================
   ACTIVAR ENLACE DEL NAVBAR SEGÚN LA SECCIÓN
   ===================================================== */

const secciones = document.querySelectorAll("section[id]");
const enlaces = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let posicionActual = window.scrollY + 150;

    secciones.forEach(seccion => {

        const inicio = seccion.offsetTop;
        const altura = seccion.offsetHeight;
        const id = seccion.getAttribute("id");

        if (
            posicionActual >= inicio &&
            posicionActual < inicio + altura
        ) {

            enlaces.forEach(enlace => {

                enlace.classList.remove("active");

                if (
                    enlace.getAttribute("href") === "#" + id
                ) {

                    enlace.classList.add("active");

                }

            });

        }

    });

});