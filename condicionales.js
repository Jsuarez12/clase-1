// se usa else para especificar un bloque de codigo que se ejecutará. si la misma expresion es falsa
// la estrucutra es if(){
//                    instrucciones
//                    }
//                   else{ 
//                    }
// se usa else if para especificar una nueva expresion para probar, si la primera condicion es falsa. Vamos a poder poner mas expresiones, basicamente si if es falsa, se ejecuta otra condicion
var numero1 = 5;
var numero2 = 50;
var numero3 = 30;

if ( numero1 < numero2 ){
    console.log( "Entraste al IF " );
}
else{
    console.log( "Entraste al ELSE" );
}

if ( numero1 < numero2 && (numero2 < numero3) ){
    console.log( "Entraste al IF " );
}
else{
    console.log( "Entraste al ELSE" );
}

if ( numero1 < numero2 && (numero2 < numero3) ){
    console.log( "Entraste al condicional " );
}

else if( numero1 < numero3 ){
    console.log( "Entraste al ELSE IF " );
}

else{
    console.log( "Entraste al ELSE" );
}
