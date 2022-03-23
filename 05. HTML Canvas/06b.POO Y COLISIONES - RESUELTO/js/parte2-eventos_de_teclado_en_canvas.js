/*=============================================
ANIMACION REQUEST ANIMATION FRAME
=============================================*/

var frame = window.requestAnimationFrame || 
		    window.mozRequestAnimationFrame || 
			window.webkitRequestAnimationFrame || 
			window.msRequestAnimationFrame;

var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

/*=============================================
PROPIEDADES DEL OBJETO JUGADOR
=============================================*/

var jugador = {
	x: 280,
	y: 70,
	ancho: 10,
	alto: 10,
	color: "red",
	movimiento_x: 0,
	movimiento_y: 0,
	velocidad: 5
}

/*=============================================
PROPIEDADES DEL OBJETO BLOQUES
=============================================*/

var bloques = [{x:300, y:50, ancho: 400, alto: 10, color: "black"},
               {x:300, y:90, ancho: 10, alto: 360},
               {x:300, y:440, ancho: 400, alto: 10},
               {x:690, y:90, ancho: 10, alto: 360},
               {x:365, y:50, ancho:10, alto:350},
			   {x:430, y:100, ancho:10, alto:350},
			   {x:495, y:50, ancho:10, alto:350},
			   {x:560, y:100, ancho:10, alto:350},
			   {x:625, y:50, ancho:10, alto:350}];

/*=============================================
PROPIEDADES DEL OBJETO DATOS
=============================================*/	
var datos = {
	izquierda: false,
	derecha: false,
	arriba: false,
	abajo: false
}

/*=============================================
METODOS DEL OBJETO JUEGO
=============================================*/			   

var juego = {

	 teclado: function(){

	 	/*=============================================
		EVENTOS TECLADO
		=============================================*/

		document.addEventListener("keydown", juego.oprimir)
		document.addEventListener("keyup", juego.soltar)

	 },

	 oprimir: function(tecla){
	 	
	 	tecla.preventDefault();
	 	switch(tecla.keyCode){
	 		case 37: datos.izquierda = true; break;
	 		case 38: datos.arriba = true; break;
	 		case 39: datos.derecha = true; break;
	 		case 40: datos.abajo = true; break;
	 	}

	 },

	 soltar: function(tecla){

	 	tecla.preventDefault();
	 	switch(tecla.keyCode){
	 		case 37: datos.izquierda = false; break;
	 		case 38: datos.arriba = false; break;
	 		case 39: datos.derecha = false; break;
	 		case 40: datos.abajo = false; break;
	 	}

	 },

	 tiempo: function(){

	 	/*=============================================
		MOVIMIENTO HORIZONTAL JUGADOR
		=============================================*/

	 	jugador.x += jugador.movimiento_x;
	 	
	 	if(datos.izquierda){jugador.movimiento_x = -jugador.velocidad; jugador.movimiento_y = 0}
	 	if(datos.derecha){jugador.movimiento_x = jugador.velocidad; jugador.movimiento_y = 0}
	 	if(!datos.izquierda && !datos.derecha){jugador.movimiento_x = 0}

	 	/*=============================================
		MOVIMIENTO VERTICAL JUGADOR
		=============================================*/

	 	jugador.y += jugador.movimiento_y;
	 	
	 	if(datos.arriba){jugador.movimiento_y = -jugador.velocidad; jugador.movimiento_x = 0}
	 	if(datos.abajo){jugador.movimiento_y = jugador.velocidad; jugador.movimiento_x = 0}
	 	if(!datos.arriba && !datos.abajo){jugador.movimiento_y = 0}

	 	/*=============================================
		CANVAS
		=============================================*/

	 	juego.canvas();

		frame(juego.tiempo)
	},

	canvas: function(){

		/*=============================================
		CANVAS
		=============================================*/

		//BORRAMOS LIENZO

		ctx.clearRect(0,0,canvas.width,canvas.height);

		//DIBUJAR JUGADOR

		ctx.fillStyle=jugador.color;
		ctx.fillRect(jugador.x,jugador.y,jugador.ancho,jugador.alto);

		//DIBUJAR BLOQUES

		ctx.fillStyle=bloques[0].color;

		for(var i = 0; i < bloques.length; i ++){

			ctx.fillRect(bloques[i].x, bloques[i].y, bloques[i].ancho, bloques[i].alto);	
		}

	}

}
	
juego.teclado();
juego.tiempo();




