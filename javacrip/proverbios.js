var curiosidades2 = document.getElementById('curiosidades2');
    
function scrollcuriosidades(direction) {
    curiosidades2.scrollLeft += direction * curiosidades2.offsetWidth * .3;
}