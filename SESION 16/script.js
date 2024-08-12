//Variables
const diaSemana=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
const frutas = ["manzana","platano","pera","uva","ciruela"];




//funciones
document.getElementById('mostrar').addEventListener("click",function mostrar(){
    //Salida en Documento
    document.getElementById("arreglo1").innerHTML=diaSemana;
    document.getElementById("valor1").innerHTML = diaSemana[6];
    document.getElementById("frutas1").innerHTML = frutas;
    
    //Longitud del arreglo frutas
    document.getElementById("longitudfrutas").innerHTML='Hay'+ frutas.length +'frutas';

})
