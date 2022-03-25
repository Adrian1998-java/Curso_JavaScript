console.log("## MAP() ##")

/*
    FUNCION MAP(): Recorre cada elemento del Array y retorna modificaciones que le queramos al array inicial
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
deportes.map((deporte, index)=> {

    if(index === 1){
        deporte.lugar = "Estadio"; 
    }

    if(index === 2){
        deporte.nivel = "Básico"; 
    }
   

    return deporte;
});

console.log("Deportes", deportes);







