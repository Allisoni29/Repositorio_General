var respuesta = localStorage.getItem("respuesta");
if(respuesta > 10){
document.getElementById('respuesta').innerHTML="Tu puntaje es"+ respuesta+"Felicitaciones ! Tienes buena salud";

}else if (respuesta  >5){
    document.getElementById('respuesta').inert="Tu puntaje es "+ respuesta+"Ojo! Hya que cuidarse mas";

}
else{
    document.getElementById('respuesta').innerHTML="Tu puntaje es"+respuesta+"Terrible!Estas en riesgo";
}



var respuesta = localStorage.get("resultados")
document.getElementById("resultados").innerHTML=respuesta;