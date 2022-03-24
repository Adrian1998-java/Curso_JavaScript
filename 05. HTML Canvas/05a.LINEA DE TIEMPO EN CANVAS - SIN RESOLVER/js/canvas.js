var frame = window.requestAnimationFrame ||
 			window.mozRequestAnimationFrame || 
			window.webkitRequestAnimationFrame || 
			window.msRequestAnimationFrame;

var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

var numero = 0;
var ubicacionX = 0;
var animation;

//Dibujar SPRITE
var sprite = new Image();
sprite.src = "img/opcion1.png";

sprite.onload = function(){

    //ctx.drawImage(imagen, ubicacionX, ubicacionY, recorteX, recorteY, x1,y1, x2, y2);
    // ctx.drawImage(sprite, 500, 0, 100, 100, 0, 100, 100, 100);
}

function tiempo(){

    (numero >= 600)? numero = 0 : numero += 20 
    // console.log("numero", numero);

    for(var i = 0; i <= 600; i+=100)
    {
        if(numero >= i)
            ubicacionX = i;
    }
    ctx.clearRect(0,0,canvas.clientWidth, canvas.height);
    ctx.drawImage(sprite, ubicacionX, 0, 100, 100, 0, 100, 100, 100);
    // console.log("numero",numero);
    // console.log("Ubicacion",ubicacionX);
    
   animation = frame(tiempo);
}
tiempo();

setTimeout(function(){
    cancelAnimationFrame(animation);
}, 3000)


