"use strict";

(function () {
    // Espera a que el DOM esté completamente cargado
    document.addEventListener("DOMContentLoaded", function () {
        // Manejo del menú móvil
        const menuToggle = document.querySelector(".menu-toggle");
        const navMenu = document.querySelector(".nav-menu");

        if (menuToggle && navMenu) {
            // Alterna la visibilidad del menú al hacer click en el botón
            menuToggle.addEventListener("click", (e) => {
                e.stopPropagation();
                menuToggle.classList.toggle("active");
                navMenu.classList.toggle("active");
            });

            // Cierra el menú al hacer click en cualquier enlace del menú
            document.querySelectorAll(".nav-link").forEach((link) => {
                link.addEventListener("click", () => {
                    if (window.innerWidth <= 768) {
                        menuToggle.classList.remove("active");
                        navMenu.classList.remove("active");
                    }
                });
            });

            // Cierra el menú al hacer click fuera del mismo
            document.addEventListener("click", (e) => {
                if (
                    !navMenu.contains(e.target) &&
                    !menuToggle.contains(e.target) &&
                    navMenu.classList.contains("active")
                ) {
                    navMenu.classList.remove("active");
                }
            });

            // Cierra el menú al hacer scroll
            window.addEventListener("scroll", () => {
                if (navMenu.classList.contains("active")) {
                    navMenu.classList.remove("active");
                }
            });
        }
    });

    // Transición del hero a la sección del portafolio
    setTimeout(() => {
        const heroFondo = document.getElementById("hero");
        const heroTitle = document.querySelector(".hero-fondo-title");
        if (heroFondo && heroTitle) {
            // Aplica las animaciones de deslizamiento
            heroFondo.classList.add("slide-out");
            heroTitle.classList.add("slide-up");

            // Después de la animación, oculta el hero y muestra el portafolio
            setTimeout(() => {
                heroFondo.style.display = "none";
                document.getElementById("portafolio").style.display = "block";
            }, 3000);
        }
    }, 7000);

    // Carrusel de certificados
    let currentCertGroup = 0;
    function showCertGroup(index) {
        const certGroups = document.querySelectorAll(".certificate-group");
        const totalGroups = certGroups.length;

        if (index >= totalGroups) {
            currentCertGroup = 0;
        } else if (index < 0) {
            currentCertGroup = totalGroups - 1;
        } else {
            currentCertGroup = index;
        }
        const offset = -currentCertGroup * 100;
        document.querySelector(
            ".certificates-grid"
        ).style.transform = `translateX(${offset}%)`;
    }

    window.nextCertGroup = function () {
        showCertGroup(currentCertGroup + 1);
    };

    window.prevCertGroup = function () {
        showCertGroup(currentCertGroup - 1);
    };

    // Carrusel de proyectos
    let currentProjectGroup = 0;
    function showProjectGroup(index) {
        const projectGroups = document.querySelectorAll(".project-group");
        const totalGroups = projectGroups.length;

        if (index >= totalGroups) {
            currentProjectGroup = 0;
        } else if (index < 0) {
            currentProjectGroup = totalGroups - 1;
        } else {
            currentProjectGroup = index;
        }
        const offset = -currentProjectGroup * 100;
        document.querySelector(
            ".projects-grid"
        ).style.transform = `translateX(${offset}%)`;
    }

    window.nextGroup = function () {
        showProjectGroup(currentProjectGroup + 1);
    };

    window.prevGroup = function () {
        showProjectGroup(currentProjectGroup - 1);
    };
})();
