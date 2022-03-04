'use strict'

// DOM Document Objet Model
// getElementById  Busca identificardor del HTML
// .innerHTML Muentra lo que hay en el HTML en consola
function CambiaColor (color){
    caja.style.background = color;
}

//Conseguir elementos con un ID en concreto

// caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "Cambiando el texto desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "yellow";
caja.className="Hola hola2"

//Conseguir elemento por su etiqueta
/*
var todoslosDivs = document.getElementsByTagName('div');
var contenidoEnTexto = todoslosDivs[2];
contenidoEnTexto.innerHTML= "Cambio de texto con la funcipon inner";
*/
//apend Agrega antes. Prepend Añade después
var todoslosDivs = document.getElementsByTagName('div');
var hr = document.createElement("hr");

var seccion = document.querySelector("#miseccion");
var valor;
for (valor in todoslosDivs){
    if(typeof todoslosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todoslosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(hr);

//Conseguir elementos por su clase.
//getElementary recomendado para más de un elemento

var divsRojo = document.getElementsByClassName('rojo');
var divsAmarillo = document.getElementsByClassName('amarillo');

divsAmarillo[0].style.backgroundColor = "yellow";

for (var div in divsRojo){
    if(divsRojo[div].className == "rojo"){
        divsRojo[div].style.background = "red";
    }
}

//Query Selector recomendable para solo un elemento

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);