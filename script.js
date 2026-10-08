/* =====================================================
   ZABDI RESTAURANTE
   JavaScript principal
===================================================== */


/* =====================================================
   AÑO AUTOMÁTICO
===================================================== */

const anio = document.getElementById("anio");

if (anio) {
    anio.textContent = new Date().getFullYear();
}


/* =====================================================
   FORMULARIO DE CONTACTO
===================================================== */

const formulario = document.getElementById("formContacto");
const mensajeFormulario = document.getElementById("mensajeFormulario");

if (formulario) {

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nombre =
            document.getElementById("nombre").value.trim();

        const telefono =
            document.getElementById("telefono").value.trim();

        const mensaje =
            document.getElementById("mensaje").value.trim();


        if (nombre === "" || mensaje === "") {

            mensajeFormulario.innerHTML = `
                <div class="alert alert-warning">
                    <i class="bi bi-exclamation-circle"></i>
                    Completa tu nombre y tu mensaje.
                </div>
            `;

            return;
        }


        /*
         * Por ahora el formulario funciona
         * visualmente y valida los datos.
         *
         * Más adelante se puede conectar
         * a Formspree, EmailJS, PHP o una
         * base de datos para recibir mensajes.
         */


        mensajeFormulario.innerHTML = `
            <div class="alert alert-success">
                <i class="bi bi-check-circle-fill"></i>
                Gracias, ${nombre}. Tu mensaje fue recibido.
            </div>
        `;


        console.log("Mensaje de ZABDI");
        console.log("Nombre:", nombre);
        console.log("Teléfono:", telefono);
        console.log("Mensaje:", mensaje);


        formulario.reset();

    });

}


/* =====================================================
   NAVBAR EN TELÉFONOS
===================================================== */

const enlaces =
    document.querySelectorAll(".navbar .nav-link");

const menu =
    document.getElementById("menuPrincipal");


enlaces.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            const instancia =
                bootstrap.Collapse.getInstance(menu);

            if (instancia) {
                instancia.hide();
            }

        }

    });

});


/* =====================================================
   CAMBIO DE ENLACE ACTIVO
===================================================== */

const secciones =
    document.querySelectorAll("section[id], header[id]");


window.addEventListener("scroll", function () {

    let posicionActual =
        window.scrollY + 150;


    secciones.forEach(function (seccion) {

        const inicio =
            seccion.offsetTop;

        const final =
            inicio + seccion.offsetHeight;

        const id =
            seccion.getAttribute("id");


        if (
            posicionActual >= inicio &&
            posicionActual < final
        ) {

            document
                .querySelectorAll(".navbar .nav-link")
                .forEach(function (link) {

                    link.classList.remove("active");

                });


            const enlaceActivo =
                document.querySelector(
                    `.navbar .nav-link[href="#${id}"]`
                );


            if (enlaceActivo) {

                enlaceActivo.classList.add("active");

            }

        }

    });

});


/* =====================================================
   ANIMACIÓN SUAVE DE ELEMENTOS
===================================================== */

const elementos =
    document.querySelectorAll(
        ".food-card, .flavor-item, .value-card, .contact-card"
    );


const observador =
    new IntersectionObserver(
        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add(
                        "elemento-visible"
                    );

                    observador.unobserve(
                        entrada.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


elementos.forEach(function (elemento) {

    elemento.classList.add(
        "elemento-oculto"
    );

    observador.observe(elemento);

});