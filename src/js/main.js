// main.js

// Ejemplo básico de animación al hacer scroll (reveal effect)
window.addEventListener('scroll', revealElements);

function revealElements() {
    const revealElements = document.querySelectorAll('.reveal');

    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const revealPoint = 150; // Ajusta la distancia para el efecto

        if (elementTop < windowHeight - revealPoint) {
            revealElements[i].classList.add('active');
        } else {
            revealElements[i].classList.remove('active');
        }
    }
}

// Manejo del formulario de contacto (ejemplo simple)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Capturar valores
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Aquí podrías hacer una petición fetch/axios a tu backend
        // o utilizar servicios de email como EmailJS.

        alert('¡Mensaje enviado! Gracias por contactarme.');
        contactForm.reset();
    });
}

