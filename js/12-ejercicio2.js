'use strict'

//Utilizando un bucle, mostrar la media y la suma de los numeros introducidos por el usuario
//hasta que metamos un número negativo y en ese caso se mostraría el resultado

var suma = 0;
var contador = 0;

do {
    var numero=parseInt(prompt("Introduce un número hasta introducir uno negativo", 0));

    if (isNaN(numero)){
        numero= 0;

    }else if(numero >=0){
        suma=suma + numero;
        //suma+=numero;
        contador++;
    }
    console.log(suma);
    console.log(contador);
    
}while(numero>=0)

alert("La suma de todos los números es: " + suma);
var media = suma/contador;
alert("La media de todos los números es: " + media);
//(suma/contador)