'strict'

//TAbla de multiplicar de un número introcido por pantalla

var num=parseInt(prompt("Introduce un número"), 0);

while (isNaN(num)){
    var num=parseInt(prompt("Introduce un número"), 0);
}

for(var i=1; i<=10;i++){
    var resultado = i*num;
    document.write(i+" x "+num+" = "+ resultado+"<br>");
}

//Todas las tablas

for(var c=1; c<=10;c++){
    document.write("<h1>Tabla del "+c+"</h1>");
    for(var i=1; i<=10;i++){
        document.write(i+" x "+c+" = "+ (c*i)+"<br>");
    }
}