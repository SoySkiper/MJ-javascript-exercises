'use strict'
//pruebas con let y var
var numero= 40;

console.log(numero);//40

if (true){
    var numero = 50;
    console.log(numero);//50
}

console.log(numero);//50

//Prueba con let
var texto = "Curso JS";
console.log(texto);

if (true){
    let texto ="No sé qué escribir";
    console.log(texto);
}

console.log(texto);