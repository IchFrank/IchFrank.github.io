var images = ["fondo05.png", "fondo10.png"];
var currentIndex = 0;

function changeBackground() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  var imageUrl = "url('" + images[currentIndex] + "')";
  document.getElementById("slider").style.backgroundImage = imageUrl;
}

setInterval(changeBackground, 700); // Cambia la imagen cada 5 segundos

/*--------------------EFECTO MAQUINA DE ESCRIBIR-----------------*/ 

