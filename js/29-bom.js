'use strict'

// BOM - Browser Object Model
function getBom(){
    //Toma los valores del dispositivo a mostrar, pero sin redimenciones al manipularse el navegador
    console.log(screen.height);
    console.log(screen.width);
    //Location te da varias propiedades, se puede saca cada una de ellas
    console.log(window.location.href);
}
/** Toma la resolución actual incluso cuando se redimenciona
 * console.log(window.innerHeight);
 * console.log(window.innerWidth);
 */

//Podemos redirigir a otra web
function redirect(url){
    window.location.href = url;
}

function abrirventana(url){
    window.open(url, "", "width=400,height=300");
}
getBom();