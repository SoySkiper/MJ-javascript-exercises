'use strict'

//Funciones
//Una función es un agrupación reutilizable de un conjunto de instrucciones
/*
function calculadora(){
    return "¡Hola soy la calculadora!";
}

console.log(calculadora(), calculadora(), calculadora());

function calculadora2(){
    console.log("Hola, soy la calculadora");
    console.log("Si soy yo");

    return "Hola soy la calculadora otra vez xD Y este es el return."
}

var resultado = calculadora2();

console.log(resultado);
*/
function porConsola (numero1, numero2){
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("Multiplicación: " + (numero1*numero2));
        console.log("División: " + (numero1/numero2));
        console.log("***********************************");
}

function porPantalla (numero1, numero2){
        document.write("Suma: " + (numero1+numero2)+"<br>");
        document.write("Resta: " + (numero1-numero2)+"<br>");
        document.write("Multiplicación: " + (numero1*numero2)+"<br>");
        document.write("División: " + (numero1/numero2)+"<br>");
        document.write("***********************************<br>");
}
function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
    return true;
}

calculadora(1, 4);
calculadora(2, 5, true);
calculadora(151, 48, true);