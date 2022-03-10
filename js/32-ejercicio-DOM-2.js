'use strict'

window.addEventListener('load', function(){

    function TomarDatos(){

    }

    function MostrarDatos(){
       var clases = document.querySelector(".nombre");
       console.log(clases);
    }
    
    var evento = this.document.addEventListener('submit', ()=>{
        MostrarDatos();
    })
});