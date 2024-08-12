var color = "verde";
var tamaño = "mediano";
var precio = "1000";
var estacion = "verano";

var nota = 16;

// Si el color es verde y el precio es menor igual a 1000;
//entonces lo compro,caso contrario me compro otra cosa
if(color == "verde" && precio <= 1000){
    console.log ("lo compro")
}else{
    console.log ("compro otra cosa");
}

//Si el tamaño es mediano o el color es verde lo compro,
// caso contrario me voy de viaje.
if(tamaño == "mediano" || color == "verde"){
    console.log("compro");
}else{
    console.log("me voy de viaje");
}

//Si la estacion es invierno o la estacion es otoño "lo compro"
// caso contrario ahorro el dinero.
if(estacion == "invierno" || estacion =="otoño"){
    console.log("lo compro");
}else{
    console.log("ahorro el dinero");
}

//Si el tamaño es mediano ó el precio es menor igual a 1000 
//o el color es rojo entonces lo compro,caso contrario lo pongo en
//en el banco.
if(tamaño=="mediano"|| precio <= 100 ||color==rojo){
    console.log("lo compro");
}else{
    console.log("lo pongo en el banco")
}

//Si la nota es mayor o igual a 10 y menor a 15 entonces tendra una "C"
//Si la nota es mayor a 15 y menor a 18 ,entonces tendra una "B"
//Caso contrario tendra una "A"
if(nota>= 10 && nota<15){
    console.log("C");
}else if (nota>15 && nota <18){
    console.log("B");
}else{
    console.log("A");
}