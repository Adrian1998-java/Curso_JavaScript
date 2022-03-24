/**
 * JS NATIVO
 */

// var caja = document.querySelector("#caja");

// caja.addEventListener("click", cambiarColor);

// function cambiarColor(){

//     caja.style.background = "cyan";
//     caja.style.width = "400px";
//     caja.style.height = "100px";
// }

/**
 * JQUERY
 */

$("#caja").click(function(){

    $("#caja").css({
        "background": "cyan",
        "width": "400px",
        "height": "100px"
    })
})



