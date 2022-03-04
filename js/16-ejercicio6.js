'use strict'

/**Hcer un programa que nos dioga si un número es par o impart
 * 1. Ventana prompt
 * 2. Compruebe si el número es válido
 */

var num= parseInt(prompt("Introduce un número: "),0);

while (num <=0 || isNaN(num)){
    var num =parseInt(prompt("Introduce un número válido: "), 0);
}
    
if(num%2 !=0){
        console.log("El "+num+" es impar");
}else{
    console.log("El "+num+" es par.")
}