function saludar() {
  let nombre = document.getElementById("nombre").value;

  if (nombre === "") {
    document.getElementById("saludo").style.display = "block";
    document.getElementById("saludo").innerHTML = "hola, persona misteriosa!";
    document.getElementById("comentario").innerHTML = "puedes escribir tu nombre";
  } else {
    document.getElementById("saludo").style.display = "block";
    document.getElementById("saludo").innerHTML = "hola, " + nombre + "!";
    document.getElementById("comentario").innerHTML = "Ya puedes usar tu calculadora";
  }
}

function escribir(numerico) {
  let pantalla = document.getElementById("pantalla").value;
  pantalla = pantalla + numerico;
  document.getElementById("pantalla").value = pantalla;
}
function borrarPantalla() {
  document.getElementById("pantalla").value = "";
  document.getElementById("comentario").innerHTML = "Pantalla borrada";
}

function calcular() {
  let operacion = document.getElementById("pantalla").value;
  let nombre = document.getElementById("nombre").value;
  if (nombre === "") {
    nombre = "parguela";
  }
  if (operacion === "") {
    document.getElementById("comentario").innerHTML = "primero escribe la operacion";
  } else {
    let resultado = eval(operacion);
    document.getElementById("pantalla").value = resultado;
    document.getElementById("comentario").innerHTML = nombre + ", el resultado es " + resultado + ".";
  }
}

function modoFiesta() {
  // document.body.classList.add("fiesta");
  document.body.classList.toggle("fiesta");
  document.getElementById("comentario").innerHTML = "has cambiado de modo la pagina";
}
 
function limpiarTodo(){
  document.getElementById('nombre').value =''
  document.getElementById('saludo').innerHTML =''
  document.getElementById('saludo').style.display ='none'
  document.getElementById('pantalla').value =''
  document.getElementById('comentario').innerHTML =''

}