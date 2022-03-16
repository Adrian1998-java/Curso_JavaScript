/*
Funciones sin Parametros
*/
var globales = 10;
console.log("globales", globales);

// Declaramos la funcion 
function saludo(){
    //Tarea de la funcion
    console.log("hola")
}
// Ejecutamos la funcion 
saludo();

/*
Funciones con Parametros
*/

function operation(digito1, digito2){
    
    
    var resultado = digito1 + digito2;
    globales = resultado;
    console.log("globales_operation", globales);
    console.log("resultado", resultado);
    
}

operation(5,7);
operation(5,10);

/*
Funciones con retorno
*/

function retorno1(){

    var numero = 5;
    return numero;

}

console.log(retorno1());

/*
Funciones con retorno con parametros
*/

function retorno2(numero){
    
    
    return numero;
}
console.log(retorno2(10));
console.log(retorno2(20));
console.log(retorno2(30));






