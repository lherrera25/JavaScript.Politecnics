// DISCO

function comprobarEdad() {
    let edadDisco = Number(document.getElementById('edadDisco').value)
    // console.log(edadDisco)

    if (!edadDisco) {
        document.getElementById('disco').innerHTML = 'No has puesto la edad'
    } else if (edadDisco < 0) {
        document.getElementById('disco').innerHTML = 'No es una edad válida'
    } else if (edadDisco <= 15) {
        document.getElementById('disco').innerHTML = 'No puedes entrar todavía'
    } else if (edadDisco == 16 || edadDisco == 17) {
        document.getElementById('disco').innerHTML = 'Solo puedes entrar acompañado'
    } else {
        document.getElementById('disco').innerHTML = 'Adelante!'
    }
}

// CONCIERTO

function comprobarDatos() {
    let edadConcierto = Number(document.getElementById("edadConcierto").value);
    let entrada = document.querySelector('input[name="entrada"]:checked');
    let mensajeConcierto = document.getElementById("concierto");

    if (entrada.value === "no") {
        mensajeConcierto.innerHTML = "Pues sin entrada...";
    } else if (!edadConcierto) {
        mensajeConcierto.innerHTML = "Tienes que decir tu edad ;)";
    } else if (edadConcierto < 18) {
        mensajeConcierto.innerHTML = "Debes entrar acompañado";
    } else {
        mensajeConcierto.innerHTML = "¡Adelante!";
    }
}

// IDIOMAS

function escribir(idioma) {
    let mensajeIdioma = document.getElementById("idioma");
    switch (idioma) {
        case 'esp':
            mensajeIdioma.innerHTML = '¡Buenos días!'
            break
        case 'eng':
            mensajeIdioma.innerHTML = 'Good Morning!'
            break
        case 'fr':
            mensajeIdioma.innerHTML = 'Bonjour!'
            break
        case 'ale':
            mensajeIdioma.innerHTML = 'Hallo!'
            break
        default:
            mensajeIdioma.innerHTML = '???'
    }
}


// PRECIOS ENTRADAS

function calcularPrecio() {
    const edadEntradas = Number(document.getElementById("edadEntradas").value);
    const numEntradas = Number(document.getElementById('entrada').value)
    const precio = document.getElementById("precio");

    let precioEntrada

    if (edadEntradas < 5) {
        precioEntrada = 0
    } else if (edadEntradas >= 6 && edadEntradas <= 17) {
        precioEntrada = 4
    } else if (edadEntradas >= 18 && edadEntradas <= 64) {
        precioEntrada = 7
    } else {
        precioEntrada = 5 
    }

    let precioTotal = precioEntrada * numEntradas

    precio.innerHTML = 'Tus ' + numEntradas + ' entradas cuestan ' + precioTotal + '€'

}
