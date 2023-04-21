//dom
/*
let container = document.querySelectorAll("a");
container.forEach(function(container){
    console.log(container);
});
*/
let links = document.querySelectorAll(".close");
links.forEach(function(links){
    links.addEventListener('click',function(ev){
        ev.preventDefault();
        
        let contenedor = document.querySelector(".content");
        //quitar clases de animacion que ya tiene
        contenedor.classList.remove("fadeInDown");
        contenedor.classList.remove("animated");
        //agregar nuevas clases
        contenedor.classList.add("fadeOutUp");
        contenedor.classList.add("animated");
        //retrasar el redireccionamiento con setTimeOut
        setTimeout(function(){  
            location.href = "../index.html";
        },600);
        
        return false;
    });
});

let icons = document.querySelectorAll("i");

icons.forEach(function(icono){
    
});