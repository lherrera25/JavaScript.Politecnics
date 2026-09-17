/* =====================================================
   CV LILIANNA HERRERA
   JAVASCRIPT BÁSICO Y ACCESIBLE
   WCAG AA
   ===================================================== */


/* =====================================================
   1. MENÚ MÓVIL
   ===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");


/* Comprobar que existen los elementos */

if (menuBtn && navLinks) {

    /* Estado inicial del botón */

    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menú");


    /* Abrir y cerrar menú */

    menuBtn.addEventListener("click", function () {

        const menuAbierto = navLinks.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            menuAbierto ? "true" : "false"
        );

        menuBtn.setAttribute(
            "aria-label",
            menuAbierto ? "Cerrar menú" : "Abrir menú"
        );

    });


    /* Cerrar menú al pulsar un enlace */

    const enlaces = navLinks.querySelectorAll("a");

    enlaces.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Abrir menú");

        });

    });


    /* Cerrar menú con la tecla Escape */

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {

            navLinks.classList.remove("open");

            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Abrir menú");

            menuBtn.focus();
        }

    });

}


/* =====================================================
   2. CERRAR MENÚ AL CAMBIAR A ESCRITORIO
   ===================================================== */

window.addEventListener("resize", function () {

    if (window.innerWidth > 600 && navLinks && menuBtn) {

        navLinks.classList.remove("open");

        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Abrir menú");

    }

});


/* =====================================================
   3. ARRAY Y OBJETOS DE HABILIDADES (OPTIMIZADO)
   ===================================================== */

const habilidades = [

    {
        categoria: "frontend",
        nombre: "Maquetación y Frontend",
        texto: "html, css, javascript, maquetación web, frontend."
    },

    {
        categoria: "wordpress",
        nombre: "CMS",
        texto: "wordpress, temas, plugins, personalización."
    },

    {
        categoria: "backend",
        nombre: "Backend y Datos",
        texto: "php básico, sql, postgresql, poo."
    },

    {
        categoria: "herramientas",
        nombre: "Herramientas",
        texto: "git, documentación técnica, integración de proyectos, seguridad web básica."
    }

];


/* =====================================================
   4. FUNCIÓN PARA MOSTRAR LAS HABILIDADES (OPTIMIZADA)
   ===================================================== */

function mostrarHabilidades(lista) {

    const contenedor = document.querySelector(".skills-grid");


    /* Comprobar que existe el contenedor */

    if (!contenedor) {
        return;
    }


    /* Limpiar contenido anterior */

    contenedor.innerHTML = "";


    /* Recorrer el array y generar las tarjetas */

    lista.forEach(function (habilidad, index) {

        const tarjeta = document.createElement("article");
        tarjeta.classList.add("skill-card");

        // Formato numérico de dos dígitos (01, 02, etc.)
        const numero = String(index + 1).padStart(2, "0");

        tarjeta.innerHTML = `
            <span class="skill-number">${numero}</span>
            <h3>${habilidad.nombre}</h3>
            <p class="skill-text">${habilidad.texto}</p>
        `;

        contenedor.appendChild(tarjeta);

    });

}


/* =====================================================
   5. FILTRAR HABILIDADES
   ===================================================== */

function filtrarHabilidades(categoria) {

    let resultado;

    if (categoria === "todas") {

        resultado = habilidades;

    } else {

        resultado = habilidades.filter(function (habilidad) {

            return habilidad.categoria === categoria;

        });

    }

    mostrarHabilidades(resultado);

}


/* =====================================================
   6. BOTONES DEL FILTRO
   ===================================================== */

const botonesFiltro = document.querySelectorAll(".filter-btn");

botonesFiltro.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const categoria = boton.dataset.filter;

        botonesFiltro.forEach(function (otroBoton) {

            otroBoton.classList.remove("active");

        });

        boton.classList.add("active");

        filtrarHabilidades(categoria);

    });

});


/* =====================================================
   7. MOSTRAR TODAS LAS HABILIDADES AL CARGAR
   ===================================================== */

mostrarHabilidades(habilidades);


/* =====================================================
   8. AÑO AUTOMÁTICO DEL FOOTER
   ===================================================== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =====================================================
   FIN DEL JAVASCRIPT
   ===================================================== */