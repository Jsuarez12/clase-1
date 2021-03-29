//operador +
var operandoN1 = 5000;
var operandoN2 = 15000;
var resultado = operandoN1 + operandoN2;
console.log( resultado );

//Operador *
var operandoN3 = 12;
var operandoN4 = 2;
var resultado2 = 12 * 2;
console.log( resultado2 );

//Operador /
var resultado3 = operandoN2 / operandoN1;
console.log ( "El resultado de tu division es:" + resultado3 );
//para juntar cadena de texto con variable se ju(^)ntan poninedo signo de mas (concatenar:juntar)
//Operador ++
resultado3++;
console.log("Incrementando la variable resultado3:" + resultado3 );

//Operadores de asignación
//Operador = 
operandoN1 = operandoN2;
console.log( operandoN1 );

//Operador +=
//Forma resumida
operandoN3 += operandoN4;
//Forma completa
//operandoN3 = operandoN3 + operandoN4;
console.log( operandoN3 );

//Operadores de comparación

var nComparacion1 = 10;
var nComparacion2 = 5;
var resultadoComparacion = ( nComparacion1 > nComparacion2 );
console.log( resultadoComparacion );

//Operadores lógicos
var oplN1 = 5;
var oplN2 = 20;
//unir copmaradores aritmeticos con los logicos, se usa condicion (&&=ampersons-se usan para uni¡r condiciones
var oplN3 = 30;
//Operador && ("AND" ó "Y")
var resultadoOperadorLY = ( oplN1 < oplN2 ) && ( oplN1 < oplN3 );
console.log( "El resultado del operador Y, es: " + resultadoOperadorLY );

//Operador || ("OR" ó "O") se hace con alt+1/ condiciones deben estar entre parentesis para indicarle a la computadora que debe primero realizar la comparacion que se encuentra dentro del parentesis
var resultadoOperadorLO = ( oplN1 < oplN2 ) || ( oplN2 < oplN3 );
console.log( "El resultado del operador ó, es: " + resultadoOperadorLO );

//resultado operador &&
// true && true = true
// false && false = false
// true && false = false
// false && true = false

// Resultado operador ||
// true || true = true
// false || false = false
// false || true = true 
// true || false = true

//Operador negación ! (cambiar valor de verdad)
var resultadoOperadorLN = !resultadoOperadorLO;
console.log( "El resultado de negación es: " + resultadoOperadorLN );

//estrucutras de control condicionales, realizar acciones dependiendo del resultado de condiciones
//se usa if para especificar un bloque de codigo que se ejecutará si una condicion especificadad es verdadera.
//la estrucura es la siguiente: if( expresion ){
//                                    instrucciones
//                                   }



