'use strict'

window.addEventListener('load', () => {

    // Timers
    // setInterval Se utiliza para bucles de tiempo
    // setTimeout Se usa solo una vez después del intervalo de tiempo

    function intervalo(){

        var tiempo = setInterval(function(){

            console.log("Esta es la función de setInterval");
            
            var encabezado = document.querySelector('h1');
            if (encabezado.style.fontSize == '40px'){
                encabezado.style.fontSize = '20px';
            }else{
                encabezado.style.fontSize= '40px'
            }
        }, 1000);

        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector('#stop');

    stop.addEventListener('click', function(){
        
        alert('Se ha detenido setInterval');
        clearInterval(tiempo);
    });

    var start = document.querySelector('#start');
    
    start.addEventListener('click', function(){
        alert('Se ha inciado setInterval');
        intervalo();
    });
});