/**
 * OBJETO PARA PROPIEDADES
 */

var pb = {

    botonMovil: document.querySelector("#btnMovil span"),
    vistaBotones: false,
    botonera: document.querySelector("nav"),
    botones: document.querySelectorAll("nav ul li a")


}


/**
 * OBJETO PARA MÉTODOS
 */

var mb = {

    iniciarMovil: function(){
        pb.botonMovil.addEventListener("click", mb.mostrarBotonera);

        for(var i = 0; i < pb.botones.length; i++){
            pb.botones[i].addEventListener("click", mb.ocultarBotonera);
        }
    },

    mostrarBotonera: function(){
        if(!pb.vistaBotones){
            pb.vistaBotones = true;
            pb.botonera.className = "col-lg-0 col-md-0 col-sm-0 col-xs-12";
        }
        else{
            pb.vistaBotones = false;
            pb.botonera.className = "col-lg-0 col-md-0 col-sm-0 col-xs-0";
        }

        console.log(pb.vistaBotones);
    },

    ocultarBotonera: function(){

        if(window.matchMedia("(max-width:767px)").matches){

            pb.vistaBotones = false;
            pb.botonera.className = "col-lg-0 col-md-0 col-sm-0 col-xs-0";
        }

    }

}

mb.iniciarMovil();


