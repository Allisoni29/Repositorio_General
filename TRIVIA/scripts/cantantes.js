const preguntas = [
    "1. ¿En qué año fallece el cantante Michael Jackson?",
    "2. ¿Quién sacó el álbum llamado 'Thank U, Next'?",
    "3. ¿De qué nacionalidad es el cantante Maluma?",
    "4. ¿Quién es la princesa del pop?",
    "5. ¿Cuál es el género de música de Romeo Santos?"
];

const opciones = [
    ["2009", "1940", "1800", "2024"],
    ["Ariana Grande", "Billie Eilish", "Lana del Rey", "Olivia Rodrigo"],
    ["Colombiano", "Venezolano", "Peruano", "Argentino"],
    ["Britney Spears", "Madonna", "Rihanna", "Cardi B"],
    ["Bachata", "Reggaeton", "Balada", "Reparto Chocolatero"]
];

const claves = [
    [5, 0, 0, 0],
    [0, 0, 5, 0],
    [5, 0, 0, 0],
    [5, 0, 0, 0],
    [0, 0, 5, 0]
];

var i = 0; // Índice de la pregunta
var puntaje = 0; // Inicializamos el puntaje en 0
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

// Función para mostrar la pregunta actual
function mostrarPregunta() {
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opciones[i][0];
    document.getElementById('op2').innerHTML = opciones[i][1];
    document.getElementById('op3').innerHTML = opciones[i][2];
    document.getElementById('op4').innerHTML = opciones[i][3];
}

// Función para iniciar el cronómetro
function iniciarCronometro() {
    var duracion = 15;
    var cronometro = document.getElementById('cronometro');
    cronometro.innerHTML = "00:15";
    iniciarTiempo(duracion, cronometro);
}

// Función para iniciar el tiempo del cronómetro
function iniciarTiempo(tiempo, elemento) {
    intervalo = setInterval(() => {
        if (tiempo === 0) {
            actualizarPuntaje();
        } else {
            tiempo--;
            elemento.textContent = "00:" + tiempo;
        }
    }, 1000);
}

// Función para actualizar el puntaje
function actualizarPuntaje(valor) {
    clearInterval(intervalo);
    if (valor) {
        valor--;
        puntaje += claves[i][valor];
    }

    i++;
    if (i < preguntas.length) {
        mostrarPregunta();
        iniciarCronometro();
    } else {
        localStorage.setItem("respuesta", puntaje);
        location.href = "resultados.html";
    }
}

// Inicializar la primera pregunta al cargar la página
mostrarPregunta();
iniciarCronometro();
