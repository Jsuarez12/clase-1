/*

var concatenaN1 = [ "Hola", "Buenas", "Tardes"];
var concatenaN2 = [ "Adios", "Buenas", "Noches"];
 console.log (concatenaN2.concat( concatenaN1 ));
*/
//Metodo sort - sirve para ordenar
var frutasN1 = [ "Mandarina", "Piña", "Sandia", "Durazno" ];
var frutasN2 = [ "Mandarina", "Piña", "Pera", "Durazno"];
var arregloNumeros = [ 5000, 10, 200, 1000, 4000 ];

frutasN1.sort(); //lo ordena por orden alfabetico
console.log( frutasN1 );

frutasN2.sort();
console.log( frutasN2 );

//arregloNumeros.sort();
console.log( arregloNumeros );

//Ciclos - for
console.log( "Hola - Forma manual" ); 
for( var i = 10; i >= 2; i-- ){ //aumento en 1: ++, decremento en 1: --, tratar de usar solo esos
    console.log( "Hola - Forma automatica," + "i: " + i);
}
// ctrl + c = esencial para debugear cuadno se cree un bucle infinito

//console.log( arregloNumeros[4] );
for( var j = 0; j < arregloNumeros.length; j++ ){
    console.log( "El valor del arreglo en la " + 
    "posicion " + j + " es: " + arregloNumeros[j]);
}



