'use strict'

window.addEventListener('load', function(){

console.log("Se cargo el script en el HTML");

var formulario = this.document.querySelector('#formulario');
var box_dashed = this.document.querySelector('.dashed');
box_dashed.style.display = 'none';

formulario.addEventListener('submit', function(){
    console.log('Formulario cargado');
    var nombre = document.querySelector('#campo_nombre').value;
    var apellidos = document.querySelector('#campo_apellidos').value;
    var edad = document.querySelector('#campo_edad').value;

    box_dashed.style.display = 'block';

    var p_nombre =document.querySelector('#p_nombre span');
    var p_apellidos = document.querySelector('#p_apellidos span');
    var p_edad = document.querySelector('#p_edad span');

    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML= edad;

    /*
    var datos_Usuario = [nombre, apellidos, edad];
    var indice;
    for (indice in datos_Usuario){
        var parrafo = document.createElement('p');
        parrafo.append(datos_Usuario[indice]);
        box_dashed.append(parrafo);
    }
    */
});


});