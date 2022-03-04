"strict"
//Condicional
//Si A es igual a B entonces haz algo
var edad = 12;
var nombre ="David Suarez";

/*
Operadores relacionales 
    Mayor que: >
    Menor que: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
 */

if(edad>= 18){
    //Es mayo de edad
    console.log(nombre+" tiene "+edad+" años, es mayor de edad.");
    if (edad <= 33){
        console.log("Todavía eres millenial.");
    }else if (edad >=70){
        console.log("Eres anciano");
    }else{
        console.log("Ya no eres millenial");
    }
} else{
    //Es manor de edad
    console.log(nombre+" tiene "+edad+" años, es menor de edad.");
}

/*Operac¿dores lógicos
AND (Y): &&
OR (O): ||
Negación: !
*/
var year = 2021;

//Negación 
if (year!= 2016){
    console.log("El año no es 2016, realmente es: "+year);
}
//AND
if(year>=2000 && year <= 2030){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en una era desconocida");
}

//OR 
if (year == 2011 || year== 2021){
    console.log("El año acaba en 1.");
}else{
    console.log("El año no está registrado");
}
