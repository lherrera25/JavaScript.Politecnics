const bares = [
  {
    id: 1,
    nombre: "Bar Atlanta",
    visitado: false,
  },
  {
    id: 2,
    nombre: "Bar El Toro",
    visitado: false,
  },
  {
    id: 3,
    nombre: "Fat Cat",
    visitado: false,
  },
  {
    id: 4,
    nombre: "La Prudència",
    visitado: false,
  },
  {
    id: 5,
    nombre: "Las Fernández",
    visitado: false,
  },
  {
    id: 6,
    nombre: "Nun Cultural Café",
    visitado: false,
  },
  {
    id: 7,
    nombre: "Chula Vista",
    visitado: false,
  },
  {
    id: 8,
    nombre: "El Magraner Boig",
    visitado: false,
  },
  {
    id: 9,
    nombre: "El Cafetí",
    visitado: false,
  },
  {
    id: 10,
    nombre: "La Ravala",
    visitado: false,
  },
  {
    id: 11,
    nombre: "La Monroe",
    visitado: false,
  },
  {
    id: 12,
    nombre: "Arume",
    visitado: false,
  },
  {
    id: 13,
    nombre: "La Morera",
    visitado: false,
  },
  {
    id: 14,
    nombre: "Bar Mendizábal",
    visitado: false,
  },
  {
    id: 15,
    nombre: "Dr. Beer & Mr. Fried",
    visitado: false,
  },
  {
    id: 16,
    nombre: "Biocenter",
    visitado: false,
  },
  {
    id: 17,
    nombre: "Bar Costa",
    visitado: false,
  },
  {
    id: 18,
    nombre: "Clemen's Boqueria",
    visitado: false,
  },
  {
    id: 19,
    nombre: "L'Universal",
    visitado: false,
  },
];

// console.log(bares[2].nombre)
// for(let i=0; i < bares.length; i++){
//   console.log(bares[i].nombre)
// }

// acceso y saludo
const btnEntrar = document.getElementById("btnEntrar");
function obtenerNombreUsuario() {
  const nombre = document.getElementById("nombre").value;
  return nombre;
}

// const noimbreUsuario = obtenerNombreUsuario(
//   console.log(nombreUsuario)
// )

function nombreValido(nombre) {
  if (nombre.trim() === "") {
    return false;
  } else {
    return true;
  }
}
function mostrarSaludo(nombre) {
  const saludo = document.getElementById("saludo");
  saludo.textContent = `Hola ${nombre}`;
}

btnEntrar.addEventListener("click", function () {
  const nombre = obtenerNombreUsuario();
  if (nombreValido(nombre) === false) {
    document.getElementById("mensajeAcceso").textContent = "¡introduce tu nombre!";
    return;
  }
  document.getElementById("mensajeAcceso").textContent = "";
  mostrarSaludo(nombre);
  document.getElementById("acceso").style.display = "none";
  document.getElementById("pasaporte").style.display = "block";

  // mostrarBares();
  actualizarAplicacion();
});
//gestionamos los bares//
function buscarBarPorId(idBar) {
  for (let i = 0; i < bares.length; i++) {
    if (bares[i].id === idBar) {
      return bares[i];
    }
  }
  return null;
}
function sellarBar(idBar) {
  const bar = buscarBarPorId(idBar);
  if (bar === null) {
    return "no se ha encontrado el bar";
  }
  if (bar.visitado === true) {
    return "este bar ya esta sellado";
  }
  bar.visitado = true;
  return `has sellado tu visita en ${bar.nombre}`;
}
//funcion mostrar bares
function mostrarBares() {
  const listaBares = document.getElementById("listaBares");
  listaBares.innerHTML = "";
  for (let i = 0; i < bares.length; i++) {
    const tarjeta = document.createElement("article");
    const numero = document.createElement("p");
    const nombre = document.createElement("h3");
    const estado = document.createElement("p");
    const boton = document.createElement("button");

    tarjeta.classList.add("bar"); //pendiente//
    numero.classList.add("numero-bar"); //pendiente//
    estado.classList.add("estado"); //pendiente//

    numero.textContent = `Parada ${bares[i].id}`;
    nombre.textContent = bares[i].nombre;

    if (bares[i].visitado === true) {
      estado.textContent = "Visita sellada";
      boton.disabled = true;
      tarjeta.classList.add("bar-visitado");
    } else {
      estado.textContent = "Pendiente";
      boton.textContent = "sellar visita";
    }
    boton.addEventListener("click", function () {
      const mensaje = sellarBar(bares[i].id);
      document.getElementById("mensajeSello").textContent = mensaje;
      actualizarAplicacion();
    });

    tarjeta.appendChild(numero);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(estado);
    tarjeta.appendChild(boton);

    listaBares.appendChild(tarjeta);
  }
}
function contarBaresVisitados() {
  let contador = 0;

  for (let i = 0; i < bares.length; i++)
    if (bares[i].visitado === true) {
      contador++;
    }
  return contador;
}
function calcularPorcentaje(visitados, total) {
  const porcentaje = (visitados / total) * 100;
  return Math.round(porcentaje);
}

function crearMensajeProgreso(visitados, total) {
  const porcentaje = calcularPorcentaje(visitados, total);
  return `Has visitado ${visitados} bares de un total de ${total}.
Tu progreso es del ${porcentaje}%`;
}

function mostrarProgreso() {
  const visitados = contarBaresVisitados();
  const total = bares.length;
  const mensaje = crearMensajeProgreso(visitados, total);
  document.getElementById("progreso").textContent = mensaje;
}

function comprobarPasaporteCompleto() {
  const visitados = contarBaresVisitados();
  const total = bares.length;
  if (visitados === total) {
    return "¡Pasaporte completo!";
  }
  const pendientes = total - visitados;

  return `Te faltan ${pendientes} bares por visitar.`;
}

function mostrarEstadoPasaporte() {
  const mensaje = comprobarPasaporteCompleto();
  document.getElementById("estadoPasaporte").textContent = mensaje;
}

function actualizarBarraProgreso() {
  const visitados = contarBaresVisitados();

  const porcentaje = calcularPorcentaje(visitados, bares.length);
  document.querySelector(".barraProgreso").style.width = `${porcentaje}%`;
}
function actualizarAplicacion() {
  mostrarBares();
  mostrarProgreso();
  mostrarEstadoPasaporte();
  actualizarBarraProgreso();
}
