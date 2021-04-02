//Ciclos - while 
/*
while ( true ){
    console.log( "hola" );
};
de esta forma se ciclaria infinitamente
*/ 
var contadorN1 = 5;
var contadorN2 = 30;
while( contadorN1 < 10 && contadorN2 > 25){
    console.log( "ContadorN1: " + contadorN1 + "   contadorN2: " + contadorN2 );
    contadorN1++;
    contadorN2--;
};

//Ciclos do-while
var contadorN3 = 0;
var condicionN1 = "Hola";
do{
    console.log( "Entraste al ciclo do while" );
    contadorN3++;
    if( contadorN3 == 2 ){
        condicionN1 = "Adios"
    }
}while( condicionN1 == "Hola" );

var condicionN2 = 5;
do {
    console.log( "Valor: " + condicionN2 ); //muestra valor orignial 
    condicionN2 -= 5; //decrementamos de cinoc en cinco 
}while( condicionN2 >= 5 ); //va a preguntar si se cumple la condicion

//Ejercicio do-while
//Crear un programa que lea tantos numeros 
//como se quiera hasta que se reciba un cero,
//y se mostrará un resultado, que será la
//suma de todos los numeros ingresados.
const prompt = require('prompt-sync')();
var recibeNumero;
var suma = 0;

do{
    recibeNumero = prompt( "Dame un numero: " ); //recibimos un texto, por eso le ponemos parseInt para que lo pase a un numero como tal
    suma = suma + parseInt(recibeNumero); 
}while( recibeNumero != 0 );

console.log( "La suma total es: " + suma );

//mismo anterior pero con while
recibeNumero = prompt( "Dame un numero: " );
while(recibeNumero != 0){
    suma = suma + parseInt(recibeNumero); 
    recibeNumero = prompt( "Dame un numero: " ); //se vuelve a poner para seguir recibiendo resultados y que el programa no se quede con el primero que le dimos al principio 
}
console.log(  "La suma total es: " + suma );