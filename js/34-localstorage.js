'use strict'

// Local Storage

//  Comprobar disponibilidad del localstorage

if(typeof(Storage) !== undefined){
    console.log("Local storage disponible");
}else{
    console.log("Local storage no compatible");
}

//Guardar datos
localStorage.setItem("titulo", "Curso de Symfony desde el Local storage");

//Recuperar elemento

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//  Guardar objetos

var usuario = {
    nombre: "Cristian Primero",
    email: "cristiangprimero@gmail.com",
    web: "https://github.com/SoySkiper"
};

// Para guardar datos en un Json o para mandarlos a travéz de una API es necesario convertir esos
// datos a un Json String o a números enteros


localStorage.setItem("usuario", JSON.stringify(usuario));

//  Recuperar objeto
// Se convierte de un JSON string a un JSON usable en JS como objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(" " + userjs.web + " - " + userjs.email);

//Elimina el item con todos sus objetos
localStorage.removeItem("usuario");

//Vacía todo el local storage
localStorage.clear();