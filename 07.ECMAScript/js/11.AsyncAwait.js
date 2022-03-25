console.log("### ASYNC - AWAIT ###");

/**
 * ASYNC - AWAIT: Mos simplifica el codigo para ejecutar promesas asíncornas con una sola respuesta correcta
 */

 let reservaDestino = [
    {
        id:1,
        destino:"Miami"
    },
    {
        id:2,
        destino:"New York"
    },
    {
        id:3,
        destino:"Los Angeles"
    }
]

let reservaDia = [
    {
        id:1,
        dia:"Lunes"
    },
    {
        id:2,
        dia:"Martes"
    },
    {
        id:3,
        dia:"Miercoles"
    }
]

let reservaAsiento = [
    {
        id:1,
        asiento:"Ventana"
    },
    {
        id:2,
        asiento:"Medio"
    },
    {
        id:3,
        asiento:"Pasillo"
    }
]

//Primera tarea: Reservar el destino

let getDestino = id => {
    return new Promise((resolve, reject)=>{

        let destinoBD = reservaDestino.find(destino => destino.id === id)

        if(!destinoBD){
            reject("No existe el destino seleccionado");
        }
        else{
            resolve(destinoBD);
        }
    })
}

//Segunda tarea: Reservar el dia

let getDia = id => {
    return new Promise((resolve, reject)=>{

        let diaBD = reservaDia.find(dia => dia.id === id)

        if(!diaBD){
            reject("No existe el dia seleccionado");
        }
        else{
            resolve(diaBD);
        }
    })
}

//Tercera tarea: Reservar el asiento

let getAsiento = id => {
    return new Promise((resolve, reject)=>{

        let asientoBD = reservaAsiento.find(asiento => asiento.id === id)

        if(!asientoBD){
            reject("No existe el asiento seleccionado");
        }
        else{
            resolve(asientoBD);
        }
    })
}

//RESPUESTA DE LAS TAREAS ASINCRONAS con ASYNC y AWAIT

let informeReserva = async(idDestino, idDia, idAsiento) => {

    let informeDestino =  await getDestino(idDestino);
    let informeDia =  await getDia(idDia);
    let informeAsiento =  await getAsiento(idAsiento);

    return `Tu destino será: ${informeDestino.destino}, tu dia será: ${informeDia.dia}, tu asiento será: ${informeAsiento.asiento}`
}

informeReserva(1,1,1).then(mensaje => console.log(mensaje)).catch(err => console.log(err));