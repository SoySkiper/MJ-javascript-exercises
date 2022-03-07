'use strict'

/**
 * Hacer un programa:
 * 1. Pida 6 números por pantalla y los meta en un array
 * 2. Tiene que mostrar el array entero (Todos sus elementos) en el cuerpo
 *    de la página y en la consola
 * 3.Ordenarlo y mostrarlo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuántos elementos tiene el array
 * 6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra
 *    y su indice (Se valolar'a el uso de funciones);
 */

var array_entero = [];
var entrada;
// 1. Pida 6 NÚMEROS por pantalla y los meta en un array

function Mostrar_numeros (array_entero, textoCustom){
    document.write('<h2>Tu array '+textoCustom+':</h2><lu>');
    console.log('Tu array '+textoCustom);
    for(let elemento in array_entero){
        console.log('* '+array_entero[elemento]);
        document.write('<li>'+array_entero[elemento]+'</li>');
    }
    document.write('</lu>');
}

do{
    entrada = parseInt(prompt("Introduce un número: ", 0));
    if ((typeof(entrada)) === "number"){
        array_entero.push(entrada);
    }
}while(isNaN(entrada) || array_entero.length <=5);

// 2. Tiene que mostrar el array entero (Todos sus elementos) en el cuerpo de la página y en la consola:
Mostrar_numeros(array_entero, 'completo');

// 3.Ordenarlo y mostrarlo
array_entero.sort(function(a,b){return a-b});
Mostrar_numeros(array_entero, 'ordenado');

// 4. Invertir su orden y mostrarlo
array_entero.reverse();
Mostrar_numeros(array_entero, 'inverso');

// 5. Mostrar cuántos elementos tiene el array
console.log('Número de elementos del arreglo: ' + array_entero.length);
document.write('<h3>Número de elementos del arreglo: ' + array_entero.length+'</h3>');

// 6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice (Se valolará el uso de funciones);
var entrada_busqueda = parseInt(prompt("Busca un número de tu array: ", "Buscar"));
var busqueda = array_entero.findIndex(arreglo => arreglo == entrada_busqueda);

//Cuando no se encuentra regresa -1
if(busqueda == -1){
    console.log('No se escontraron resultados');
    document.write('No se escontraron resultados');
}else{
    console.log('Se escontró el número '+entrada_busqueda+' en el índice '+busqueda);
    document.write('Se escontró el número '+entrada_busqueda+' en el índice '+busqueda);
}