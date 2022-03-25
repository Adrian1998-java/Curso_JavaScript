console.log("### CALLBACKS ###");

/**
 *  CALLBACKS: Es una función que se ejecuta cuando algo sucede en otra funcion 
 */

let paises = [
    {
        id:1,
        pais:"Argentina",
        continente:"SurAmerica"
    },
    {
        id:2,
        pais:"Colombia",
        continente:"SurAmerica"
    },
    {
        id:1,
        pais:"Mexico",
        continente:"CentroAmerica"
    }
]

let tomarPais = (id, callback) =>{

    let idPais = paises.find(pais => {
        return pais.id === id;
    })

    if(!idPais){
        callback("No existe país en la BD");
    }
    else{
        callback(null, idPais);
    }
}

tomarPais(2, (err, res) =>{
    if(err){
      return console.log("mensaje", mensaje);
    }

    console.log(res);

})