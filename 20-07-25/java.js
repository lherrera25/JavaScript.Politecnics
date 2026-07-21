let saludo = document.getElementById("saludo");
let btnNombre = document.getElementById("btnNombre");

lettamañoVentana = document.getElementById("tamañoVentana");

let idiomaNavegador = document.getElementById("idiomaNavegador");
idiomaNavegador.textContent = navigator.language;
let estadoConexion = document.getElementById("estadoConexion");

let paginaActual = document.getElementById("paginaActual");
paginaActual.textContent = location.pathname;

btnTitulo = document.getElementById('btnTitulo')
btnModo = document.getElementById('btnModo')




btnNombre.addEventListener("click", identificarUsuario);
window.addEventListener("resize", actualizarTamaño);
window.addEventListener("online", actualizarConexion);
window.addEventListener("offline", actualizarConexion);
btnTitulo.addEventListener('click', cambiarTitulo)
btnModo.addEventListener( 'click' , cambiarModo)
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


function cambiarTitulo(){
  let nuevoTitulo = prompt('escribe este titulo para la pestaña')
  if(nuevoTitulo !== null && nuevoTitulo !== ''){
document.title = nuevoTitulo
  }
}

function cambiarModo(){
  document.body.classList.toggle('modoNocturno')
  if(document.body.classList.contains('modoNocturno')){
    btnNombre.textContent ='modo claro'

  }else{
    btnModo.textContec ='Modo oscuro'
  }
}
actualizarTamaño();
actualizarConexion();
