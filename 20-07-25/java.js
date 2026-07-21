let saludo = document.getElementById("saludo");
let btnNombre = document.getElementById("btnNombre");

let tamañoVentana = document.getElementById("tamañoVentana");

let idiomaNavegador = document.getElementById("idiomaNavegador");
idiomaNavegador.textContent = navigator.language;
let estadoConexion = document.getElementById("estadoConexion");

let paginaActual = document.getElementById("paginaActual");
paginaActual.textContent = location.pathname;

btnTitulo = document.getElementById("btnTitulo");
btnModo = document.getElementById("btnModo");

let campoMensaje = document.getElementById("campoMensaje");

let btnAñadir = document.getElementById("btnAñadir");
let contadorMensajes = document.getElementById("contadorMensajes");
let listaMensajes = document.querySelector(".listaMensajes");

let mensajes = ["Repasar la clase", "Revisar el proyecto"];

btnNombre.addEventListener("click", identificarUsuario);
window.addEventListener("resize", actualizarTamaño);
window.addEventListener("online", actualizarConexion);
window.addEventListener("offline", actualizarConexion);
btnTitulo.addEventListener("click", cambiarTitulo);
btnModo.addEventListener("click", cambiarModo);
btnAñadir.addEventListener("click", añadirMensaje);
campoMensaje.addEventListener("keydown", comprobarTecla);

function identificarUsuario() {
  let nombre = prompt("¿Cómo te llamas?");
  if (nombres === null || nombre === "") {
    saludo.textContec = "Hola visitante";
  } else {
    saludo.textContent = `Hola, ${nombre}`;
  }
}

function actualizarTamaño() {
  tamañoVentana.textContent = window.innerWidth + "x" + window.innerHeight;
}

function actualizarConexion() {
  if (navigator.onLine === true) {
    estadoConexion.textContent = "En linea";
  } else {
    estadoConexion.textContent = "Sin conexion";
  }
}

function cambiarTitulo() {
  let nuevoTitulo = prompt("escribe este titulo para la pestaña");
  if (nuevoTitulo !== null && nuevoTitulo !== "") {
    document.title = nuevoTitulo;
  }
}

function cambiarModo() {
  document.body.classList.toggle("modoNocturno");
  if (document.body.classList.contains("modoNocturno")) {
    btnNombre.textContent = "modo claro";
  } else {
    btnModo.textContec = "Modo oscuro";
  }
}

function mostrarMensajes() {
  listaMensajes.innerHTML = "";

  // for (let mensaje of mensajes) {
  for (let i = 0; i < mensajes.length; i++) {
    let mensaje = mensajes[i];

    listaMensajes.innerHTML += `
      <article class='mensaje'>
      <p>${mensaje}</p>
      <button class='btneliminar' data-indice='${i}'>eliminar</button>
      </article>
      `;
  }
  let botonesEliminar = document.querySelectorAll(".btneliminar");
  
  for(let boton of botonesEliminar) {
    boton.addEventListener("click", eliminarMensaje);
  }

  if (mensajes.length === 1) {
    contadorMensajes.textContent = "1 mensaje";
  } else {
    contadorMensajes.textContent = mensajes.length + "mensajes";
  }
}

function añadirMensaje() {
  let texto = campoMensaje.value;
  if (texto === "") {
    alert("¡escribe algo en el input");
  } else {
    mensajes.push(texto);
    campoMensaje.value = "";
  }

  mostrarMensajes();
}

function comprobarTecla(e) {
  if (e.key === "Enter") {
    añadirMensaje();
  }

}

  function eliminarMensaje(e) {
    let indice = e.target.dataset.indice;

    let confirmar = confirm('¿estas seguro?')
if(confirmar ===true){ 


    mensajes.splice(indice, 1);
    mostrarMensajes();
}

  }

actualizarTamaño();
actualizarConexion();
mostrarMensajes();
