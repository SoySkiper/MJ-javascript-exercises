'use strict'

//Arrays, arreglos, matrices
//Coleccion de tipos de datos que puede tener una variable

var nombre = "Victor Robles";
var nombres = ["Cristian Gonzalez", "José González", "Valentin Gonzalez", 54, false, 68];


//Otra manera de definir un array
var lenguajes = new Array("PHP", "JS", "GO", "Java", "C", "Swift");

/*Sacar indice de un array
console.log(nombres[3]);

//Propiedad length para ver la longitud del array
console.log(nombres.length);

var elemento = parseInt(prompt("¿Qué elemento del array quieres?", 0));
if(elemento >= nombres.length){
    alert("Introduce el número correcto igual o menor que "+nombres.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programación del 2021</h1>");
document.write("<ul>");

/*
for (var i = 0; i<= lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}

//Es un método para los arreglos de manera que pueda iterar sobre cada elemento dentro.
//Como parametros tiene: element (muestra elemento dentro del arreglo), index (posición), arreglo (muestra arreglo);

lenguajes.forEach((elemento)=>{
    document.write("<li>"+elemento+"</li>");
});

*/
//Los 3 funcionan de igual manera
//For in        //Accede a las propiedades del array.
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</lu>");

//Búsquedas

/* COMPROBAR QUE UN ELEMENTO EXISTE DENTRO DEL ARRAY

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});

OTRA MANERA DE HACERLO

var busqueda = lenguajes.find(lenguaje=>
    lenguaje == "PHP"
);
*/
// Busca el número del indice dentro del array
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "GO");

var precios = [10,20,30,50,80,12];

var busqueda = precios.some(precio => precio >= "900");

console.log(busqueda);