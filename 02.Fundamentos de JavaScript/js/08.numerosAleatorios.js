var numeroAleeatiorio = document.querySelector("#numeroAleatorio");
var numero = 0;
/**
 * NUMEROS ALEATORIOS
 * Math.ramdom = devuelve entre 0 y 1
 * Math.floor = redondea al numero menor del decimal
 * Math.ceil = redondea al numero maximo del decimal
 * Math.round = redondea a su numero entero más proximo
 */

numero = Math.round(Math.random() * 10);
numeroAleeatiorio.innerHTML = numero;