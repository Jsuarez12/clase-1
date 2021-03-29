//Ejemplo
//Ddao un numero, separarlo en centenas, decenas y unidades,
//Intercambiar la posición entre las centenas y las unidades
//e imprimir el numero final.

//para hacer el ejercico mas facil y no tan tecnicos lo haremos solo de 3 cifras
// operador "y" se representa con dos sinmbolos amperson (&&)



var numeroCompleto = 738;
if( numeroCompleto <= 999 && numeroCompleto > 99){
    var centenas = parseInt ( numeroCompleto / 100);
    //parseInt se usa para decir que lo que este entre esos parentesis se convertira en enteros sin tener en cuenta su parte decimal
    //console.log( centenas );
    var decenas = parseInt((numeroCompleto % 100) / 10);
    //%100 sirve para sacar el resto de una division, lo que sobra
    //console.log( decenas );
    var unidades = numeroCompleto % 10;
    //console.log( unidades );
    //console.log( "El valor final es:" + unidades + decenas + centenas );
}
else{
    //console.log( "Ingresa un número de tres cifras" );
}

//Condicional switch

var conSwitch = "Luis";
var edad = "18";
switch( conSwitch ){
    case 2:
        console.log( "El valor ingresado es: 2" );
        break;
    case 6:
        console.log( "El valor ingresado es: 6" );
        break;
    case "Luis":
        console.log( "Hola Luis" );
        if( edad == 18 ){
            console.log( "Felicidades eres mayor de edad" );
        }
        break;
    default: 
        console.log( "El valor ingresado es distinto" );
        break;
    }
// default es el caso por defecto