// Obtén la respuesta del almacenamiento local
var respuesta = localStorage.getItem("respuesta");

// Convierte la respuesta a un número (suponiendo que la respuesta es una cadena numérica)
respuesta = Number(respuesta);

// Obtén el elemento con el ID 'respuesta'
var respuestaElemento = document.getElementById('respuesta');

// Asegúrate de que el elemento exista
if (respuestaElemento) {
    if (respuesta > 10) {
        respuestaElemento.innerHTML = "Tu puntaje es 20: " + respuesta + " Felicitaciones! Sabes mucho de cultura pop";
    } else if (respuesta > 5) {
        respuestaElemento.innerHTML = "Tu puntaje es 15: " + respuesta + " Vamos! No te desanimes";
    } else {
        respuestaElemento.innerHTML = "Tu puntaje es 5: " + respuesta + " Terrible! No sabes nada";
    }
} else {
    console.error("El elemento con el ID 'respuesta' no se encontró en el DOM.");
}
