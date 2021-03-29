//Ejercicio de repaso semana 1
//Para calcular el promedio de practicas de un curso se tomara 
//la calificacion de las 4 practicas que se hicieron, de estas 4
//se va a a eliminar la practica con menor calificacion y se
//obtendra el promedio de las 3 practicas restantes. 

//se declaran como constantes pues no cambian los resultados de esas practicas.

const practicaN1 = 8;
const practicaN2 = 9;
const practicaN3 = 10;
const practicaN4 = 7;
//utilizamos variable que nos ayudará a saber cual es la calificacion menor.
var califMenor = practicaN1;
var resultado = 0;

if( practicaN2 < califMenor ){
    califMenor = practicaN2;
}
if( practicaN3 < califMenor ){
    califMenor = practicaN3;
}
if ( practicaN4 < califMenor ) {
    califMenor = practicaN4;
}

//obtener promedio de las tres mayores

resultado = (practicaN1 + practicaN2 + practicaN3 + practicaN4 - califMenor) / 3;

console.log ( resultado );
