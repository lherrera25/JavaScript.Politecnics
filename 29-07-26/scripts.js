const burger = document.getElementById('burger')
const salir = document.getElementById('salir')
const nav = document.querySelector('nav')

const cajaAnimada = document.querySelector('.cajaAnimada')

btnEscalar = document.getElementById('btnEscalar')
btnRotar = document.getElementById('btnRotar')
btnOpacidad = document.getElementById('btnOpacidad')
btnRedondear = document.getElementById('btnRedondear')
btnCombo = document.getElementById('btnCombo')
btnReset = document.getElementById('btnReset')

btnContador = document.getElementById('btnContador')
btnReseteo = document.getElementById('btnReseteo')
let contador = 0
let intervaloId = null
let elementoContador = document.getElementById('contador')

const circulo = document.querySelector('.circulo')
const btnInicio = document.getElementById('btnInicio')
const btnStop = document.getElementById('btnStop')

let posicion = 0
let intervaloMov = null
let cajaMovimiento = document.querySelector('.controlEspacio')

const mosca = document.querySelector('.mosca')
const btnComienzo = document.getElementById('btnComienzo')
const btnParo = document.getElementById('btnParo')

// const cajaCursor = document.querySelector('#cursor')
const cajaCursor = mosca.closest('.controlEspacio')
//Busca, desde el elemento .mosca, el elemento contenedor más cercano que tenga la clase .controlEspacio.

let posInicial = {left: 0, top: 0}
let movimiento = false

const escapista = document.querySelector('.cajaEscapista')
const btnInicioEscape = document.getElementById('btnInicioEscape')
const btnFinEscape = document.getElementById('btnFinEscape')
const contenedor = escapista.closest('.controlEspacio')
let escape = false

const btnMostrar = document.getElementById('btnMostrar')
const btnOcultar = document.getElementById('btnOcultar')
const modal = document.querySelector('.modal')

const btnNotificar = document.getElementById('btnNotificar')

//Listeners

burger.addEventListener('click', () => {
    nav.classList.add('mostrar')
})

salir.addEventListener('click', () => {
    nav.classList.remove('mostrar')
})

btnEscalar.addEventListener('click', () => {
    cajaAnimada.classList.toggle('escalar')
})

btnRotar.addEventListener('click', () => {
    cajaAnimada.classList.toggle('rotar')
})

btnOpacidad.addEventListener('click', () => {
    cajaAnimada.classList.toggle('opacidad')
})

btnRedondear.addEventListener('click', () => {
    cajaAnimada.classList.toggle('redondear')
})
btnCombo.addEventListener('click', () => {
    cajaAnimada.classList.toggle('combo')
})

btnReset.addEventListener('click', () => {
    cajaAnimada.className = 'cajaAnimada'
})



btnContador.addEventListener('click', iniciarContador)
btnReseteo.addEventListener('click', detenerContador)

btnInicio.addEventListener('click', () => {
  if(intervaloMov === null){
    intervaloMov = setInterval(()=>{
        const limite = cajaMovimiento.clientWidth
        const anchoCirculo = circulo.offsetWidth
        if((posicion + 5 + anchoCirculo) > limite){
            clearInterval(intervaloMov)
            intervaloMov = null
            return
        }
        // posicion = posicion +5
        posicion += 5
        circulo.style.left = posicion + 'px' 
    }, 50)
  }
})

btnStop.addEventListener('click', () => {
    clearInterval(intervaloMov)
    intervaloMov = null
})

btnComienzo.addEventListener('click', ()=>{
    movimiento = true
    document.addEventListener('mousemove', seguirMouse)
})

btnParo.addEventListener('click', ()=>{
    movimiento = false
    document.removeEventListener('mousemove', seguirMouse)
    mosca.style.left = 0
    mosca.style.top = 0
})

escapista.addEventListener('mouseover', ()=>{
    if(!escape) return

    const zonaEscape = contenedor.getBoundingClientRect()
    const maxX = zonaEscape.width - escapista.offsetWidth 
    const maxY = zonaEscape.height - escapista.offsetHeight

    const x = Math.random() * maxX 
    const y = Math.random() * maxY

    escapista.style.left = x + 'px'
    escapista.style.top = y + 'px'
})

btnInicioEscape.addEventListener('click', ()=>{
    escape = true
})

btnFinEscape.addEventListener('click', ()=>{
    escape = false
})

btnMostrar.addEventListener('click', ()=>{
    modal.classList.add('mostrar')
})

btnOcultar.addEventListener('click', ()=>{
    modal.classList.remove('mostrar')
})

btnNotificar.addEventListener('click', ()=>{
    const nota = document.createElement('div')
    nota.textContent = "¡Date por enterado!\n Esta nota desaparece en 3 segundos"
    nota.classList.add('notificacion')
    document.body.appendChild(nota)
    setTimeout(()=>
        nota.remove(), 3000
    )
})

function iniciarContador() {
    if (intervaloId === null) {
        intervaloId = setInterval(() => {
            contador++
            elementoContador.innerHTML = contador
        }, 1000)
    }
}

function detenerContador() {
    clearInterval(intervaloId)
    intervaloId = 0
    contador = 0
    elementoContador.innerHTML = contador
}

function seguirMouse(e){
     if (!movimiento) return

    const corral = cajaCursor.getBoundingClientRect()

    const offsetX = e.clientX - corral.left
    const offsetY = e.clientY - corral.top

    const centroX = offsetX - mosca.offsetWidth / 2
    const centroY = offsetY - mosca.offsetHeight / 2

    mosca.style.left = centroX + 'px'
    mosca.style.top = centroY + 'px'
}