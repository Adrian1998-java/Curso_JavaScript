let vehiculos = [
    {
    id:1,
    marca: "Mazda",
    modelo:2016
    },
    {
        id:2,
        marca: "Toyota",
        modelo:2017
    },
    {
        id:3,
        marca: "Hyundai",
        modelo:2018
    }
]

console.log("### FILTER ###");
/**
 * FUNCION FILTER(): Recorre cada elemento del array y retorna un nuevo array filtrando solo los elementos solicitados 
 */

let filtrarVehiculos = vehiculos.filter( vehiculo => {
    return vehiculo.modelo > 2016
})

console.log("vehiculos", vehiculos);
console.log("filtrarVehiculos", filtrarVehiculos);

console.log("### FIND ###");
/**
 * FUNCION FIND(): Recorre cada elemento del Array y retorna el primer elemento que coincida con la busqueda por fuera del Array
 */

 let encontrarVehiculo = vehiculos.find( vehiculo => {
    return vehiculo.modelo > 2016
})

console.log("encontrarVehiculo", encontrarVehiculo);



