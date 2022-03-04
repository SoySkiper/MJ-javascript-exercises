'use strict'

//Muestre todos los números divisores de un número introducido en prompt

//var numero=parseInt(prompt("Introduce un número: "),0);

var num= parseInt(prompt("Introduce un número: "), 0);

while(num <= 0 || num <= 0 || isNaN(num) || isNaN (num)){
    var num = parseInt(prompt("Ingresa un número correcto: ", 0));
 }

for(var i=0; i<=num; i++){
    if((num%i)==0){
        console.log(i);
    }
}