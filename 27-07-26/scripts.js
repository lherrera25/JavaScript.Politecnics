const burger = document.getElementById('burger')
const salir = document.getElementById('salir')
const nav = document.querySelector('nav')

burger.addEventListener('click', ()=>{
    nav.classList.add('mostrar')
})

salir.addEventListener('click', ()=>{
    nav.classList.remove('mostrar')
})