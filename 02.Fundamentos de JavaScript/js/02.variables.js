/*=====================================
VARIABLES
=====================================*/

// Variables numericas
var numeroDecimal = 5;
console.log("numero", numeroDecimal);

// Variables de texto
var palabra = "palabras";
console.log("palabra", palabra);

// variables booleanas
var boleana = true;
console.log("boleana", boleana);

// variables de tipo arreglo (Array)
var colores = ["rojo","amarillo"];
console.log("colores", colores[0]);

// Variables de tipo Objeto (Object: propiedad y valor)
var jugo = {ingrediente1:"fresa",
            ingrediente2:"mandarina",
            ingrediente3:"platano"
            }
console.log("jugo", jugo.ingrediente1);

// Varibales DOM (Modelos de objeto de Documento)
var caja = document.querySelector("#caja");
console.log("caja", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);



