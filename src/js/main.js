function setupRecurrentAnimation(element, inClass, outClass, threshold = 0.5) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                element.classList.remove(outClass);
                element.classList.add(inClass);
            } else {
                element.classList.remove(inClass);
                element.classList.add(outClass);
            }
        });
    }, { threshold });
    observer.observe(element);
}

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
    const aboutText = document.getElementById('slide-about-text');
    const aboutImage = document.getElementById('slide-about-image');

    // Configuración del observer con umbral del 50%
    const observerOptions = { threshold: 0.5 };

    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si la sección está en vista, quitar cualquier clase de salida y activar slide-in
                if (aboutText) {
                    aboutText.classList.remove('slide-out-left');
                    aboutText.classList.add('slide-in-left');
                }
                if (aboutImage) {
                    aboutImage.classList.remove('slide-out-right');
                    aboutImage.classList.add('slide-in-right');
                }
            } else {
                // Cuando la sección sale del viewport, quitar la clase slide-in y activar slide-out
                if (aboutText) {
                    aboutText.classList.remove('slide-in-left');
                    aboutText.classList.add('slide-out-left');
                }
                if (aboutImage) {
                    aboutImage.classList.remove('slide-in-right');
                    aboutImage.classList.add('slide-out-right');
                }
            }
        });
    }, observerOptions);

    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }


    // Sección Contacto: animación recurrente
    const contactFormContainer = document.querySelector('.contact-form-container');
    const contactSocial = document.querySelector('.contact-social');

    if (contactFormContainer) {
        setupRecurrentAnimation(contactFormContainer, 'animate-zoom-in', 'animate-zoom-out', 0.5);
    }
    if (contactSocial) {
        setupRecurrentAnimation(contactSocial, 'animate-fade-in', 'animate-fade-out', 0.5);
    }



    // Carrusel de certificados
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll(".slide-cert");
        const totalSlides = slides.length;

        // Verifica que el índice esté en el rango permitido
        if (index >= totalSlides || index < 0) {
            // Si el índice está fuera de rango, no se actualiza currentSlide
            return;
        }

        currentSlide = index;

        // Calcula el desplazamiento en función del tamaño de la pantalla
        let offset;
        if (window.innerWidth >= 768) {
            // En escritorio, muestra 3 tarjetas por fila
            offset = -currentSlide * (100 / 3);
        } else {
            // En dispositivos móviles, muestra 1 tarjeta por fila
            offset = -currentSlide * 100;
        }

        document.querySelector(".certificates-grid").style.transform = `translateX(${offset}%)`;
    }

    window.nextSlide = function () {
        const slides = document.querySelectorAll(".slide-cert");
        if (window.innerWidth >= 768) {
            // En escritorio, avanza 3 tarjetas por fila
            if (currentSlide < slides.length - 3) {
                showSlide(currentSlide + 1);
            }
        } else {
            // En dispositivos móviles, avanza 1 tarjeta por fila
            if (currentSlide < slides.length - 1) {
                showSlide(currentSlide + 1);
            }
        }
    };

    window.prevSlide = function () {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    };

    // Carrusel de projectos
    let currentProjectSlide = 0;

    function showProjectSlide(index) {
        const slides = document.querySelectorAll(".slide-projects");
        const totalSlides = slides.length;

        // Verifica que el índice esté en el rango permitido
        if (index >= totalSlides || index < 0) {
            // Si el índice está fuera de rango, no se actualiza currentSlide
            return;
        }

        currentProjectSlide = index;

        // Calcula el desplazamiento en función del tamaño de la pantalla
        let offset;
        if (window.innerWidth >= 768) {
            // En escritorio, muestra 3 tarjetas por fila
            offset = -currentProjectSlide * (100 / 3);
        } else {
            // En dispositivos móviles, muestra 1 tarjeta por fila
            offset = -currentProjectSlide * 100;
        }

        document.querySelector(".projects-grid").style.transform = `translateX(${offset}%)`;
    }

    window.nextProject = function () {
        const slides = document.querySelectorAll(".slide-projects");
        if (window.innerWidth >= 768) {
            // En escritorio, avanza 3 tarjetas por fila
            if (currentProjectSlide < slides.length - 3) {
                showProjectSlide(currentProjectSlide + 1);
            }
        } else {
            // En dispositivos móviles, avanza 1 tarjeta por fila
            if (currentProjectSlide < slides.length - 1) {
                showProjectSlide(currentProjectSlide + 1);
            }
        }
    };

    window.prevProject = function () {
        if (currentProjectSlide > 0) {
            showProjectSlide(currentProjectSlide - 1);
        }
    };
})();
