'use strict'
/*
Muestre todos los números divisores de un número introducido por el usuario 
*/

var num1 = parseInt(prompt("Ingresa un número: ", 0));

while(num1<=0 || isNaN(num1)){
    num1 = parseInt(prompt("Ingresa un número: ", 0));
}

for(var i=0; num1>=i; i++){
    if((num1%i) == 0){
        console.log('Tu número es divisible entre '+ i);
    }
}