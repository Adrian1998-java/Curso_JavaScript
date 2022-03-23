var frame = window.requestAnimationFrame ||
 			window.mozRequestAnimationFrame || 
			window.webkitRequestAnimationFrame || 
			window.msRequestAnimationFrame;

var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

var numero = 0;
var ubicacionX = 0;
var animacion;

//Dibujar SPRITE
var sprite = new Image();
sprite.src = "img/opcion1.png";

// sprite.onload = function(){

// 	//ctx.drawImage(imagen, ubicacionX, ubicacionY, recorteX, recorteY, x1,y1, x2, y2);
// 	ctx.drawImage(sprite, 0, 0, 100, 100, 0, 100, 100, 100);

// }

function tiempo(){

	if(numero >= 600){numero = 0}else{numero+=20}

	for(var i = 0; i <= numero; i+=100){

		ubicacionX = i;
	}
	
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(sprite, ubicacionX, 0, 100, 100, 0, 100, 100, 100);

	animacion = frame(tiempo);
}

tiempo();

//cancelAnimationFrame()

setTimeout(function(){

cancelAnimationFrame(animacion)

},3000)
