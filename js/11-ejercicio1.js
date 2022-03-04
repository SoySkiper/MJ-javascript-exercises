'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales.
PLUS: Si los números no son un número o sin menores o iguales a cero, nos los vuelve a pedir.
*/
 var numero1 = parseInt(prompt("Ingresa el primer número: ", 0));
 var numero2 = parseInt(prompt("Ingresa tu segundo número: ", 0));

 while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN (numero2)){
    var numero1 = parseInt(prompt("Ingresa el primer número: ", 0));
    var numero2 = parseInt(prompt("Ingresa tu segundo número: ", 0));
 }

 if (numero1 > numero2){
     alert(numero1 + " es mayor. " + numero2 + " es el menor");
 }else if(numero1 < numero2){
     alert(numero2 + " es mayor. " + numero1 + " es el menor");
 }else if (numero1== numero2){
     alert("Los números son iguales");
 }else{
     alert("Introduce solo numeros");
 }
 