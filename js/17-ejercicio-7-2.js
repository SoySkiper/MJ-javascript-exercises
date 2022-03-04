'use strict'

/**
 * Tabla de multiplicar de un número introducido por pantalla y mostrarlo en la web
 */

 var numero = parseInt(prompt('Introduce un número', 0));

 while(isNaN(numero)){
     numero = parseInt(prompt('Introduce un número', 0));
 }

document.write('Tabla de multiplicar del ' + numero +'<br>');
/*
for(var i=1; i<=10; i++){

    document.write(numero+' x '+i+' = '+(numero*i)+'<br>');
}
*/

//Todas las tablas

for(var o=1; o<=10; o++){

    document.write('<br><h3> Tabla del '+o+'</h3><br>');

    for(var i=1; i<=10; i++){

    document.write(o+' x '+i+' = '+(o*i)+'<br>');
}
    
}
