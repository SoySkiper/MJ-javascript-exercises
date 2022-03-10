'use strict'

/*
1. Pida 6 números por pantalla y los meta en un array
2. Mostrar el array entero (Todos sus elementos) en el cuerpo dels página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice
(Se valora el uso de funciones)
*/




var numeros = [];
var nuevo = "";

for(var i=0; i<6;i++){
    nuevo = parseInt(prompt("Ingresa el primer número: ", 0));
    
    while(isNaN (nuevo)){
        nuevo = parseInt(prompt("Ingresa el primer número: ", 0));
    }

    numeros.push(nuevo);
}

document.write("<h1>Array</h1><br>"+ numeros);
console.log("Array");
console.log(numeros);

document.write("<h1>Números ingresados</h1>");
document.write("<ul>");
console.log("Números ingresados")
for(let numero in numeros){
    document.write("<li>"+numeros[numero]+"</li>");
    console.log(numeros[numero]);
}
document.write("</ul></br>");

//Ordenar números de forma desendente
numeros.sort(function(a,b) {return a-b});

document.write("<h1>Números ordenados</h1>");
document.write("<ul>");
console.log("Números ordenados")
for(let numero in numeros){
    document.write("<li>"+numeros[numero]+"</li>");
    console.log(numeros[numero]);
}
document.write("</ul>");

numeros.reverse();
    
document.write("<h1>Números invertidos</h1>");
document.write("<ul>");
console.log("Números invertidos")
for(let numero in numeros){
    document.write("<li>"+numeros[numero]+"</li>");
    console.log(numeros[numero]);
}
document.write("</ul>");

document.write("Elementos en el array: "+numeros.length);
console.log("Elementos en el array: "+numeros.length);

numeros.reverse();

//Búsqueda

var A_bus = parseInt(prompt("Busca un número: ", 0));
    
    while(isNaN (A_bus)){
        A_bus = parseInt(prompt("Busca de nuevo un número: ", 0));
    }

var busqueda = numeros.find(numero=>
    numero == A_bus
);

var indice = numeros.findIndex(numero => numero == A_bus);

if (busqueda == A_bus){
    console.log("Resultado encontrado en el índice: "+indice);
}else{
    console.log("No se encontraron resultados");
}
var busqueda = array_entero.findIndex(arreglo => arreglo == entrada_busqueda);





/*
function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index)=>{
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");

}

var numeros = [];
//var numeros = new Array(0);

for (var i = 0; i<=5; i++){
    //numeros[i] = parseInt(prompt("Introduce un número", 0));
    numeros.push(parseInt(prompt("Introduce un número", 0)));
}
/*Mostrar en el cuerpo de la página
document.write("<h1>Contenido del array</h1>");
numeros.forEach((numero, index) => {
    document.write("<strong>"+numero+"</strong></br>")
}); 
Opción 2 usando una funtion
mostrarArray(numeros);

//Mostrar array en la consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort(function(a,b) {return a-b});
mostrarArray(numeros, "Ordendado");

// Invertir y mostrar
numeros.reverse();
mostrarArray(numeros,"Invertido")

//Cuantos elementos tiene un array
document.write("<h1>El array tiene "+numeros.length+" elementos</h1>");

//Busqueda
var busqueda = parseInt(prompt("Busca un número", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1){
    document.write("<h1>ENCONTRADO</h1>");
    document.write("<h1>Posición de la búsqueda: "+posicion+"</h1>");
}else{
    document.write("<h1>NO ENCONTRADO</h1>");
}

*/