/*=============================================
OBJETO CON PROPIEDADES
=============================================*/

var ps = {

    posicionScroll: 0, 
    articulos: document.querySelectorAll("#scroll article"),
    cajaScroll: document.querySelector("#scroll"),
    cabezote: document.querySelector("header"),
    botonera: document.querySelectorAll("nav ul li a"),
    ruta: null,
    intervalo: null,
    destionScroll: 0,
    padding: 0
}

/*=============================================
EL OBJETO CON LOS METODOS DEL MOUSE
=============================================*/

var ms = {

    inicioScroll: function(){

        document.addEventListener("scroll", ms.efectoParallax);

        for(var i = 0; i < ps.botonera.length; i++)
        {
            ps.botonera[i].addEventListener("click", ms.desplazamiento);
        }
        
    },

    efectoParallax: function(){

        ps.posicionScroll = window.pageYOffset;

        if(ps.posicionScroll > 100){

            ps.cabezote.style.position = "fixed";
            ps.cabezote.style.zIndex = 10;
            ps.padding = 80;

        }else{

            ps.cabezote.style.position = "relative";
            ps.cabezote.style.zIndex = 0;
            ps.padding = 160;
        }

        if(ps.posicionScroll > ps.cajaScroll.offsetTop-200){

            for(var i = 0; i < ps.articulos.length; i++){

                ps.articulos[i].style.marginLeft = "0%";
            }
            
        }
        else
        {
            for(var i = 0; i < ps.articulos.length; i++){

                ps.articulos[i].style.marginLeft = ps.posicionScroll/21.1-100+"%";
            }
        }
    },

    desplazamiento: function(ruta){
        ruta.preventDefault();

        ps.ruta = ruta.target.getAttribute("href");

        ps.destionScroll = document.querySelector(ps.ruta).offsetTop-ps.padding;
        console.log(ps.destionScroll);

        ps.intervalo = setInterval(function(){
            
            if(ps.posicionScroll < ps.destionScroll)
            {
                ps.posicionScroll += 100;

                if(ps.posicionScroll >= ps.destionScroll)
                {
                    ps.posicionScroll = ps.destionScroll;

                    clearInterval(ps.intervalo);
                }
            }
            else{
                ps.posicionScroll -= 100;

                if(ps.posicionScroll <= ps.destionScroll)
                {
                    ps.posicionScroll = ps.destionScroll;

                    clearInterval(ps.intervalo);
                }
            }
            window.scrollTo(0, ps.posicionScroll);
            
        },50)

        
    }

}

ms.inicioScroll();








