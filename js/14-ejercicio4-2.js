'use strict'

/*Mostrar todos los números impares que hay entre dos números introducidos por el usuario*/

var num1 = parseInt(prompt("Ingresa el primer número: ", 0));
var num2 = parseInt(prompt("Ingresa el segundo número: ", 0));

while(num1<=0 || num2<=0 || isNaN(num1) || isNaN(num2)){
   num1 = parseInt(prompt("Ingresa el primer número: ", 0));
   num2 = parseInt(prompt("Ingresa el segundo número: ", 0)); 
}

while(num1<num2){

    num1++;
    if(num1%2 != 0){
        console.log('Los números impares son: '+num1);
    }
}
while(num2<num1){

    num2++;
    if(num2%2 != 0){
        console.log('Los números impares son: '+num2);
    }
}