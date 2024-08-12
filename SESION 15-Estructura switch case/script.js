//variables
var clima = 'nublado';
var fruta = 'manzana';
var diasemana = 'martes';

//Estructura Switch Case

switch(clima){
    case'lluvioso':
        console.log("Recuerad llevar un paraguas");
        break;
    case 'soleado':
        console.log("viste ligero");
        break ;
    case 'nublado':
        console.log("sal a la calle");
        break;        
    default:
        console.log("Tipo de clima desconocido");  
        break; 
}

//si la fruta es manzana el precio es de s/.5
//si la fruta es platano el precio es de s/.2
//si la fruta es mango el precio es de s/.4
//si en cualquier otra fruta no se tiene esa fruta.

switch(fruta){
    case'manzana':
        console.log("el precio es de s/.5");
        break;
    case'platano':
        console.log("el precio es de s/.2");
        break;
    case'mango':
        console.log("el precio es de s/.4");
    default:
        console.log("cualquier otra fruta no se tiene esa fruta");          
}

switch(diasemana){
    case'lunes':
        console.log("hoy es lunes");
        break;
    case'martes':
        console.log("hoy es martes");
        break;
    case'miercoles':
        console.log("hoy es miercoles");
        break;
    case'jueves':
        console.log("hoy es jueves");
        break;
    case'viernes':
        console.log("hoy es viernes");
        break;
    case'sabado':
        console.log("hoy es sabado");
        break;
    case'domingo':
        console.log("hoy es domingo") 
        break;
    default:
        console.log("no es un dia de la semana")                       
}