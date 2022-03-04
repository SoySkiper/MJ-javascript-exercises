'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los números introducidos
hasta introducir un numero negativo y alli mostrar el resultado
*/

var numIntro;
var suma=0;
var media;
var i;


do{
    numIntro = parseInt(prompt('Introduce un número', 0));

    

    if(isNaN(numIntro)){

        var numIntro = 0;
        
    }else if (numIntro >= 0){

        suma = suma + numIntro;
        
        i++;
    }
}while(numIntro>=0);

        media = suma/i;
        console.log('La suma de los numeros introducidos es: '+suma);
        console.log('La media de los números introducidos es: '+ media);
        console.log('La suma total es: '+ suma);