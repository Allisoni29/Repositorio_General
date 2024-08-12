
/*//ejercicio 1
//imprimir los numeros del 0 al 5 

var numero =1;

while(numero <=12){
   document.getElementById("resultado").innerHTML += numero +"<br>";
   numero = numero +1;
}
//ejercicio2
//imprimir los paises de peru a chile

const paises=['peru','uruguay','chile']
let i = 0;
while(paises.length >i){
   console.log(paises[i]);
   i=i+1;
}*/


//Mostrar prompt para capturar nombre

function nombre(){
    for(i=0;i<4;i++){
    var nombre = prompt("Cual es tu nombre?");
    document.getElementById("resultado").innerHTML +=nombre+"<br>";
    }
}