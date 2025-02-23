document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.header video');
    if (video) {
        video.playbackRate = 0.8; // Ralentizar el video a la mitad de su velocidad normal
    }

    const textElement = document.querySelector('.header p');
    const text = textElement.textContent;
    let index = 0;
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            textElement.innerHTML = text.substring(0, index--) + '<span class="cursor">|</span>';
            if (index < 0) {
                isDeleting = false;
                setTimeout(type, 500); // Pausa antes de volver a escribir
            } else {
                setTimeout(type, 100); // Velocidad de borrado
            }
        } else {
            textElement.innerHTML = text.substring(0, index++) + '<span class="cursor">|</span>';
            if (index > text.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Pausa antes de borrar
            } else {
                setTimeout(type, 100); // Velocidad de escritura
            }
        }
    }

    type();
});
