console.log("## ARROW FUNCTIONS")

/*
 FUNCIONES DE TIPOS FLECHA: Son funciones anónimas y se deben guardar en variables constantes para no ser modificadas en el futuro
*/

// function holaMundo(){
//     console.log("Hola Mundo")
// }

//Funciones de tipo flecha sin parámetros
const holaMundo = () => {
 
    console.log("Hola Mundo")
}

holaMundo();

//Funciones de tipo flecha con un solo parámetro

const holaMundoParam = mensaje =>{
    console.log(mensaje);
}

holaMundoParam("Hola Mundo...");


//Funciones de tipo flecha con varios parámetros


const holaMundoParams = (mensaje1, mensaje2) =>{
    console.log(mensaje1);
    console.log(mensaje2);
}


holaMundoParams("Hola Mundo...", "como están");








