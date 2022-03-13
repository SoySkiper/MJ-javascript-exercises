'use strict'


var div_usuarios = document.querySelector("#usuarios");

//Fetch (ajax) y peticiones a servicios /apis rest
var usuarios = [];

//Páginas de prueba para apis
//https://jsonplaceholder.typicode.com/users
fetch('https://reqres.in/api/users?page=1')
    //Tomamos los datos
    //Posteriormente lo transformamos a un objeto con el método .json para que pueda ser leído por javascript
    .then(data => data.json())
        /* Otra manera de hacer el call back
            .then(function(data){
                return data.json()
            })
        */
    .then(users => {
        //Dentro de usuario guardamos la data
        usuarios = users.data;
        console.log(usuarios);



        usuarios.map((user, i)=>{
            let nombre = document.createElement("h3");

            nombre.innerHTML = i + ".  "+user.first_name +" " + user.last_name;

            div_usuarios.appendChild(nombre);
            document.querySelector(".loading").style.display = 'none';
        });
    });