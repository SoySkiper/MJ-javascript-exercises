'use strict'

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];
//Por defecto en orden alfabético
peliculas.sort();
//.reverse  Ordena del último al primero
console.log(peliculas);
var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

var elemento = "";

/*
while(elemento != "ACABAR"){
    elemento = prompt("Introduce tu pelicula:");
    peliculas.push(elemento);
}
*/
//Elimina el último elemento del array
//peliculas.pop();

//Deja en undefined el elemnto seleccionado
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
