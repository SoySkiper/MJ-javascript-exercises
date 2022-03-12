'use strict'

//Toma el form de HTML por ID
var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener("submit", function(){
    //Toma el valor del input
    var titulo = document.querySelector("#addpelicula").value;
    if(titulo.length >= 1){
        //Añade el objeto en el local storage con parametros de "Clave" y "Valor"
        localStorage.setItem(titulo, titulo);
    }
});

//Selecciona el div por medio de el ID
var ul = document.querySelector('#peliculas-list');
//Bucle para mostrar los objetos de local storage
for(let i in localStorage){

    if(typeof localStorage[i] == "string"){
        //crea una lista 
        var li = document.createElement("li");
        li.append(localStorage[i]);
        
        ul.append(li);
    }
}

//Se selecciona segundo form por medio del ID 
var formulariob = document.querySelector("#formBorrarPeliculas");
formulariob.addEventListener("submit", function(){
    //Entrada de pelicula a borrar (Los valores tienen que ser exactos)
    var titulo = document.querySelector("#borrarPelicula").value;
    if(titulo.length >= 1){
        //Se remueve Item que coincida del local storage
        localStorage.removeItem(titulo);
    }
});