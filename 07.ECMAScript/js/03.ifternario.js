console.log("## IF TERNARIO ##");

/*
    IF TERNARIO: Sirve para hacer comprobaciones rápidas de falso o verdadero
*/
let camisa = {
    talla : 34,
    cantidad :0,
    existencia: false
}

const {talla, cantidad, existencia} = camisa;

let respuesta;
existencia ? respuesta = "Hay "+cantidad+" camisas" : respuesta = "No hay camisas";

console.log("respuesta", respuesta);




