/**
 * CLASE: Un aclase es un modelo que se utiliza para crear objetos que comparten un mismo comportanmiento, estado e identidad
 */
var Propiedades = /** @class */ (function () {
    //COSNTRUCTOR: Se utiliza para asignar valor a las propiedades globales.
    function Propiedades() {
        this.texto = "palabra";
        console.log(this.texto);
        this.numero = 5;
        this.boleana = true;
        this.arreglo = ["texto1", "texto2", 0, true];
        this.cualquiera = {
            "propiedad1": "valor1",
            "propiedad2": "valor2",
            "propiedad3": "valor3"
        };
    }
    return Propiedades;
}());
var objeto = new Propiedades();
