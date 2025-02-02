let imagenes = ["imagenes/1.jpg", "imagenes/2.jpg", "imagenes/3.jpg"]; // Agrega aquí tus imágenes
let indice = 0;

function cambiarImagen(direccion) {
    indice += direccion;
    if (indice < 0) indice = imagenes.length - 1;
    if (indice >= imagenes.length) indice = 0;
    document.getElementById("imagen-carrusel").src = imagenes[indice];
}
