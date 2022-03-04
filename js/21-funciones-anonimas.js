'use strict'

//Funciones anónimas
//Es una función que no tiene nombre

/*
var pelicula = function(nombre){
    return "La película es: "+nombre;
}
*/

function sumame (numero1, numero2, sumaYMuentra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYMuentra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

//Call back
sumame(5,7, function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por dos es: ", (dato*2));
});

/** Funciones de flecha
 * Se cambia la palabra function y se sustituye por flechas
 * sumame(5,7, dato -> {
    console.log("La suma es: ", dato);
},
dato -> {
    console.log("La suma por dos es: ", (dato*2));
});
 */