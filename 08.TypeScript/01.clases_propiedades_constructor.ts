/**
 * CLASE: Un aclase es un modelo que se utiliza para crear objetos que comparten un mismo comportanmiento, estado e identidad
 */

class Propiedades{

    //PROPIEDADES: Son las caracteristicas que puede tener un Objeto

    public texto: string;
    public numero: number;
    public boleana: boolean;
    public arreglo: Array<any>;
    public cualquiera: any;

    //COSNTRUCTOR: Se utiliza para asignar valor a las propiedades globales.

    constructor(){

        this.texto = "palabra";
        console.log(this.texto);
        this.numero = 5;
        this.boleana = true;
        this.arreglo = ["texto1", "texto2", 0, true];
        this.cualquiera = { 
            "propiedad1":"valor1",
            "propiedad2":"valor2",
            "propiedad3":"valor3",
        }
    }
}

// var objeto = new Propiedades();