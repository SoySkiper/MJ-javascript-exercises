'use strict'
/*
Programa que pida dos  numeros y que nos diga cual es el mayor, el menor y si son iguales.
**/

var num1 = parseInt(prompt("Ingresa el primer número: ", 0));
var num2 = parseInt(prompt("Ingresa el segundo número: ", 0));

while(num1<=0 || num2<=0 || isNaN(num1) || isNaN(num2)){
    var num1 = parseInt(prompt("Ingresa el primer número: ", 0));
    var num2 = parseInt(prompt("Ingresa el segundo número: ", 0)); 
}
    
    console.log("El primer número es: " + num1);
    console.log('El segundo número es: ' + num2);

    if(num1==num2){
        console.log('Los números son iguales');
    }else if(num1 > num2){
        console.log('El número mayor es '+num1+' y el menor '+num2+', no son iguales');
    }else if(num1 < num2){
        console.log('El número mayor es '+num2+' y el menor '+num1+', no son iguales');
    }else{
        console.log("Ingresa solo números");
    };




