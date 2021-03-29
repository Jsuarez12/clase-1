/*
var arregloNombres = [ "Luis", "Diana", "Omar", "Paola" ];

arregloNombres[ 2 ];
console.log(arregloNombres[2]);

arregloNombres [ 2 ] = "Rosa";
console.log( arregloNombres [2] );

delete arregloNombres[ 2 ];
console.log ( arregloNombres );
//borrramos lo que hay en la posicion numero 2 más no la posicion numero dos, y por eso queda vacío

arregloNombres.length;
console.log ( "La cantidad de elementos"
            + "en el arreglo es: " 
            + arregloNombres.length );
arregloNombres.push( "Cristina" );
console.log( arregloNombres );

arregloNombres.pop();
console.log ( arregloNombres );

//primer numero (cero): posicion de incio, segundo numero (cero): numero 
//de valores a borrar, en comillas esta el nuevo valor a agregar
arregloNombres.splice( 
    0, 0, "Estrella"
 );
 console.log ( arregloNombres );

 arregloNombres.splice(
     1, 1
 );
 console.log (arregloNombres);
*/
 //con delete borramos el valor pero no la posicion, con splice si se puede borrar la posicion

 //ejercicio:
 //Realizar un programa que lea por teclado 5 notas/calificaciones
 //y muestre el promedio de estas

 const prompt = require('prompt-sync')();
 var calificaciones = [];
 calificaciones [0] = prompt( "Dame la primera calificación: " );
 calificaciones [1] = prompt( "Dame la segunda calificación: " );
 calificaciones [2] = prompt( "Dame la tercera calificación: " );
 calificaciones [3] = prompt( "Dame la cuarta calificación: " );
 calificaciones [4] = prompt( "Dame la quinta calificación: " ); 

//var resultado =  ( calificaciones[0] + calificaciones[1] + calificaciones[2] + calificaciones[3] + calificaciones[4] )/5 ;
var calif1 = calificaciones[0];
var calif2 = calificaciones[1];
var calif3 = calificaciones[2];
var calif4 = calificaciones[3];
var calif5 = calificaciones[4];

var resultado = parseInt(calif1) + parseInt(calif2) + parseInt(calif3) + 
parseInt(calif4) + parseInt(calif5); 

resultado /= 5;

 console.log ( resultado );


 var concatenaN1 = [ "Hola", "Buenas", "Tardes"];
 var concatenaN2 = [ "Adios", "Buenas", "Noches"];
 console.log (concatenaN1.concat( concatenaN2 ));
 