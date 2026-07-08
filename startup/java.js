const boton = document.getElementById("btn-info");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
    mensaje.textContent =
        "Bienvenido al universo de la Academia del Villano. Todo el contenido es ficticio y está pensado para historias, cómics y videojuegos.";
});