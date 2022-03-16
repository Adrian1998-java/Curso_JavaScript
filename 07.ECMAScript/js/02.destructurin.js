console.log("## DESTRUCTURING ##");

/*
    ASIGNACION POR DESTRUTURING: Nos permite tomar los valores de la propiedades de un objeto de forma directa utilizando el mismo nombre de la propiedad
*/

let carro = {
    marca: "Ferrari",
    modelo: 2020,
    color: "Rojo"
}

const {marca, modelo, color} = carro;

console.log("carro", color);