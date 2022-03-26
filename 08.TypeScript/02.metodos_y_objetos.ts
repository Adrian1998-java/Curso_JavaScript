class Automovil{

    public marca: string;
    public modelo: string;

    //METODO: ES EL ALGORITMO ASOCIADO A UN OBJETO QUE INDICA LA CAPACIDAD DE LO QUE ESTE PUEDE HACER. La diferencia entre un método y funcion es que llamamos metodo a las funciones de una clase o de un objeto (EN LA POO), mientras que llamamos funciones a los algoritmos de la programacion estructurada.

    public mostrar(){

        return "Hola! Soy un "+this.marca+", modelo "+this.modelo;
    }


}

//OBJETO: Es una entidad provista de métodos o mensajes los cuales responde propiedades con valores concretos

var automovil = new Automovil();
automovil.marca = "Toyota";
automovil.modelo = "2015";
console.log(automovil.mostrar());

var automovil2 = new Automovil();
automovil2.marca = "Mazda";
automovil2.modelo = "2010";
console.log(automovil2.mostrar());