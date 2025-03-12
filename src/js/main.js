// Manejo del menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            const isClickInside = navMenu.contains(e.target) || menuToggle.contains(e.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });

        // Cerrar menú al hacer scroll
        window.addEventListener('scroll', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    }
});

/* Transición de deslizamiento */
// Manejo del fondo y la transición entre pantallas
setTimeout(() => {
    const heroFondo = document.getElementById('hero');
    const heroTitle = document.querySelector('.hero-fondo-title');
    heroFondo.classList.add('slide-out'); // Aplicamos la animación para que "Hello World" se deslice fuera
    heroTitle.classList.add('slide-up'); // Aplicamos la animación de deslizamiento hacia arriba

    // Mostrar el portafolio después de la transición
    setTimeout(() => {
        document.getElementById('hero').style.display = 'none'; // Ocultar la animación de "Hello World"
        document.getElementById('portafolio').style.display = 'block'; // Mostrar el portafolio
    }, 3000); // Duración de la animación (2 segundos para que se deslice fuera)
}, 7000); // "Hello World" se muestra durante 10 segundos antes de empezar la transición

// Funciones para el carrusel de certificados
let currentCertGroup = 0;

function showCertGroup(index) {
    const certGroups = document.querySelectorAll('.certificate-group');
    const totalGroups = certGroups.length;

    if (index >= totalGroups) {
        currentCertGroup = 0;
    } else if (index < 0) {
        currentCertGroup = totalGroups - 1;
    } else {
        currentCertGroup = index;
    }

    const offset = -currentCertGroup * 100;
    document.querySelector('.certificates-grid').style.transform = `translateX(${offset}%)`;
}

function nextCertGroup() {
    showCertGroup(currentCertGroup + 1);
}

function prevCertGroup() {
    showCertGroup(currentCertGroup - 1);
}

// Funciones para el carrusel de proyectos
let currentProjectGroup = 0;

function showProjectGroup(index) {
    const projectGroups = document.querySelectorAll('.project-group');
    const totalGroups = projectGroups.length;

    if (index >= totalGroups) {
        currentProjectGroup = 0;
    } else if (index < 0) {
        currentProjectGroup = totalGroups - 1;
    } else {
        currentProjectGroup = index;
    }

    const offset = -currentProjectGroup * 100;
    document.querySelector('.projects-grid').style.transform = `translateX(${offset}%)`;
}

function nextGroup() {
    showProjectGroup(currentProjectGroup + 1);
}

function prevGroup() {
    showProjectGroup(currentProjectGroup - 1);
}


