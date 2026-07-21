// =======================================
// ACADEMIA DE VILLANOS
// =======================================

// Elementos del HTML
const botonCalcular = document.getElementById("boton-calcular");
const producto = document.getElementById("producto");
const cantidad = document.getElementById("cantidad");

const resultado = document.getElementById("resultado");
const listaAlumnos = document.getElementById("lista-alumnos");

// Comprobamos que existe el botón
if (botonCalcular) {
    botonCalcular.addEventListener("click", calcularPresupuesto);
}

// =======================================
// FUNCIÓN PRINCIPAL
// =======================================

function calcularPresupuesto() {

    // Limpiar resultados anteriores
    resultado.innerHTML = "";
    listaAlumnos.innerHTML = "";

    let tipo = producto.value;
    let alumnos = Number(cantidad.value);

    let curso = "";
    let precio = 0;

    // Validación
    if (alumnos <= 0 || isNaN(alumnos)) {

        resultado.innerHTML =
            "<span style='color:red;'>⚠ Introduce una cantidad válida.</span>";

        return;
    }

    // Precio según el curso

    switch (tipo) {

        case "ancestral":
            curso = "Curso Villano Ancestral";
            precio = 350;
            break;

        case "payaso":
            curso = "Curso Villano Payaso";
            precio = 200;
            break;

        case "callejero":
            curso = "Curso Villano Callejero";
            precio = 250;
            break;

        case "hechicera":
            curso = "Curso Hechicera Azul";
            precio = 400;
            break;

    }

    // Extras

    let material = alumnos * 25;
    let diploma = alumnos * 15;
    let matricula = 50;

    // Operaciones

    let subtotal = alumnos * precio;

    let descuento = 0;

    let mensaje = "";

    if (alumnos >= 10) {

        descuento = subtotal * 0.20;

        mensaje =
            "🔥 ¡20% de descuento por grupo de supervillanos!";

    }

    else if (alumnos >= 5) {

        descuento = subtotal * 0.10;

        mensaje =
            "😈 ¡10% de descuento aplicado!";

    }

    else if (alumnos >= 3) {

        mensaje =
            "🦹 Buen equipo de futuros villanos.";

    }

    else {

        mensaje =
            "👿 Todo gran villano empieza solo.";

    }

    let total =
        subtotal +
        material +
        diploma +
        matricula -
        descuento;

    // Fecha

    let fecha = new Date();

    // Resultado

    resultado.innerHTML =

        "<h2>📜 PRESUPUESTO</h2>" +

        "<hr>" +

        "<p>" + mensaje + "</p>" +

        "<br>" +

        "<strong>Curso:</strong> " + curso +

        "<br>" +

        "<strong>Precio por alumno:</strong> " +
        precio +
        " €" +

        "<br>" +

        "<strong>Alumnos:</strong> " +
        alumnos +

        "<br><br>" +

        "<strong>Subtotal:</strong> " +
        subtotal.toFixed(2) +
        " €" +

        "<br>" +

        "<strong>Material didáctico:</strong> " +
        material.toFixed(2) +
        " €" +

        "<br>" +

        "<strong>Diploma oficial:</strong> " +
        diploma.toFixed(2) +
        " €" +

        "<br>" +

        "<strong>Matrícula:</strong> " +
        matricula.toFixed(2) +
        " €" +

        "<br>" +

        "<strong>Descuento:</strong> -" +
        descuento.toFixed(2) +
        " €" +

        "<hr>" +

        "<h2 style='color:gold;'>TOTAL: " +
        total.toFixed(2) +
        " €</h2>" +

        "<p>Fecha: " +
        fecha.toLocaleDateString("es-ES") +
        "</p>";

    // Lista de alumnos

    listaAlumnos.innerHTML =
        "<h3>Alumnos inscritos</h3>";

    for (let i = 1; i <= alumnos; i++) {

        listaAlumnos.innerHTML +=

            "<p>✔ Alumno " +
            i +
            " inscrito en " +
            curso +
            "</p>";

    }

    // Mensaje final

    listaAlumnos.innerHTML +=

        "<br><h3 style='color:#4CAF50;'>🎉 ¡Bienvenidos a la Academia de Villanos!</h3>";

}