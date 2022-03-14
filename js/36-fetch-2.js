'use strict'

/*
var usuarios =[0];
var div_usuario = document.querySelector("#usuarios");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(users => {
        usuarios = users;
        console.log(usuarios);

        usuarios.map((user, i)=>{
            let nombre = document.createElement("h2");

            nombre.innerHTML = " " + i + user.name;
            div_usuario.appendChild(nombre);

            document.querySelector(".loading").style.display = "none";
        })
    });

    */
var div_usuario = document.querySelector("#usuarios");
var div_leanne = document.querySelector("#leanne");

    function getUsuarios(){
       return fetch('https://jsonplaceholder.typicode.com/users/'); 
    }
    function getLeanne(){
        return fetch('https://jsonplaceholder.typicode.com/users/1'); 
     }

    getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users);
        
        return getLeanne();
    })
    .then(data => data.json()
    .then(leanne =>{
        mostrarLeanne(leanne);
    }

    ));

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement("h2");
        nombre.innerHTML = " " + i + user.name;
        div_usuario.appendChild(nombre);
        document.querySelector(".loading").style.display = "none";
    })
}

function mostrarLeanne(usuario) {
        let nombre = document.createElement("h2");
        nombre.innerHTML = " " + usuario.name;
        div_leanne.appendChild(nombre);
        document.querySelector("#leanne .loading").style.display = "none";
}