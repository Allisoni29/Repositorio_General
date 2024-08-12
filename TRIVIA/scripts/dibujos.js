const preguntas = [
    "1.¿En los increíbles cuál es el superpoder de la hija de Mr. Increíble y Elastigirl?",
    "2. En Toy Story, ¿cuál de los personajes de juguete es el favorito de Andy?",
    "3. ¿Con quién se casa Shrek al final de la película?",
    "4. ¿Cuáles son los nombres de las Chicas Superpoderosas?",
    "5. En Coraline, ¿cuántos ojos de fantasma debe encontrar Coraline?"
];

const opciones = [
    ["Velocidad", "Teletransportación", "Volar", "Invisibilidad", "Otra opción"],
    ["Buzz Lightyear", "Woody", "Betty", "Señor Cara de Papa", "Otra opción"],
    ["Fiona", "Burro", "Hada Madrina", "Gato con Botas", "Otra opción"],
    ["Bombón, Bellota, Burbuja", "Bombi, Yelo, Bubu", "Bellota, Lara, Bibi", "Tania, Mojojo, Blanca Nieves", "Otra opción"],
    ["3", "4", "2", "1", "Otra opción"]
];

const claves = [
    [0, 0, 0, 5, 0],
    [0, 5, 0, 0, 0],
    [5, 0, 0, 0, 0],
    [0, 0, 5, 0, 0],
    [5, 0, 0, 0, 0]
];

var i = 0; // índice de la pregunta
var puntaje = 5;
var intervalo;

// Eventos
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
    intervalo = setInterval(function() {
        if (tiempo === 0) {
            actualizarPuntaje();
        } else {
            tiempo -= 1;
            elemento.innerHTML = "00:" + (tiempo < 10 ? "0" : "") + tiempo;
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

    i += 1;
    if (preguntas.length > i) {
        mostrarPregunta();
    } else {
        localStorage.setItem("respuesta", puntaje);
        location.href = "resultados.html";
    }
}

mostrarPregunta();


