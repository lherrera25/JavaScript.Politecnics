// declaraciones de variables

let elCantidad = document.getElementById("cantidadEntradas");
const btnGenerar = document.getElementById("btnGenerar");
const mensaje = document.querySelector(".mensaje");

btnGenerar.addEventListener("click", generarEntradas);

function generarEntradas() {
  let cantidad = Number(elCantidad.value);
  let precioUnitario = 70;
  let precioTotal = 0;
  console.log(cantidad);
  mensaje.innerHTML = "";
  if (cantidad <= 0) {
    mensaje.innerHTML = "esto que intentas hacer es imposible";
  } else if (cantidad > 10) {
    mensaje.innerHTML = "puede generar como maximo 10 entradas";
  } else {
    mensaje.innerHTML = `Generando ${cantidad} entradas <br>`;
    for (let entrada = 1; entrada <= cantidad; entrada++) {
      precioTotal = precioTotal + precioUnitario;
      let codigo
      do {
        codigo = Math.floor(100 + Math.random() * 1000);
      } while (codigo < 100);

      mensaje.innerHTML += `Entrada ${entrada} generada. Codigo: ${codigo} <br>`;
    }
    mensaje.innerHTML += `Total de entradas generadas: ${cantidad} <br> Esto te va a costar ${precioTotal}€`;
  }
}
