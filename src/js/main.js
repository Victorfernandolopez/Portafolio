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
        const heroFondo = document.getElementById('hero');
        const heroTitle = document.querySelector('.hero-fondo-title');
        if (heroFondo && heroTitle) {
            // Aplica las animaciones de deslizamiento al hero
            heroFondo.classList.add('slide-out');
            heroTitle.classList.add('slide-up');

            // Después de la animación, oculta el hero y muestra el portafolio
            setTimeout(() => {
                heroFondo.style.display = 'none';
                document.getElementById('portafolio').style.display = 'block';

                // Animaciones de la sección Inicio
                // Animación para el h1 desde la izquierda (sin retraso)
                const h1 = document.getElementById('slide-h1');
                if (h1) {
                    setTimeout(() => {
                        h1.classList.remove('slide-hidden');
                        h1.classList.add('slide-in-left');
                    }, 1000);
                }

                // Animación para el párrafo con un retraso (200ms)
                const p = document.getElementById('slide-p');
                if (p) {
                    setTimeout(() => {
                        p.classList.remove('slide-hidden');
                        p.classList.add('slide-in-left');
                    }, 1300);
                }

                // Animación para el enlace con otro retraso (400ms)
                const a = document.getElementById('slide-a');
                if (a) {
                    setTimeout(() => {
                        a.classList.remove('slide-hidden');
                        a.classList.add('slide-in-left');
                    }, 1600);
                }

                // Animación para el div de tecnologías desde la derecha (600ms de retraso)
                const tecnologias = document.getElementById('slide-tecnologias');
                if (tecnologias) {
                    setTimeout(() => {
                        tecnologias.classList.remove('slide-hidden');
                        tecnologias.classList.add('slide-in-right');
                    }, 1000);
                }

            }, 3000); // 3000ms es el tiempo de la animación de slide-out del hero
        }
    }, 7000); // 7000ms es el tiempo total que "Hello World" se muestra

    // Configurar Intersection Observer para la sección "Sobre mí"
    const aboutSection = document.getElementById('sobre-mi');
    // Nota: No volvemos a declarar aboutText ni aboutImage aquí si ya se han obtenido.
    const aboutText = document.getElementById('slide-about-text');
    const aboutImage = document.getElementById('slide-about-image');

    // Configuramos el observer para que se active cuando el 50% del área esté visible
    const observerOptions = {
        threshold: 0.5
    };

    const aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animar el contenedor del texto desde la izquierda
                if (aboutText) {
                    aboutText.classList.remove('slide-hidden');
                    aboutText.classList.add('slide-in-left');
                }
                // Animar el contenedor de la imagen desde la derecha
                if (aboutImage) {
                    aboutImage.classList.remove('slide-hidden');
                    aboutImage.classList.add('slide-in-right');
                }
                // Una vez activadas, desuscribirse para no repetir la animación
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }

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
