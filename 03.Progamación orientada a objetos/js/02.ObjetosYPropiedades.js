/**
 * OBJETOS: Es una coleccion de propiedades y métodos
 */

var object = {

    //Una propiedad es una asocioacion entre un nombre y un valor.
    nombre: "Juan",
    edad:32,
    
    //Método es una función dentro de un objeto
    descripcion: function(){

        console.log("Su nombre es "+object.nombre+" y tiene "+object.edad+" años.")
    },

    saludar: function(saludo){
        console.log(saludo+" "+object.nombre);
    }

}

console.log("Nombre", object.nombre);
console.log("Edad", object.edad);
object.descripcion();
object.saludar("Hola");

/**
 * OBJETOS PRIMITIVOS
 */

//El objeto Date te permite trabajar con fechas y horas

var d = new Date();
console.log("d", d);
var year = d.getFullYear();
console.log("year", year);




