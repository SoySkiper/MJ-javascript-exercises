'use strict'

//Hacer un programa que muestre todos los números entre dos número introducidos por el usuario

var numero1 = parseInt(prompt("Introduce un número: ", 0));
var numero2 = parseInt(prompt("Introduce un número: ", 0));

while(isNaN(numero1) || isNaN (numero2)){
    var numero1 = parseInt(prompt("Ingresa un número: ", 0));
    var numero2 = parseInt(prompt("Ingresa un número: ", 0));
 }

if (numero1>numero2){
    var diferencia= numero1-numero2;
    var contador = 1
    do{
        console.log("Entre " + numero1+" y " +numero2+" estan los números: "+(numero2+contador));
        contador++
    }while(contador<diferencia)
}
else if(numero2>numero1){ 
        var diferencia= numero2-numero1;
        var contador = 1;
    do{
        console.log("Entre " + numero2+" y " +numero1+" estan los números: "+(numero1+contador));
        contador++
    }while(contador<diferencia)
}
else {
    console.log("Introduce dos números distintos.");
}

//Respuesta del profesor
/*
document.write("<h1>De "+numero1+" a "+numero2+" están los números: </h1>");
for(var i=numero1; i <= numero2; i++){
    document.write(i+"</br>");
}
*/