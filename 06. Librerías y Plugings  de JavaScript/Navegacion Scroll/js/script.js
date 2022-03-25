/*=============================================
JD SLIDER
=============================================*/

$('.slideshow').jdSlider({

	wrap:'.slide-inner', //Especificar el slide que vamos a usar
	isAuto: true, //Inicia la animación automáticamente
	isLoop: true, //Al finalizar vuelve a comenzar
	interval: 7000, //Tiempo por cada slide
	isCursor:true //Pausar animación con el mouse

});

/*=============================================
PINTEREST GRID
=============================================*/

$('.pinterest_grid').pinterest_grid({
	no_columns: 4, //Número de columnas
	padding_x: 10, //Márgenes internas horizontal
	padding_y: 10, //Márgenes internas vertical
	margin_bottom: 50, //Márgen externa inferor
	single_column_breakpoint: 769 //Punto de quiebre para una sola columna
});

/*=============================================
EKKO LIGHTBOX
=============================================*/

$(document).on("click", "[data-toggle='lightbox']", function(e){

	e.preventDefault(); //Quitar eventos que vengan por defecto en el navegador
	$(this).ekkoLightbox(); //Activar la acción del plugin Ekko Lightbox


})

/*=============================================
MOUSE PARALLAX EFFECT - JQUERY
=============================================*/
var mouseParallax = $(".mouseParallax");

$(".mouseParallax").mousemove(function(e){

	var posX = e.offsetX;
	var posY = e.offsetY;

	for(var i = 0; i < mouseParallax.length; i++){
		$(mouseParallax[i]).css({
			
			"width": "110%",
			"left": posX / (i*250) + "%",
			"top": posY / (i*250) + "%"
		})
	}
	$(mouseParallax[0]).css({"width": "100%"})
});

/*=============================================
SCROLL
=============================================*/

$(".nav-link").click(function(e){

	e.preventDefault();

	var target = $(this).attr("href");

	$("html, body").animate({
		scrollTop: $(target).offset().top
	}, 1000, "easeOutBack")
})

/*=============================================
SCROLL UP
=============================================*/

$.scrollUp({
	scrollText: "",
	scrollSpeed: 2000,
	easingType: "easeOutCubic"
})
