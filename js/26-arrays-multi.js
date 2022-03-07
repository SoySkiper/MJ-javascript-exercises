'use strict'

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

//console.log(cine[0][1]); //En consola el resultado es "Terror"
//console.log(cine[1][2]); // En consola el resultado es "La vida es bella"

//Añadir elemento a un array 
peliculas.push("Batman");

var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula:");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

//Elimina el último elemento del array
//peliculas.pop();

//Deja en undefined el elemento 
//peliculas[0]= undefined;

// Se obtiene el indice del elemento a borrar
var indice = peliculas.indexOf('Gran torino');
if(indice >-1){
    //splice metodo que permite Eliminar elemento del array
    peliculas.splice(indice, 1)
}
//Para transformar un array a texto separado por comas
//Tenemos que declarar una nueva variable
var peliculas_string = peliculas.join();

var cadena = "Texto1, texto2, texto3, texto4";
var cadena_array= cadena.split(", ");

console.log(cadena_array);

//ORDENAR ARRAYS

//Por defecto en orden alfabético
/** Se usa función para mostrar de forma ascendente los número:
 * 
 *  .sort(function(a,b){return a-b});
 */ 
peliculas.sort();

//Ordena del último al primero
//peliculas.reverse();

console.log(peliculas);