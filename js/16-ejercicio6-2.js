'use strict'

/**
 * Que nos diga si un numero es par o impar
 * 1. Ventana promt
 * 2. Si no es válido que nos pida de nuevo el número
 **/

var numero = parseInt(prompt('Introduce un número, te diré si es par o impar', 0));

while(isNaN(numero)){
    numero = parseInt(prompt('Introduce un número, te diré si es par o impar', 0));
}

if((numero%2)==0){
    alert('El número '+numero+' es par');
}else{
    alert('El número '+numero+' es impar');
}