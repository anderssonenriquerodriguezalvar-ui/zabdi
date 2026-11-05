
/* =====================================
   ZABDI RESTAURANTE - JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // AÑO AUTOMÁTICO
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // CAMBIAR APARIENCIA DE NAVBAR AL DESPLAZARSE
    const navbar = document.getElementById("navbar");

    function updateNavbar() {
        if (!navbar) return;

        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();

    // FILTROS DE COMIDAS Y BEBIDAS
    const tabs = document.querySelectorAll(".menu-tab");
    const products = document.querySelectorAll(".product-item");

    function filterProducts(category) {

        products.forEach(product => {

            const productCategory = product.dataset.category;

            product.hidden = productCategory !== category;

        });

        tabs.forEach(tab => {

            const isActive = tab.dataset.category === category;

            tab.classList.toggle("active", isActive);

            tab.setAttribute(
                "aria-pressed",
                isActive ? "true" : "false"
            );

        });
    }

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            filterProducts(tab.dataset.category);

        });

    });

    // INICIAR MOSTRANDO COMIDAS
    filterProducts("comidas");

    // CERRAR MENÚ MÓVIL AL SELECCIONAR UNA SECCIÓN
    const navLinks = document.querySelectorAll(
        "#menuNavegacion .nav-link, #menuNavegacion .btn-nav"
    );

    const navbarMenu = document.getElementById("menuNavegacion");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (
                navbarMenu &&
                navbarMenu.classList.contains("show")
            ) {

                const collapse = bootstrap.Collapse.getOrCreateInstance(
                    navbarMenu
                );

                collapse.hide();

            }

        });

    });

    // BOTÓN VOLVER ARRIBA
    const backToTop = document.getElementById("backToTop");

    function updateBackToTop() {

        if (!backToTop) return;

        backToTop.classList.toggle(
            "show",
            window.scrollY > 450
        );

    }

    window.addEventListener("scroll", updateBackToTop);
    updateBackToTop();

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // ANIMACIONES AL DESPLAZARSE
    const elementsToReveal = document.querySelectorAll(
        ".section-heading, .about-image, .about-section .col-lg-6, " +
        ".product-card, .gallery-item, .location-details, .location-card"
    );

    elementsToReveal.forEach(element => {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observerInstance.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        elementsToReveal.forEach(element => {
            observer.observe(element);
        });

    } else {

        elementsToReveal.forEach(element => {
            element.classList.add("visible");
        });

    }

    console.log("ZABDI Restaurante iniciado correctamente.");

});
