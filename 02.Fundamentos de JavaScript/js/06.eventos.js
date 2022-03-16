var recuadro = document.querySelector("#recuadro");
/*
    EVENTOS DESDE EL DOM
*/

function cambiaColor(){
    recuadro.style.background = "red";
}

/*
    EVENTOS DESDE JAVASCRIPT
*/
var boton = document.querySelector("#boton");

boton.addEventListener("click",moverCaja);

function moverCaja(){

    recuadro.style.width = "500px";
    recuadro.style.transition = "1s width ease";
}
