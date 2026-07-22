// declaración de variables

const actividad = document.getElementById("actividad");
const numeroPlazas = document.getElementById("numeroPlazas");
const btnReserva = document.getElementById("btnReserva");
const mensajesReserva = document.getElementById("mensajesReserva");

let reservado = false;
let plazaDisponibles = 5;

//listeners
btnReserva.addEventListener("mouseenter", () => {
  if (reservado) {
    plazaDisponibles--;
    btnReserva.textContent = "Cancelar reserva";
  } else {
    btnReserva.textContent = "Reservar";
  }
});

btnReserva.addEventListener("mouseenter", () => {
  if (reservado) {
    btnReserva.textContent = "reservado";
  } else {
    btnReserva.textContent = "Disponible";
  }
});

btnReserva.addEventListener("click", () => {
  // mensajesReserva.textContent = 'Has pulsado el botón'
  reservado = !reservado;
  if (reservado) {
    btnReserva.textContent = "Reservado";
    mensajesReserva.textContent = "Reserva realizada";
    actividad.classList.add("reservada");
  } else {
    btnReserva.textContent = "Disponible";
    mensajesReserva.textContent = "Reserva cancelada";
    actividad.classList.remove("reservada");
  }
  numeroPlazas.textContent = plazasDisponibles
});
