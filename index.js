


/*EL JAVASCRIPT TODAVÍA NO ESTÁ HACIENDO NADA :) */

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = Array.from(carousel.children);
    
    // Duplicamos las imágenes para que el scroll sea infinito sin espacios
    images.forEach(img => {
        const clone = img.cloneNode(true);
        carousel.appendChild(clone);
    });
});

