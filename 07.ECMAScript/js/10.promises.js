console.log("### PROMISES ###");

/**
 * PROMISES: Nos permiten ejecutar un trabajo ya sea sincróno o asíncrono después de que se realiza una tarea anterior
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

//Respuesta de la primera tarea

getDestino(1).then( destinoBD => {

    console.log(`Tu destino será: ${destinoBD.destino}`);

    //Respuesta de la segunda tarea

    getDia(1).then( diaBD => {

        console.log(`Tu dia será: ${diaBD.dia}`);

        getAsiento(1).then( asientoBD => {

            console.log(`Tu asiento será: ${asientoBD.asiento}`);
        }).catch(err => {
            console.log(err);
        })

    }).catch(err => {
        console.log(err);
    })

}).catch(err => {
    console.log(err);
})

