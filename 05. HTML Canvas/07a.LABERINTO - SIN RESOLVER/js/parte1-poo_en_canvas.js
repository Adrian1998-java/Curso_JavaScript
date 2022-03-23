var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

/*=============================================
POO
=============================================*/

var jugador = {
	x: 280,
	y: 70,
	ancho: 10,
	alto: 10,
	color: "red"
}

var bloques = [{x:300, y:50, ancho: 400, alto: 10, color: "black"},
               {x:300, y:90, ancho: 10, alto: 360},
               {x:300, y:440, ancho: 400, alto: 10},
               {x:690, y:90, ancho: 10, alto: 360},
               {x:365, y:50, ancho:10, alto:350},
			   {x:430, y:100, ancho:10, alto:350},
			   {x:495, y:50, ancho:10, alto:350},
			   {x:560, y:100, ancho:10, alto:350},
			   {x:625, y:50, ancho:10, alto:350}] 

/*=============================================
CANVAS
=============================================*/

ctx.fillStyle=jugador.color;
ctx.fillRect(jugador.x,jugador.y,jugador.ancho,jugador.alto);

ctx.fillStyle=bloques[0].color;

for(var i = 0; i < bloques.length; i ++){

	ctx.fillRect(bloques[i].x, bloques[i].y, bloques[i].ancho, bloques[i].alto);	
}

