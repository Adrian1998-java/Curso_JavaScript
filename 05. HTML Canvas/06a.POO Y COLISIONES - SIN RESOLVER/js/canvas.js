/**
 * ANIMACION REQUEST ANIMATION FRAME
 */
 var frame = window.requestAnimationFrame || 
 window.mozRequestAnimationFrame || 
 window.webkitRequestAnimationFrame || 
 window.msRequestAnimationFrame;

var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext('2d');

var x = 280;

/**
 * POO
 */

var jugador = {
    x: 280,
    y: 70,
    ancho:10,
    alto:10,
    color: "red",
    movimientoX: 0,
    movimientoY: 0,
    velocidadJugador: 5,
    X1: null,
    X2: null,
    Y1: null,
    Y2: null,
}

/**
 * PROPIEDADES DE BLOQUE
 */
var bloques = [{x:300, y:50, ancho:400, alto:10,X1: null, X2: null,Y1: null, Y2: null, color: "black"},
                {x:300, y:90, ancho:10, alto:360, X1: null, X2: null,Y1: null, Y2: null},
                {x:300, y:440, ancho:400, alto:10, X1: null, X2: null,Y1: null, Y2: null},
                {x:690, y:90, ancho:10, alto:360, X1: null, X2: null,Y1: null, Y2: null},
                {x:365, y:50, ancho:10, alto:350,X1: null, X2: null,Y1: null, Y2: null},
			    {x:430, y:100, ancho:10, alto:350,X1: null, X2: null,Y1: null, Y2: null},
			    {x:495, y:50, ancho:10, alto:350,X1: null, X2: null,Y1: null, Y2: null},
			    {x:560, y:100, ancho:10, alto:350,X1: null, X2: null,Y1: null, Y2: null},
			    {x:625, y:50, ancho:10, alto:350,X1: null, X2: null,Y1: null, Y2: null}];

/**
 * PROPIEDADES DEL OBJETO DATOS
 */

    var datos = { 
        izquierda: false,
        arriba: false,
        derecha: false,
        abajo: false,
    }
/**
 * METODOS DEL OBJETO JUEGO
 */
var juego = {

    teclado: function(){

        /**
         * EVENTOS TECLADO
         */

        document.addEventListener("keydown", juego.oprimir);
        document.addEventListener("keyup", juego.soltar);
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
        
        /**
         * MOVIMIENTO HORIZONTAL
         */
        jugador.x += jugador.movimientoX;

        if(datos.izquierda){jugador.movimientoX = -jugador.velocidadJugador; jugador.movimientoY = 0}
        if(datos.derecha){jugador.movimientoX = jugador.velocidadJugador; jugador.movimientoY = 0}
        if(!datos.izquierda && !datos.derecha){jugador.movimientoX = 0;}


        /**
         * MOVIMIENTO VERTICAL
         */
         jugador.y += jugador.movimientoY;

         if(datos.arriba){jugador.movimientoY = -jugador.velocidadJugador; jugador.movimientoX = 0}
         if(datos.abajo){jugador.movimientoY = jugador.velocidadJugador; jugador.movimientoX = 0}
         if(!datos.arriba && !datos.abajo){jugador.movimientoY = 0;}

        /**
         * CANVAS
         */

        juego.canvas();

        frame(juego.tiempo);

        /**
         * COLICIONES
         */
        for(var i = 0; i < bloques.length; i++)
        {
            jugador.X1 = jugador.x;
            jugador.X2 = jugador.x + jugador.ancho;
            jugador.Y1 = jugador.y;
            jugador.Y2 = jugador.y + jugador.alto;

            bloques[i].X1 = bloques[i].x;
            bloques[i].X2 = bloques[i].x + bloques[i].ancho;
            bloques[i].Y1 = bloques[i].y;
            bloques[i].Y2 = bloques[i].y + bloques[i].alto;

            function colisiones(){
                
                //NO COLISION DE IZQUIERDA A DERECHA
                if(jugador.X2 < bloques[i].X1){return false}
                //NO COLISION DE DERECHA A IZQUIERDA
                if(jugador.X1 > bloques[i].X2){return false}
                //NO COLISION DE aRRIBA A ABAJO
                if(jugador.Y2 < bloques[i].Y1){return false}
                //NO COLISION DE ABAJO A ARRIBA
                if(jugador.Y1 > bloques[i].Y2){return false}
                return true;
            }

            colisiones();

            //COLISIONES HORIZONTALES
            if(colisiones() && jugador.X2 < bloques[i].X1 + jugador.movimientoX){
                jugador.movimientoX = 0;
            }
            if(colisiones() && jugador.X1 - jugador.movimientoX> bloques[i].X2 ){
                jugador.movimientoX = 0;
            }
            //COLISIONES VERTICALES
            if(colisiones() && jugador.Y2 < bloques[i].Y1 + jugador.movimientoY){
                jugador.movimientoY = 0;
            }
            if(colisiones() && jugador.Y1 - jugador.movimientoY> bloques[i].Y2 ){
                jugador.movimientoY = 0;
            }
        }
        
        // console.log(colisiones());

    },
    canvas: function(){
        /**
         * CANVAS
         */
        
        //BORRAMOS LIENZO
        ctx.clearRect(0,0, canvas.width, canvas.height);

        //DIBUJAMOS JUGADOR
        ctx.fillStyle=jugador.color;
        ctx.fillRect(jugador.x, jugador.y, jugador.ancho, jugador.alto);

        ctx.fillStyle=bloques[0].color;

        for(var i = 0; i < bloques.length; i++){
            ctx.fillRect(bloques[i].x,bloques[i].y,bloques[i].ancho,bloques[i].alto)
        }
    }
}
juego.tiempo();
juego.teclado();





