'use strict'

// Transformacion de textos de cadenas

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso";
var texto2 = " es muy buen curso";

/*

 * +IndexOf para encontra la posición en la que inicia el string
 *
 * +lastIndexOf para encontrar la última posición
 * 
 * +search es como IndexOf
 * Si no encuentra la palabrá va a arrojar -1
 * 
 * +match Devuelve un array, dentro de este método se le agrega (/curso/g) dentro del método
 * para encontrar todos las coincidencias
 * 
 * +substr Para sacar un trozo del string (Desde el caracter *, los siguientes * caracteres )
 * 
 * +charAt Encuentra un caracter especial en una cadena.
 * 
 * +startsWith Busca un texto al inicio de la cadena, como resultado da true o false 
 * (true si el la cadena empieza igual que la busqueda, false aunque la palabra se encuentre en la cadena)
 * 
 * +endsWith Busca al final de la cadena, como resultado da true o false.
 * (Igual de que anterior método, a la inversa)
 * 
 * +includes Busca dentro de la cadena (las mayusculas y minusculas si importan)s
 * 
 * */

var busqueda = texto1.includes("al aaaa");
console.log(busqueda);


/*
//Part 1 de código
//Metodo para convertirlo a string
var dato = numero.toString();
//A mayúsculas
    dato = texto1.toUpperCase();
//A minúsculas
    dato = texto2.toLowerCase(); 
//Calcular longitud 

var nombre = "Cristian Primero";
//Cuenta la cantidad de letras dentro de un string
//console.log(nombre.length);

//Concatenar - Unir textos

//var textoTotal = texto1+texto2;
var textoTotal = texto1.concat(" "+texto2);

console.log(textoTotal);
*/


/**
 * +replace Sutituye la palabra ("Parabra a sustituir", "Sutituto");
 * 
 * +slice corta el string apartir de (*), tambien se usa (Del * , Al *)
 * 
 * +split mete todo un string en un array. (" ") Separa toda las palabras y 
 * los mete como diferentes elementos dentro de un array al agregar un espacio entre 
 * comillas.
 * 
 * +trim Quita todos los espacios por delante y por detrás variable.trim();
 */
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = " es muy buen curso";

var busqueda = texto1.split(" ");
console.log(busqueda);