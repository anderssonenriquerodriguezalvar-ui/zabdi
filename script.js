/* =========================
   AÑO AUTOMÁTICO
========================= */

document.getElementById("anio").textContent = new Date().getFullYear();


/* =========================
   FORMULARIO DE CONTACTO
========================= */

const formulario = document.getElementById("formContacto");
const mensajeFormulario = document.getElementById("mensajeFormulario");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || mensaje === "") {

        mensajeFormulario.innerHTML = `
            <div class="alert alert-warning mt-3">
                Por favor completa los campos obligatorios.
            </div>
        `;

        return;
    }


    /*
        Por ahora mostramos una confirmación.

        Cuando tengas el correo, WhatsApp o Formspree
        que utilizará ZABDI, aquí podemos conectar
        el formulario para que los mensajes lleguen
        realmente al restaurante.
    */

    mensajeFormulario.innerHTML = `
        <div class="alert alert-success mt-3">
            Gracias, ${nombre}. Tu mensaje fue preparado correctamente.
        </div>
    `;


    console.log("Nombre:", nombre);
    console.log("Teléfono:", telefono);
    console.log("Mensaje:", mensaje);


    formulario.reset();

});


/* =========================
   CERRAR NAVBAR EN CELULAR
========================= */

const enlacesNavbar = document.querySelectorAll(".navbar .nav-link");
const menuNavbar = document.getElementById("menuPrincipal");

enlacesNavbar.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            const bootstrapCollapse =
                bootstrap.Collapse.getInstance(menuNavbar);

            if (bootstrapCollapse) {
                bootstrapCollapse.hide();
            }
        }

    });

});