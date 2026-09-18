// =========================================
// ELEMENTOS DEL DOM
// =========================================

const btnTiempo = document.getElementById('btnTiempo')
const btnBuscar = document.getElementById('btnBuscar')
const ciudad = document.getElementById('ciudad')
const unidad = document.getElementById('unidad')
const mensaje = document.getElementById('mensaje')
const resultado = document.getElementById('resultado')


// =========================================
// VARIABLES
// =========================================

// Guardamos la última ubicación utilizada
// para poder cambiar entre °C y °F.
let ultimaLatitud = null
let ultimaLongitud = null
let ultimaUbicacion = 'Mi ubicación'


// =========================================
// MOSTRAR MENSAJES
// =========================================

function mostrarMensaje(texto, error = false) {

    mensaje.textContent = texto

    if (error) {
        mensaje.className = 'mensaje error'
    } else {
        mensaje.className = 'mensaje'
    }
}


// =========================================
// ICONOS DEL TIEMPO
// =========================================

function obtenerIcono(codigo, esDeDia = 1) {

    if (codigo === 0) {
        return esDeDia ? '☀️' : '🌙'
    }

    if (codigo === 1) {
        return esDeDia ? '🌤️' : '☁️'
    }

    if (codigo === 2) {
        return '⛅'
    }

    if (codigo === 3) {
        return '☁️'
    }

    if (codigo === 45 || codigo === 48) {
        return '🌫️'
    }

    if (
        codigo === 51 ||
        codigo === 53 ||
        codigo === 55 ||
        codigo === 56 ||
        codigo === 57
    ) {
        return '🌦️'
    }

    if (
        codigo === 61 ||
        codigo === 63 ||
        codigo === 65 ||
        codigo === 66 ||
        codigo === 67
    ) {
        return '🌧️'
    }

    if (
        codigo === 71 ||
        codigo === 73 ||
        codigo === 75 ||
        codigo === 77
    ) {
        return '❄️'
    }

    if (
        codigo === 80 ||
        codigo === 81 ||
        codigo === 82
    ) {
        return '🌦️'
    }

    if (
        codigo === 95 ||
        codigo === 96 ||
        codigo === 99
    ) {
        return '⛈️'
    }

    return '🌡️'
}


// =========================================
// DESCRIPCIÓN DEL TIEMPO
// =========================================

function obtenerDescripcion(codigo) {

    if (codigo === 0) {
        return 'Despejado'
    }

    if (codigo === 1) {
        return 'Principalmente despejado'
    }

    if (codigo === 2) {
        return 'Parcialmente nublado'
    }

    if (codigo === 3) {
        return 'Mayormente nublado'
    }

    if (codigo === 45 || codigo === 48) {
        return 'Niebla'
    }

    if (
        codigo === 51 ||
        codigo === 53 ||
        codigo === 55 ||
        codigo === 56 ||
        codigo === 57
    ) {
        return 'Llovizna'
    }

    if (
        codigo === 61 ||
        codigo === 63 ||
        codigo === 65 ||
        codigo === 66 ||
        codigo === 67
    ) {
        return 'Lluvia'
    }

    if (
        codigo === 71 ||
        codigo === 73 ||
        codigo === 75 ||
        codigo === 77
    ) {
        return 'Nieve'
    }

    if (
        codigo === 80 ||
        codigo === 81 ||
        codigo === 82
    ) {
        return 'Chubascos'
    }

    if (
        codigo === 95 ||
        codigo === 96 ||
        codigo === 99
    ) {
        return 'Tormenta'
    }

    return 'Condiciones variables'
}


// =========================================
// NOMBRE DEL DÍA
// =========================================

function obtenerNombreDia(fecha, indice) {

    if (indice === 0) {
        return 'Hoy'
    }

    const dias = [
        'Dom',
        'Lun',
        'Mar',
        'Mié',
        'Jue',
        'Vie',
        'Sáb'
    ]

    const fechaDia =
        new Date(fecha + 'T12:00:00')

    return dias[fechaDia.getDay()]
}


// =========================================
// OBTENER HORA
// =========================================

function obtenerHora(fechaHora) {

    const partes = fechaHora.split('T')

    if (partes.length < 2) {
        return ''
    }

    return partes[1].substring(0, 5)
}


// =========================================
// OBTENER EL TIEMPO DESDE OPEN-METEO
// =========================================

function obtenerTiempo(
    lat,
    lon,
    nombre = 'Mi ubicación'
) {

    // Guardamos las coordenadas
    ultimaLatitud = lat
    ultimaLongitud = lon
    ultimaUbicacion = nombre


    mostrarMensaje(
        'Consultando datos meteorológicos...'
    )


    resultado.innerHTML = `
        <div class="cargando">
            ⏳ Cargando información...
        </div>
    `


    // Unidad seleccionada
    const unidadSeleccionada =
        unidad.value === 'celsius'
            ? 'celsius'
            : 'fahrenheit'


    // =====================================
    // API DE OPEN-METEO
    // =====================================

    const url =
        'https://api.open-meteo.com/v1/forecast' +

        `?latitude=${lat}` +

        `&longitude=${lon}` +

        '&current=' +
        'temperature_2m,' +
        'relative_humidity_2m,' +
        'apparent_temperature,' +
        'is_day,' +
        'wind_speed_10m,' +
        'wind_direction_10m,' +
        'precipitation,' +
        'weather_code' +

        '&hourly=' +
        'temperature_2m,' +
        'weather_code' +

        '&daily=' +
        'weather_code,' +
        'temperature_2m_max,' +
        'temperature_2m_min' +

        '&forecast_days=7' +

        `&temperature_unit=${unidadSeleccionada}` +

        '&wind_speed_unit=kmh' +

        '&timezone=auto'


    // =====================================
    // PETICIÓN FETCH
    // =====================================

    fetch(url)

        .then(respuesta => {

            if (!respuesta.ok) {

                throw new Error(
                    'No se han podido obtener los datos meteorológicos.'
                )
            }

            return respuesta.json()
        })

        .then(datos => {

            console.log(datos)

            mostrarTiempo(
                datos,
                nombre,
                lat,
                lon
            )

            mostrarMensaje(
                'Datos actualizados correctamente.'
            )
        })

        .catch(error => {

            console.error(error)

            mostrarMensaje(
                error.message,
                true
            )

            resultado.innerHTML = ''
        })
}


// =========================================
// MOSTRAR LOS DATOS EN EL DOM
// =========================================

function mostrarTiempo(
    datos,
    nombre,
    lat,
    lon
) {

    const actual = datos.current

    const diario = datos.daily

    const horario = datos.hourly


    const simbolo =
        unidad.value === 'celsius'
            ? '°'
            : '°'


    // =====================================
    // HORAS
    // =====================================

    let indiceHora =
        horario.time.findIndex(
            hora => hora >= actual.time
        )


    if (indiceHora === -1) {
        indiceHora = 0
    }


    let horasHTML = ''


    for (
        let i = indiceHora;
        i < indiceHora + 6 &&
        i < horario.time.length;
        i++
    ) {

        const hora =
            obtenerHora(
                horario.time[i]
            )


        const temperatura =
            Math.round(
                horario.temperature_2m[i]
            )


        const icono =
            obtenerIcono(
                horario.weather_code[i],
                actual.is_day
            )


        let nombreHora = hora


        if (i === indiceHora) {
            nombreHora = 'Ahora'
        }


        horasHTML += `

            <article class="hora">

                <p class="hora-nombre">
                    ${nombreHora}
                </p>

                <div class="hora-icono">
                    ${icono}
                </div>

                <p class="hora-temperatura">
                    ${temperatura}${simbolo}
                </p>

            </article>

        `
    }


    // =====================================
    // PRONÓSTICO DIARIO
    // =====================================

    let diasHTML = ''


    for (
        let i = 0;
        i < diario.time.length;
        i++
    ) {

        const nombreDia =
            obtenerNombreDia(
                diario.time[i],
                i
            )


        const icono =
            obtenerIcono(
                diario.weather_code[i],
                1
            )


        const minima =
            Math.round(
                diario.temperature_2m_min[i]
            )


        const maxima =
            Math.round(
                diario.temperature_2m_max[i]
            )


        diasHTML += `

            <article class="dia">

                <span class="nombre-dia">
                    ${nombreDia}
                </span>

                <span class="dia-icono">
                    ${icono}
                </span>

                <span class="minima">
                    ${minima}°
                </span>

                <div class="barra-temperatura"></div>

                <span class="maxima">
                    ${maxima}°
                </span>

            </article>

        `
    }


    // =====================================
    // ACTUALIZAR EL DOM
    // =====================================

    resultado.innerHTML = `

        <!-- INFORMACIÓN PRINCIPAL -->

        <section class="principal">

            <p class="mi-ubicacion">
                MI UBICACIÓN
            </p>

            <h1>
                ${nombre}
            </h1>

            <div class="icono-principal">

                ${obtenerIcono(
                    actual.weather_code,
                    actual.is_day
                )}

            </div>


            <div class="temperatura-principal">

                <span class="temperatura">

                    ${Math.round(
                        actual.temperature_2m
                    )}

                </span>

                <span class="simbolo-temperatura">
                    ${simbolo}
                </span>

            </div>


            <p class="descripcion">

                ${obtenerDescripcion(
                    actual.weather_code
                )}

            </p>


            <p class="max-min">

                Máxima:
                ${Math.round(
                    diario.temperature_2m_max[0]
                )}°

                &nbsp;&nbsp;

                Mínima:
                ${Math.round(
                    diario.temperature_2m_min[0]
                )}°

            </p>

        </section>


        <!-- PRONÓSTICO HORARIO -->

        <section class="tarjeta">

            <p class="titulo-tarjeta">

                Pronóstico de las próximas horas

            </p>

            <div class="horas">

                ${horasHTML}

            </div>

        </section>


        <!-- PRONÓSTICO DE 7 DÍAS -->

        <section class="tarjeta">

            <p class="titulo-tarjeta">

                ▣ PRONÓSTICO PARA 7 DÍAS

            </p>

            <div class="dias">

                ${diasHTML}

            </div>

        </section>


        <!-- INFORMACIÓN EXTRA -->

        <section class="datos-extra">


            <article class="dato">

                <p class="dato-titulo">
                    Sensación térmica
                </p>

                <p class="dato-valor">

                    ${Math.round(
                        actual.apparent_temperature
                    )}${simbolo}

                </p>

            </article>


            <article class="dato">

                <p class="dato-titulo">
                    Humedad
                </p>

                <p class="dato-valor">

                    ${actual.relative_humidity_2m}%

                </p>

            </article>


            <article class="dato">

                <p class="dato-titulo">
                    Viento
                </p>

                <p class="dato-valor">

                    ${Math.round(
                        actual.wind_speed_10m
                    )} km/h

                </p>

            </article>


            <article class="dato">

                <p class="dato-titulo">
                    Precipitación
                </p>

                <p class="dato-valor">

                    ${actual.precipitation} mm

                </p>

            </article>


            <article class="dato">

                <p class="dato-titulo">
                    Dirección del viento
                </p>

                <p class="dato-valor">

                    ${Math.round(
                        actual.wind_direction_10m
                    )}°

                </p>

            </article>


            <article class="dato">

                <p class="dato-titulo">
                    Estado
                </p>

                <p class="dato-valor">

                    ${actual.is_day
                        ? 'Día ☀️'
                        : 'Noche 🌙'}

                </p>

            </article>

        </section>


        <!-- COORDENADAS -->

        <p class="coordenadas">

            Coordenadas utilizadas:
            ${Number(lat).toFixed(4)},
            ${Number(lon).toFixed(4)}

        </p>

    `
}


// =========================================
// BOTÓN "MI UBICACIÓN"
// =========================================

btnTiempo.addEventListener(
    'click',
    () => {

        if (!navigator.geolocation) {

            mostrarMensaje(
                'Tu navegador no permite utilizar la geolocalización.',
                true
            )

            return
        }


        mostrarMensaje(
            'Solicitando tu ubicación...'
        )


        navigator.geolocation.getCurrentPosition(

            posicion => {

                const lat =
                    posicion.coords.latitude

                const lon =
                    posicion.coords.longitude


                obtenerTiempo(
                    lat,
                    lon,
                    'Mi ubicación'
                )
            },


            error => {

                let texto =
                    'No se ha podido obtener tu ubicación.'


                if (error.code === 1) {

                    texto =
                        'Has rechazado el permiso de ubicación.'

                } else if (error.code === 2) {

                    texto =
                        'No se ha podido determinar tu ubicación.'

                } else if (error.code === 3) {

                    texto =
                        'La solicitud de ubicación ha tardado demasiado.'

                }


                mostrarMensaje(
                    texto,
                    true
                )
            }
        )
    }
)


// =========================================
// BUSCAR UNA CIUDAD
// =========================================

btnBuscar.addEventListener(
    'click',
    buscarCiudad
)


ciudad.addEventListener(
    'keydown',
    evento => {

        if (evento.key === 'Enter') {

            buscarCiudad()
        }
    }
)


function buscarCiudad() {

    const nombreCiudad =
        ciudad.value.trim()


    if (nombreCiudad === '') {

        mostrarMensaje(
            'Escribe una ciudad para buscar.',
            true
        )

        return
    }


    mostrarMensaje(
        'Buscando ciudad...'
    )


    resultado.innerHTML = `

        <div class="cargando">

            🔎 Buscando ubicación...

        </div>

    `


    // =====================================
    // API DE GEOCODIFICACIÓN OPEN-METEO
    // =====================================

    const url =
        'https://geocoding-api.open-meteo.com/v1/search' +

        `?name=${encodeURIComponent(
            nombreCiudad
        )}` +

        '&count=1' +

        '&language=es' +

        '&format=json'


    fetch(url)

        .then(respuesta => {

            if (!respuesta.ok) {

                throw new Error(
                    'Error al buscar la ciudad.'
                )
            }

            return respuesta.json()
        })

        .then(datos => {

            if (
                !datos.results ||
                datos.results.length === 0
            ) {

                throw new Error(
                    'No se ha encontrado esa ciudad.'
                )
            }


            const lugar =
                datos.results[0]


            let nombre =
                lugar.name


            if (lugar.country) {

                nombre +=
                    ', ' + lugar.country
            }


            obtenerTiempo(
                lugar.latitude,
                lugar.longitude,
                nombre
            )
        })

        .catch(error => {

            mostrarMensaje(
                error.message,
                true
            )

            resultado.innerHTML = ''
        })
}


// =========================================
// CAMBIAR ENTRE °C Y °F
// =========================================

unidad.addEventListener(
    'change',
    () => {

        if (
            ultimaLatitud !== null &&
            ultimaLongitud !== null
        ) {

            obtenerTiempo(
                ultimaLatitud,
                ultimaLongitud,
                ultimaUbicacion
            )
        }
    }
)