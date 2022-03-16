console.log("## MAP() ##")

/*
    FUNCION MAP(): 
*/

let deportes = [
    {
        titulo: "Futbol",
        nivel: "Básico"
    },
    {
        titulo: "Tenis",
        nivel: "Intermedio"
    },
    {
        titulo: "Golf",
        nivel: "Avanzado"
    }
]

let agregarLugar = deportes.map(deporte => {

    deporte.lugar = "Estadio";

    return deporte;
});

console.log("agregarLugar", agregarLugar);







