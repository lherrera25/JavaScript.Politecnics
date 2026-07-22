// ======================================
// ACADEMIA DE VILLANOS
// ======================================

// Elementos del HTML
const botonCalcular = document.getElementById("boton-calcular");
const producto = document.getElementById("producto");
const cantidad = document.getElementById("cantidad");

const resultado = document.getElementById("resultado");
const listaAlumnos = document.getElementById("lista-alumnos");

// Número máximo de alumnos
const maxAlumnos = 20;

// Listado de nombres
const nombres = [
    "Joker",
    "Harley",
    "Victor",
    "Edward",
    "Selina",
    "Bruce",
    "Oswald",
    "Pamela",
    "Lex",
    "Arthur",
    "Bane",
    "Raven",
    "Magnus",
    "Draco",
    "Loki",
    "Hades",
    "Scar",
    "Ronan",
    "Morgana",
    "Nyssa"
];

// Listado de apellidos
const apellidos = [
    "Romero",
    "Black",
    "Dark",
    "Storm",
    "Knight",
    "Crow",
    "Shadow",
    "Frost",
    "Steel",
    "Wolf",
    "King",
    "Hunter",
    "Stone",
    "Cross",
    "Doom",
    "Night",
    "Grimm",
    "Blaze",
    "Viper",
    "Thorne"
];

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

    // ==========================
    // VALIDACIONES
    // ==========================

    if (alumnos <= 0 || Number.isNaN(alumnos)) {

        resultado.innerHTML =
            "<span style='color:red;'>⚠ Introduce una cantidad válida.</span>";

        return;
    }

    if (alumnos > maxAlumnos) {

        resultado.innerHTML =
            "<span style='color:red;'>⚠ Solo se permiten un máximo de " +
            maxAlumnos +
            " alumnos.</span>";

        return;
    }

    // ==========================
    // PRECIO SEGÚN EL CURSO
    // ==========================

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

    // ==========================
    // EXTRAS
    // ==========================

    const material = alumnos * 25;
    const diploma = alumnos * 15;
    const matricula = 50;

    // ==========================
    // OPERACIONES
    // ==========================

    const subtotal = alumnos * precio;

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

    const total =
        subtotal +
        material +
        diploma +
        matricula -
        descuento;

    const fecha = new Date();
        // =======================================
    // RESULTADO DEL PRESUPUESTO
    // =======================================

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

        "<strong>Alumnos inscritos:</strong> " +
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

    // =======================================
    // BUCLE FOR
    // Genera un nombre y apellido diferente
    // para cada alumno inscrito
    // =======================================

    let html = "<h3>📋 Lista de alumnos inscritos</h3><br>";

    // Evitar nombres repetidos
    let nombresUsados = [];

    for (let i = 1; i <= alumnos; i++) {

        let nombreCompleto = "";

        do {

            let nombre =
                nombres[Math.floor(Math.random() * nombres.length)];

            let apellido =
                apellidos[Math.floor(Math.random() * apellidos.length)];

            nombreCompleto = nombre + " " + apellido;

        } while (nombresUsados.includes(nombreCompleto));

        nombresUsados.push(nombreCompleto);

        html +=

            "<div style='background:#222;border:1px solid #8b0000;padding:15px;border-radius:10px;margin-bottom:15px;'>" +

            "<strong>Alumno " + i + "</strong><br><br>" +

            "<label>Nombre y apellidos</label><br>" +

            "<input " +

            "type='text' " +

            "value='" + nombreCompleto + "' " +

            "readonly " +

            "style='width:100%;padding:10px;border-radius:6px;border:1px solid #555;background:#111;color:white;margin-top:5px;'>" +

            "</div>";

    }

    html +=

        "<h3 style='color:#4CAF50;'>🎉 ¡Bienvenidos a la Academia de Villanos!</h3>";

    listaAlumnos.innerHTML = html;

}