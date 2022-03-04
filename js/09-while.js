'strict'

var year=2021;

while(year <= 2050){
    console.log("Estamos en el año " + year);
    if(year == 2030){
        break;
    }
    year++;
}

// Do while
var edad = 20;
do{
    alert("Hasta llegar a 25, estamos en: " +edad);
    edad++;
}while(edad<=25);