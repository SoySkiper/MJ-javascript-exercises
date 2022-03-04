'use strict'

/***
 * Hacer un programa que muestre todos los números que hay entre dos 
 * números introducidos por el usuario.
 */

 var num1 = parseInt(prompt("Ingresa el primer número: ", 0));
 var num2 = parseInt(prompt("Ingresa el segundo número: ", 0));
 
 while(num1<=0 || num2<=0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Ingresa el primer número: ", 0));
    num2 = parseInt(prompt("Ingresa el segundo número: ", 0)); 
 }



 if(num1<num2){
    var diferencia = num2-num1;
    var contador=1;

      do{
     console.log('Entre el número ' + num1 + ' y el número ' + num2 + ' se escuentra el ' + (num1+contador));
     contador++;
 }while(diferencia>contador);

} else if(num1>num2){
    var diferencia = num1-num2;
    var contador=1;

      do{
     console.log('Entre el número ' + num2 + ' y el número ' + num1 + ' se escuentra el ' + (num2+contador));
     contador++;
 }while(diferencia>contador);
} else{
    console.log('Tus números son iguales')
}