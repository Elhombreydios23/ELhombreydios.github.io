var imagenes = ['./img/1.jpeg', './img/2.png', './img/3.png']; // reemplaza estos con tus propios nombres de archivo
var indiceActual = 0;

function cambiarImagen() {
    var carrusel = document.getElementById('carrusel');
    carrusel.style.backgroundImage = 'url(' + imagenes[indiceActual] + ')';
    carrusel.style.backgroundSize = '100% 100%'; // esto hará que la imagen de fondo se estire para llenar el contenedor
    indiceActual = (indiceActual + 1) % imagenes.length; // esto hará que el índice vuelva a 0 cuando llegue al final del array
}

cambiarImagen(); // muestra la primera imagen inmediatamente
setInterval(cambiarImagen, 5000); // luego cambia la imagen cada 5 segundos







var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n === undefined) {
    n = ++slideIndex
  }
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block"; 
}

   var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n === undefined) {
    n = ++slideIndex
  }
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block"; 
}