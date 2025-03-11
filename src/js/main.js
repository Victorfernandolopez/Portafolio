// Manejo del menú móvil
document.addEventListener('DOMContentLoaded', function() {
    // Manejo del menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active'); // Añadir clase active
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

/* caroucel proyectos */
let currentGroup = 0;

function showGroup(index) {
    const groups = document.querySelectorAll('.project-group');
    const totalGroups = groups.length;

    if (index >= totalGroups) {
        currentGroup = 0;
    } else if (index < 0) {
        currentGroup = totalGroups - 1;
    } else {
        currentGroup = index;
    }

    const offset = -currentGroup * 100;
    document.querySelector('.projects-grid').style.transform = `translateX(${offset}%)`;
}

function nextGroup() {
    showGroup(currentGroup + 1);
}

function prevGroup() {
    showGroup(currentGroup - 1);
}

/* caroucel certificados */
let currentCertGroup = 0;

function showCertGroup(index) {
    const certGroups = document.querySelectorAll('.certificate-group');
    const totalCertGroups = certGroups.length;

    if (index >= totalCertGroups) {
        currentCertGroup = 0;
    } else if (index < 0) {
        currentCertGroup = totalCertGroups - 1;
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