var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");
console.log(ctx);


// El método HTMLCanvasElement.getCOntext(): retorna un contexto de dibujo en el lienzo, o null si el identificador  

/**
 * CUADROS
 */

//Relleno
ctx.fillStyle = "cyan";
//RillRect(x1,y1,x2,y2)
ctx.fillRect(0,0,100,100);

//CONTORNO
ctx.lineWidth = 5;
ctx.strokeStyle = "rgba(255,0,255,1)";
ctx.rect(0,0,500,100);
ctx.stroke();

/**
 * CIRCULOS
 */

ctx.beginPath();
//arc(x1, y1, r, startAngle, endAngle)
ctx.arc(300,300,80,0,2*Math.PI);

//relleno circulo
ctx.fillStyle = "green";
ctx.fill();

//Contorno circulo
ctx.lineWidth = 5;
ctx.strokeStyle = "purple";
ctx.stroke();

/**
 * Lineas
 */
 ctx.beginPath();

 ctx.moveTo(0,0);
 ctx.lineTo(200,200);
 ctx.lineTo(400,200);
 ctx.lineTo(600,400);
 ctx.lineTo(500,500);
 ctx.lineTo(600,100);
 ctx.lineTo(0,0);

//contorno linea
ctx.lineWidth = 5;
ctx.strokeStyle = "blue";
ctx.stroke();
//relleno linea
ctx.fillStyle = "rgba(0,0,255,.5)";
ctx.fill();



/**
 * Curvas
 */

 ctx.beginPath();
 ctx.moveTo(0,500);

 //bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x2,y2)
 ctx.bezierCurveTo(200,300,400,400,500,500);
 ctx.lineWidth = 5;
 ctx.strokeStyle ='rgba(100,0,0,1)';
 ctx.stroke();
 
 //Relleno curva
 ctx.fillStyle ='rgba(255,0,0,1)';
 ctx.fill();

 /**
  * DEGRADADOS
  */
//createLinearGradient(x1,y1,x2,y2);

var grd = ctx.createLinearGradient(0,300,100,400);
grd.addColorStop(0,"red");
grd.addColorStop(1,"orange");

ctx.fillStyle=grd;
ctx.fillRect(0,300,100,100);

//createRadialGradient(x1,y1,r1,x2,y2,r2);
var grd2 = ctx.createRadialGradient(890,350,5,890,350,100);
grd2.addColorStop(0,"white");
grd2.addColorStop(1,"black");
ctx.beginPath();
ctx.arc(900,400,100,0,7);
ctx.fillStyle = grd2;
ctx.fill();

