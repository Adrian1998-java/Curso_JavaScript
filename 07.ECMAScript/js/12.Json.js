console.log("### JSON ###")

let json = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}

  console.log("json", json);

/*=============================================
JSON STRINGIFY:Tomar mi creación de array y objetos y convertirlo en JSON para ser enviando a otras instancias: cliente o servidor, lo envía como cadena de texto
=============================================*/

let enviarJSON = JSON.stringify(json)

console.log("enviarJSON", enviarJSON);

/*=============================================
JSON PARSE: Recibe un dato JSON que provenga de otras instancias: cliente o servidor, para convertilo en Arreglos y Objetos
=============================================*/

let convertirJSON = JSON.parse(enviarJSON);

console.log("convertirJSON", convertirJSON);
