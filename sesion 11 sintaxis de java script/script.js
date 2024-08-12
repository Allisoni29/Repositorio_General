//Recordar como crear una variable string
var lenguaje = "python";
console.log(lenguaje);
var numero = 45;
console.log(numero);
document.write(lenguaje);
document.getElementById('texto').innerHTML= lenguaje;

function mostrar (){
var nombre = document.getElementById("nombre").value;
var apellidos = document.getElementById("apellidos").value;
var nacimiento = document.getElementById("nacimiento").value;
var sexo = document.getElementById("sexo").value;

console.log(nombre + "/n" + apellidos + "/n" + nacimiento + "/n" + sexo + "/n" );
}