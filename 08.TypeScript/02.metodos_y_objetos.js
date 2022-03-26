var Automovil = /** @class */ (function () {
    function Automovil() {
    }
    //METODO: ES EL ALGORITMO ASOCIADO A UN OBJETO QUE INDICA LA CAPACIDAD DE LO QUE ESTE PUEDE HACER. La diferencia entre un método y funcion es que llamamos metodo a las funciones de una clase o de un objeto (EN LA POO), mientras que llamamos funciones a los algoritmos de la programacion estructurada.
    Automovil.prototype.mostrar = function () {
        return "Hola! SOy un Toyota, modelo 2015";
    };
    return Automovil;
}());
//OBJETO: Es una entidad provista de métodos o mensajes los cuales responde propiedades con valores concretos
var automovil = new Automovil();
console.log(automovil.mostrar());
