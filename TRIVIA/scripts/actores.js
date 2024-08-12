const preguntas = [
    "1. ¿Cómo se llamaba el actor que participa en la película Titanic?",
    "2. ¿Qué película pertenece a Angelina Jolie?",
    "3. ¿Qué edad tiene el actor Tom Holland?",
    "4. ¿Qué actor interpreta a Harry Potter?",
    "5. ¿Cuál de los actores dio primero vida a Spiderman?"
];

const opciones = [
    ["Leonardo DiCaprio", "Leonardo Bonucci", "Leonardo Da Vinci", "Leonardo Doncio"],
    ["Malefica", "Spiderman", "Jurassic Park", "La bella y la bestia"],
    ["40", "28", "30", "20"],
    ["Voldemort", "Hermione", "Daniel Radcliffe", "Emma Watson"],
    ["Tom Holland", "Andrew Garfield", "Tobey Maguire", "Chayanne"]
];

const claves = [
    [2, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 2, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0]
];

var i = 0; // índice de la pregunta
var puntaje = 5;
var intervalo;

// Event Listeners para las opciones
document.getElementById('op1').addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById('op2').addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById('op3').addEventListener('click', function () {
    actualizarPuntaje(3);
});
document.getElementById('op4').addEventListener('click', function () {
    actualizarPuntaje(4);
});
document.getElementById('op5').addEventListener('click', function () {
    actualizarPuntaje(5);
});

// Operaciones (funciones)

function mostrarPregunta() {
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opciones[i][0];
    document.getElementById('op2').innerHTML = opciones[i][1];
    document.getElementById('op3').innerHTML = opciones[i][2];
    document.getElementById('op4').innerHTML = opciones[i][3];
    document.getElementById('op5').innerHTML = opciones[i][4];
    iniciarCronometro();
}

function iniciarCronometro() {
    var duracion = 15;
    var cronometro = document.getElementById('cronometro');
    cronometro.innerHTML = "00:15";
    iniciarTiempo(duracion, cronometro);
}

function iniciarTiempo(tiempo, elemento) {
    intervalo = setInterval(() => {
        if (tiempo === 0) {
            actualizarPuntaje();
        } else {
            tiempo = tiempo - 1;
            elemento.textContent = "00:" + tiempo;
        }
    }, 1000);
}

function actualizarPuntaje(valor) {
    clearInterval(intervalo);
    if (valor) {
        valor = valor - 1;
        console.log(claves[i][valor]);
        puntaje = claves[i][valor] + puntaje;
    }

    i = i + 1;
    if (preguntas.length > i) {
        mostrarPregunta();
    } else {
        localStorage.setItem("respuesta", puntaje);
        location.href = "resultados.html";
    }
}

// Inicializar mostrando la primera pregunta
mostrarPregunta();
