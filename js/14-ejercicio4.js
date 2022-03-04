'use strict'

/**
 * Mostrar todos los números impares que hay entre dos números introducidos por el usuario
 */

var numero1 = parseInt(prompt("Ingrese primer número: "),0);
var numero2 = parseInt(prompt("Ingrese el segundo número: "),0);

while(numero1<numero2){
    numero1++;
    if(numero1%2 !=0){
        console.log("El "+numero1+" es impar");
    }
}
while(numero2<numero1){
    numero2++;
    if(numero1%2 !=0){
        console.log("El "+numero2+" es impar");
    }
}