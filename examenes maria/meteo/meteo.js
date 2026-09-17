
const btnTiempo = document.getElementById('btnTiempo')
const mensaje = document.getElementById('mensaje')
const resultado = document.getElementById('resultado')


btnTiempo.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((posicion) => {
        console.log(posicion)
        const lat = posicion.coords.latitude
        const lon = posicion.coords.longitude

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m`

        fetch(url)
            .then(respuesta => {
                // console.log(respuesta)
                return respuesta.json()
            })
            .then(datos => {
                console.log(datos.current.temperature_2m)
            }
            )


    })
})


