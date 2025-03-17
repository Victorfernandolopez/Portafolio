// proyecto-detalles.js - Script para mejorar la interactividad en la página de detalles del proyecto

document.addEventListener("DOMContentLoaded", function () {
    // Scroll suave para los enlaces internos
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Animación al hacer scroll (fade-in)
    const elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Ejecutar al inicio para verificar elementos visibles

    // Ampliar imágenes al hacer clic (Galería Modal)
    const images = document.querySelectorAll(".galeria img");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    images.forEach(img => {
        img.addEventListener("click", function () {
            modal.innerHTML = `<img src="${img.src}" alt="Ampliada">`;
            modal.classList.add("open");
        });
    });

    modal.addEventListener("click", function () {
        modal.classList.remove("open");
    });
});
