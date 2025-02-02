let imagenes = ["imagenes/1.jpg", "imagenes/2.jpg", "imagenes/3.jpg", "imagenes/4.jpg", "imagenes/5.jpg", "imagenes/6.jpg", "imagenes/7.jpg", "imagenes/8.jpg", "imagenes/9.jpg","imagenes/10.jpg", "imagenes/11.jpg", "imagenes/12.jpg", "imagenes/13.jpg", "imagenes/14.jpg","imagenes/15.jpg", "imagenes/16.jpg", "imagenes/17.jpg", "imagenes/18.jpg","imagenes/19.jpg", "imagenes/20.jpg", "imagenes/21.jpg", "imagenes/22.jpg", "imagenes/23.jpg","imagenes/24.jpg", "imagenes/25.jpg", "imagenes/26.jpg"]; // Agrega aquí tus imágenes
let indice = 0;

function cambiarImagen(direccion) {
    indice += direccion;
    if (indice < 0) indice = imagenes.length - 1;
    if (indice >= imagenes.length) indice = 0;
    document.getElementById("imagen-carrusel").src = imagenes[indice];
}
