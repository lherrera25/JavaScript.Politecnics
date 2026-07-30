let numeroDecimal = document.getElementById('numeroDecimal')
const btnProbarRedondeo = document.getElementById('btnProbarRedondeo')
let resultadoRound = document.getElementById('resultadoRound')
let resultadoCeil = document.getElementById('resultadoCeil')
let resultadoFloor = document.getElementById('resultadoFloor')

let numeroAleatorio = document.getElementById('numeroAleatorio')
const btnGenerarDecimal = document.getElementById('btnGenerarDecimal')


let carasDados = document.getElementById('carasDado')
let caraDados = document.getElementById('caraDado')
const btnLanzarDado = document.getElementById('btnLanzarDado')




//Listeners

btnProbarRedondeo.addEventListener('click', ()=>{
    const numero = Number(numeroDecimal.value)

    resultadoRound.textContent = Math.round(numero)
    resultadoCeil.textContent = Math.ceil(numero)
    resultadoFloor.textContent = Math.floor(numero)
})

btnGenerarDecimal.addEventListener('click', ()=>{
    const numero = Math.random()
    numeroAleatorio.textContent = numero.toFixed(4)
})


//Funciones
function lanzarDado(numeroCaras = 6){
    return Math.random(Marth.random()*numeroCaras)+1
}