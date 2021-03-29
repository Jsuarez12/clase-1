//Ejercicio 1
//Cada vez que una persona ingrese una hora al día
//se mostrará un mensaje que diga el deporte que se 
//está realizando en la cancha
//tendremos que usar rangos para las horas

const prompt = require('prompt-sync')();
//var horaDia = prompt( "Dame la hora: " );
//console.log( horaDia );
// para anotar o dejar como comentario una gran parte del codigo se hace con /* y se cierra con */
/*
if( horaDia < 3 ){

    console.log( "Está el equipo de Futbol entrendando ")
}
else if( (horaDia > 3) && (horaDia <= 6) ){
    console.log( "Está el equipo de futbol americano E" );
}
else if( (horaDia > 6) && (horaDia <= 9 ) ){
    console.log( "Está el equipo de Atletismo" );
}


//se escribe true y false porq en una condicion solo podemos tener dos resultados, true o false
switch( horaDia <= 3 ){
    case true:
        console.log( "Está el equipo de futbol entrenadno");
        break;
    case false:
        console.log( "Está otro equipo entrenando");
        break;
}

//aqui se estaría desperdiciando el switch pues es mejor usarlo con 3 o mas opciones y al coindicionarlo nos limita a tener solo dos resultados
//alert( "Hola" );

//pedir datos desde pantalla
// npm install prompt-sync
//const prompt = require('prompt-sync')();
//var nombre = prompt("Ingresa tu nombre");
//console.log("Hola" + nombre);

//Ejercicio 2
//cada vez que una persona ingrese un deporte 

const deporte = prompt( 'Por favor dime el nombre de un deporte: ');
switch( deporte ){
    case "Futbol":
        console.log("Horario: 1 a 3 PM ");
        break;
    case "Atletismo":
        console.log("Horario: 3 a 6 PM" );
        break;
    case "Americano":
        console.log("Horario: 6 a 9 PM");
}
*/

var arregloNumerico = [ 1, 2, 3, 4, 5 ];
console.log( arregloNumerico );
var arregloNombres = [ "Luis", "Diana", "Omar", "Paola" ];
console.log(arregloNombres);
var arregloMixto = [20, 16, , "Luis", , "Paola", true, false];
console.log(arregloMixto);
//para elegir un indice especifico (una posicion especifica), se empiexa desde 0, en arregloNombres luis es posicion 0
console.log( arregloNombres[0] );
