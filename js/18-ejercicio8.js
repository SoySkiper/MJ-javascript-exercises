'use strict'
/**
 * Calculadora
 * Pida dos número por pantalla
 * Si metemos un string que nos lo vuelva a pedir el número
 * En el cuerpo de la página en una alerta y por consola el resultado de 
 * sumar, restar, multiplicar y dividir esas dos cifras
 */

var num1 = parseInt (prompt("Primer número: "),0);
var num2 = parseInt (prompt("Segundo número: "),0);

while(isNaN(num1) || isNaN(num2) || num1<0 || num2 < 0){
    num1 = parseInt (prompt("Repita primer número "),0);
    num2 = parseInt (prompt("Repita segundo número "),0); 
}

document.write("<h2>Suma</h2><br>" + (num1+num2)+"</br>");
document.write("<h2>Resta</h2><br>" + (num1-num2)+"</br>");
document.write("<h2>Multiplicación</h2><br>" + (num1*num2)+"</br>");
document.write("<h2>División</h2><br>" + (num1/num2)+"</br>");
console.log((num1+num2));
console.log((num1-num2));
console.log((num1*num2));
console.log((num1/num2));

//Profesor
/**
var resultado = "La suma es: "+(num1+num)+"<br>"+
                "La resta es: "+(num1+num2)+"<br>"+
                "La multiplicación es: "+(num1+num2)+"<br>"+
                "LA división es: "+(num1+num2)+"<br>";

var resultadoCMD =  "La suma es: "+(num1+num)+"\n"+
                    "La resta es: "+(num1+num2)+"\n"+
                    "La multiplicación es: "+(num1+num2)+"\n"+
                    "La división es: "+(num1+num2)+"\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);
*/