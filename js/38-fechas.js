'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();

var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El día es: ${dia}
`;
console.log(textoHora);

/**
 * Función Math
 */

console.log(Math.ceil(Math.random()*1000));
//Número random en Entero

