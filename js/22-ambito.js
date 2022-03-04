'use strict'

var texto = "Hola mundo, soy una variables global";
var numero = 12;

function holaMundo (texto){
    var hola_Mundo="texto dentro de la funcion";

    console.log(texto);
    console.log(numero.toString());
    console.log(hola_Mundo);
}

holaMundo(texto);