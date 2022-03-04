'use strict'

//Evento load para cargar el script una vez cargados los elementos del HTML

window.addEventListener('load', () => {

    //Eventos del ratón
    function cambiarColor(){
        var bg = boton.style.background;
        if(bg == "green"){
            boton.style.background = "red";
            boton.style.padding = "10px";
            boton.style.border = "1px solid #ccc"
        }else{
            boton.style.background = "green";
        }
        return true;
    }

    var boton = document.querySelector("#boton");

    //Click
    boton.addEventListener('click', function(){
        cambiarColor();
    });

    //Mouse over (Aplica el evento cuando pasa el mouse)
    boton.addEventListener('mouseover', function(){
        boton.style.background = '#ccc';
    });

    // Mouseout (Aplica el evento cuando deja de pasar el ratón por encima)
    boton.addEventListener('mouseout', function(){
        boton.style.background = 'black';
    });

    // Focus
    var input = document.querySelector('#campo_nombre');

    input.addEventListener('focus', function(){
        console.log("[Focus] Estas dentro del input");
    });

    // Blur (Produce el evento al salir, en este caso, del input)
    input.addEventListener('blur', function(){
        console.log("[Blur] Estas fuera del input");
    });

    /*
    // Keydown
    //Así viene explicado en el curso
    input.addEventListener('keydown', function(event){
        console.log("Estas pulsando esta tecla", String.fromCharCode(event.key));
    });
    */
    //No me funcionó, pero en su lugar se crea una variable para el evento "key" ya actualizado
    input.addEventListener('keydown', (event) => {
        let input = event.key;
        console.log("[Keydown] Presiono la tecla " + input);
    });

    // Keypress 
    input.addEventListener('keypress', function(event){
        let input =event.key;
        console.log("[Keypress] Estas pulsando esta tecla " + input);
    });

    // Keyup
    input.addEventListener('keyup', function(event){
        let input =event.key;
        console.log("[Keyup] Estas soltando esta tecla " + input);
    });

});
