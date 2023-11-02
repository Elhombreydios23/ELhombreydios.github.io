var carousel = document.getElementById('carousel');
    
function scrollCarousel(direction) {
    carousel.scrollLeft += direction * carousel.offsetWidth * .3;
}

var curiosidades = document.getElementById('curiosidades');

function desplazarIzquierda() {
    curiosidades.scrollLeft -= 100;
}

function desplazarDerecha() {
    curiosidades.scrollLeft += 100;
}