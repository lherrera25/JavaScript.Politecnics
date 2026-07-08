//Declaracion de variables

const contador = document.querySelector('#contador')
const mensaje = document.getElementById('mensaje')

const btnEntrada = document.getElementById('btn-entrada')
const btnSalida = document.getElementById('btn-salida')
const btnReset = document.getElementById('btn-reset')

const MAX = 10
const MIN = 0

let personas=0


btnEntrada.addEventListener('click', incremento)
btnSalida.addEventListener('click', descremento)
btnReset.addEventListener('click', reset)

function incremento() {  
  if (personas < MAX) {
    personas++
    contador.innerHTML = personas
    
    if (personas >= 7 && personas < MAX) {
      mensaje.innerHTML = 'casi lleno'
      mensaje.classList.add('naranja')
      contador.style.color = 'orange'
    }
    
    if (personas === MAX) {
      mensaje.innerHTML = "completo"
      mensaje.classList.remove('naranja')
      contador.style.color = 'red'     
    }
  }
}



function descremento() {  
  if (personas > MIN) {
    personas--
    contador.innerHTML = personas
    if(personas >= 7 && personas <MAX){
      mensaje.innerHTML = 'casi lleno'
      mensaje.classList.add('naranja')
      contador.style.color= 'orange'
    }
  } else{
    contador.innerHTML = " completo"
    mensaje.classList.add('rojo')

  }
}

function reset() {
  personas = 0
  contador.innerHTML = personas
  contador.style.color = 'black'
  mensaje.innerHTML = '' 
}