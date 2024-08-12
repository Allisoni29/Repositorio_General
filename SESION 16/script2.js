//variables 
const preguntas = ["¿Con que frecuencia realizas deporte?<br>Considera como deporte cualquier actividad que acelere tu ritmo cardiaco ,como caminar rapido,andar en bicileta ,bailar o, por supuesto,practicar un deporte",
    "¿Cuantos vasos de agua (200mL) bebes al dia?<br>No consideres la ingesta de otros liquidos ,como gaseosas,jugos azucarados o alcohol.",
    "¿Cuantas porciones de frutas y verduras consumes diariamente?"];

const opciones = [
    ["3 ó mas veces por semana",
        "Entre 1 y 2 veces a la semana",
        "Al menos 4 veces al mes"],
    ["Al menos 8 vasos al dia",
        "Entre 5 y 8,depende del dia",
        "Cuando me acuerdo"],
    ["5 o mas",
        "2 a 4",
        "Al menos 1 vez al dia"]

];

const clave = [
    [5, 4, 3],
    [5, 4, 2],
    [5, 4, 3]
];

var i = 0;//indice de pregunta
var puntaje = 0;
var intervalo;

function mostrarPregunta() {
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opciones[i][0];
    document.getElementById('op2').innerHTML = opciones[i][1];
    document.getElementById('op3').innerHTML = opciones[i][2];
    iniciarCronometro();
}


function iniciarCronometro() { 
    var tiempo = 15;
    var  cronometro = document.getElementById('cronometro');
    iniciartiempo(duracion,cronometro);
}

function iniciartiempo(tiempo,elemento){
    intervalo= setInterval(() => {
        if(tiempo ==0){
            clearInterval(intervalo);
            i=i+1;
            mostrarPregunta();

        }else{
            tiempo = tiempo - 1;
            elemento.textContext = "00:"+duracion;
        }
        },100);
}

mostrarPregunta();



















//Eventos
document.getElementById('op1').addEventListener("click", function () {
    actualizarPuntajes(0);
})
document.getElementById('op2').addEventListener("click", function () {
    actualizarPuntajes(1);
})
document.getElementById('op3').addEventListener("click", function () {

})

//Operaciones(funciones)

function mostrarPregunta() {
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opciones[i][0];
    document.getElementById('op2').innerHTML = opciones[i][1];
    document.getElementById('op3').innerHTML = opciones[i][2];
}

function actualizarPuntaje(valor) {
    clearInterval(intervalo);
    if(valor)
        puntaje = clave[i][valor] + puntaje;
    i = i + 1;
    if (preguntas.length > i) {
        mostrarPreguntas();
    } else {
        localStorage.setItem("respuesta",puntaje);
        local.href="resultado.html";
    }
}






mostrarPregunta();
