/*
    CLASES

    Las clases, son funciones constructoras y siempre las vamos a iniciar con Mayúscula

    ejemplo: new String()
*/

/*
    CLASES PRIMITIVAS   
*/
//Clase String

var String = new String("Esto es un string");
console.log("string", String);

//Clase number
var number = new Number(12);
console.log("Number", number);

//Clase boolean
var boolean = new Boolean(false);
console.log("Boolean", boolean);

/*
    CLASES COMPUESTAS
*/
//Clases Array
var array = new Array("Rojo", "Amarillo", "Verde");
console.log("Array", array);

//Clase Object
var Object = new Object({
    nombre: "Pedro",
    edad: 30
});
console.log("Object", Object);

/*
    CLASES CREADAS POR EL PROGRAMADOR
*/
//Creamos el prototipo

function Persona(){

    //Propiedades públicas
    this.nombre;
    this.edad;
}

var yo = new Persona();
yo.nombre = "Juan";
yo.edad = "21 años";

console.log("yo", yo);

//Clases con parámetros
function Animales(nombre, raza){

    this.nombre = nombre;
    this.raza = raza;
}

var mascota = new Animales("Perro", "Pitbull");
console.log("mascota", mascota);






