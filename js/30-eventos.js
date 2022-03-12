'use strict'

//Evento load para cargar el script una vez cargados los elementos del HTML

window.addEventListener('load', () => {

    //Eventos del ratón
    function cambiarColor(){
        //Si lo uso varias veces es recomendable igualarlo en una variable
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
    //Captura evento con addEventListener. Se quita el evento de la etiqueta de HTML <onclick>
    boton.addEventListener('click', function(){
        cambiarColor();
        this.style.border = "10px solid black";
    });
    
    //mouseover (Aplica el evento cuando pasa el mouse)
    boton.addEventListener('mouseover', function(){
        boton.style.background = '#ccc';
    });

    // Mouseout (Aplica el evento cuando deja de pasar el ratón por encima)
    boton.addEventListener('mouseout', function(){
        boton.style.background = 'blue';
    });

    // Focus
    //Cada que estoy dentro del imput da salida se realciza lo que hay dentro de la función
    var input = document.querySelector('#campo_nombre');

    input.addEventListener('focus', function(){
        console.log("[Focus] Estas dentro del input");
    });

    // Blur (Produce el evento al salir del input)
    input.addEventListener('blur', function(){
        console.log("[Blur] Estas fuera del input");
    });

    
    // Keydown
    // Solo sucede cuando se pulsa una tecla dentro del input.
    // Se puede capturar las letras pulsadas
    input.addEventListener('keydown', function(event){
        console.log("Estas pulsando esta tecla", String.fromCharCode(event.keyCode));
    });
    
   /*
    //No me funcionó en windows, pero en su lugar se crea una variable para el evento "key" ya actualizado
    input.addEventListener('keydown', (event) => {
        let input = event.key;
        console.log("[Keydown] Presiono la tecla " + input);
    });
*/
    // Keypress
    // Cuando ya se ha presionado, es similar al evento pasado
    input.addEventListener('keypress', function(event){
        let input =event.key;
        console.log("[Keypress] Estas pulsando esta tecla " + input);
    });

    // Keyup
    //Suelta el evento hasta que la tecla es soltada.
    input.addEventListener('keyup', function(event){
        let input =event.key;
        console.log("[Keyup] Estas soltando esta tecla " + input);
    });
});