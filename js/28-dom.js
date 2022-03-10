'use strict'

// DOM Document Objet Model
// getElementById  Busca los ID del HTML para modificarlos
// .innerHTML Muentra lo que hay en el HTML en consola
function CambiaColor (color){
    caja.style.background = color;
}

/*
    Conseguir elementos con un ID en concreto
*/

// caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
//Se usan # para llamar al ID
//. Para seleccionar una clase

caja.innerHTML = "Cambiando el texto desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "yellow";
caja.className="Hola hola2"

/*
    Conseguir elemento por su etiqueta
*/

var todoslosDivs = document.getElementsByTagName('div');
var contenidoEnTexto = todoslosDivs[2];
contenidoEnTexto.innerHTML= "Cambio de texto con la funcipon inner";
// .textContent;        Funciona igual que innerHTML. Toma texto de HTML para poder 
//                      poder mostrarlo en consola

//apend Agrega antes. Prepend Añade después
var todoslosDivs = document.getElementsByTagName('div');
var hr = document.createElement("hr");

//Tomamos section desde el ID #miseccion
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
    //Se raliza una conidición ya que como array suelta cantidad de elementos en consola
    if(divsRojo[div].className == "rojo"){
        divsRojo[div].style.background = "red";
    }
}

//Query Selector recomendable para solo un elemento
//# para las ID
var id = document.querySelector("#encabezado");
console.log(id);

//. para las clases
var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);


//  querySelectorAll
/*
Toma todos los elemntos del HTML segun la clase, id, o etiqueta.

https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
*/