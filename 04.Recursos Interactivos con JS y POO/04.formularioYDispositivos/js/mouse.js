/*=============================================
OBJETO CON PROPIEDADES
=============================================*/

var pm = {

    zona: document.querySelector("#efectoMouse"),
    figuras: document.querySelectorAll("#efectoMouse figure"),
    mouseX: 0,
    mouseY: 0, 
    horizontal: true,
    vertical: false,
}

/*=============================================
EL OBJETO CON LOS METODOS DEL MOUSE
=============================================*/

var mm = {
    inicioMouse: function(){

        pm.zona.addEventListener("mousemove", mm.movimientoMouse);

        for(var i = 0; i < pm.figuras.length; i++){
            pm.figuras[i].innerHTML = '<img src="img/mouse/plano0'+i+'.png">';
            pm.figuras[i].style.zIndex = -i;
        }
        
        setTimeout(function(){
            pm.zona.style.height = pm.figuras[0].childNodes[0].height+"px";
            pm.zona.style.width = pm.figuras[0].childNodes[0].width+"px";
        },100)
        
    },

    movimientoMouse: function(mouse){

        pm.mouseX = mouse.offsetX;
        pm.mouseY = mouse.offsetY;
        
        for(var i = 0; i < pm.figuras.length; i++){
            if(pm.horizontal){
                pm.figuras[i].style.left = pm.mouseX/(i*100+50)+"%";
            }
            if(pm.vertical){
                pm.figuras[i].style.top = -pm.mouseY/(i*100+50)+"%";
            }
           
        }
    }
}

mm.inicioMouse();





