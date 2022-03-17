/**
 * CASO 1. LOS CUATRO ATLETAS
 * 
 * De cuatro corredores de atletismo se sabe que C a llegado inmeditadamente detrás de By, D a llegado en medio de A y C. ¿Podría usted calcular el orde de llegada?
 * 
 * Respuesta:
 * B -> 1
 * C -> 2
 * D -> 3
 * A -> 4
 */
var A = document.querySelector("#CorredorA");
var B = document.querySelector("#CorredorB");
var C = document.querySelector("#CorredorC");
var D = document.querySelector("#CorredorD");

var a = {

    A:0,
    B:0,
    C:0,
    D:0,
    resultado: function(){

        if(a.C > a.B && 
           a.D > a.B &&
           a.D > a.C &&
           a.D < a.A){
               return true;
           }
           else{
               false;
           }
    },

    intervalo: setInterval(function() {

        a.A = Math.ceil(Math.random() * 4);
        a.B = Math.ceil(Math.random() * 4);
        a.C = Math.ceil(Math.random() * 4);
        a.D = Math.ceil(Math.random() * 4);

        A.innerHTML = a.A;
        B.innerHTML = a.B;
        C.innerHTML = a.C;
        D.innerHTML = a.D;

        if(a.resultado()){
            clearInterval(a.intervalo);
            console.log("Atleta A", a.A);
            console.log("Atleta B", a.B);
            console.log("Atleta C", a.C);
            console.log("Atleta D", a.D);
        }
    }, 10)

}

/**
 * CASO 2. CABALLOS
 * 
 * El caballo de Mac es más oscuro que el de Smith, pero más rápido y más viejo que el de Jack, que es aún más lento que el de Willy, que es más joven que el de Mac, que es mas viejo que el de Smitch, que es mas claro que el de Willy, aunque el de Jack, es más lento y más oscuro que el de Smith. ¿Cual es el mas viejo, cual el más lento y cual el más claro?
 * 
 * Respuesta:
 * Mac | edad = viejo (2) | velocidad = rapido (2) | tono = oscuro (2) |
 * Smitch | edad = Joven (1) | velocidad = rapido(2) | tono = claro (1) |
 * Jack | edad = joven (1) | velocidad = lento (1) | tono = oscuro (2) |
 * Willy | edad = joven(1) | velocidad = rapido (2) | tono = oscuro (2) |
 * 
 */

var b = {

    Mac: {edad:0, velocidad:0, tono:0},
    Smith: {edad:0, velocidad:0, tono:0},
    Jack: {edad:0, velocidad:0, tono:0},
    Willy: {edad:0, velocidad:0, tono:0},

    resultado: function(){
        if(b.Mac.tono > b.Smith.tono &&
           b.Mac.velocidad > b.Jack.velocidad &&
           b.Mac.edad > b.Jack.edad &&
           b.Willy.velocidad > b.Jack.velocidad &&
           b.Mac.edad > b.Willy.edad &&
           b.Mac.edad > b.Smith.edad &&
           b.Willy.tono > b.Smith.tono &&
           b.Smith.velocidad > b.Jack.velocidad && 
           b.Jack.tono > b.Smith.tono
           ){
                return true;
            }
            else{
                return false;
            }
    },

    intervalo: setInterval(function(){

        b.Mac.edad = Math.ceil(Math.random() * 2);
        b.Mac.velocidad = Math.ceil(Math.random() * 2);
        b.Mac.tono = Math.ceil(Math.random() * 2);

        b.Smith.edad = Math.ceil(Math.random() * 2);
        b.Smith.velocidad = Math.ceil(Math.random() * 2);
        b.Smith.tono = Math.ceil(Math.random() * 2);

        b.Jack.edad = Math.ceil(Math.random() * 2);
        b.Jack.velocidad = Math.ceil(Math.random() * 2);
        b.Jack.tono = Math.ceil(Math.random() * 2);

        b.Willy.edad = Math.ceil(Math.random() * 2);
        b.Willy.velocidad = Math.ceil(Math.random() * 2);
        b.Willy.tono = Math.ceil(Math.random() * 2);


        if(b.resultado()){
            clearInterval(b.intervalo);
            console.log("Caballo de Mac", b.Mac);
            console.log("Caballo de Smith", b.Smith);
            console.log("Caballo de Jack", b.Jack);
            console.log("Caballo de Willy", b.Willy);
        }
    }, 1)
}

/**
 * CASO 3. LOS CUATRO PERROS.
 * 
 * Tenemos cuatro perros: un galgo, un dogo, un alano y un podenco. Este último come más que el galgo; el alano come más que el galgo y menos que el dogo, pero éste come más que el podenco. ¿Cuál de los cuatro perros come menos?
 * 
 * Respuesta:
 * 1. Podenco > Galgo 
 * 2. Dogo > Alano > Galgo
 * 3. Alano > Podenco
 * 
 * Orden : Dogo > Alano > Podenco > Galgo
 */

 var c = {

    Galgo:0,
    Dogo:0,
    Alano:0,
    Podenco:0,
    resultado: function(){

        if(
            // c.Dogo > c.Alano &&
            // c.Alano > c.Podenco &&
            // c.Podenco > C.Galgo 
            c.Podenco > c.Galgo &&
            c.Alano > c.Galgo &&
            c.Alano < c.Dogo &&
            c.Dogo > c.Podenco
            ){
               return true;
           }
           else{
               false;
           }
    },

    intervalo: setInterval(function() {

        c.Galgo = Math.ceil(Math.random() * 4);
        c.Dogo = Math.ceil(Math.random() * 4);
        c.Alano = Math.ceil(Math.random() * 4);
        c.Podenco = Math.ceil(Math.random() * 4);

        if(c.resultado()){
            clearInterval(c.intervalo);
            console.log("Galgo", c.Galgo);
            console.log("Dogo", c.Dogo);
            console.log("Alano", c.Alano);
            console.log("Podenco", c.Podenco);
        }
    }, 10)

}


/**
 * CASO 4. SEIS AMIGOS DE VACACIONES.
 * 
 * Seis amigos desean pasar sus vacaciones juntos y deciden, cada dos, utilizar diferentes medios de transporte; sabemos que Alejandro no utiliza coche ya que éste acompaña a Benito que no va en avión. Andrés viaja en avión. Si Carlos, no va acompañado de Darío ni hace uso del avión, podría Vd. decirnos en qué medio de transporte llega a su destino Tomás.
 * 
 * Solución:    Avión    Coche
 * Alejandro =>   No        Si
 * Benito    =>   No        Si
 * Andrés    =>   Si        No
 * Carlos    =>   No        Si
 * Darío     =>    ?        ?
 * Tomás     =>   
 * 
 */

/**
 * CASO 5. SILENCIO
 * 
 * Si Angela habla más bajo que Rosa y Celia habla más alto que Rosa, ¿Habla Angela más alto o más bajo que Celia?
 * 
 * Solucion:
 * Rosa > Angela
 * Celia > Rosa
 * Angela <|> Celia ?  => Celia > Angela
 */

 var f = {

    Rosa:0,
    Angela:0,
    Celia:0,
    resultado: function(){

        if( 
            f.Rosa > f.Angela &&
            f.Celia > f.Rosa
            ){
               return true;
           }
           else{
               false;
           }
    },

    intervalo: setInterval(function() {

        f.Angela = Math.ceil(Math.random() * 3);
        f.Rosa = Math.ceil(Math.random() * 3);
        f.Celia = Math.ceil(Math.random() * 3);

        if(f.resultado()){
            clearInterval(f.intervalo);
            console.log("Angela", f.Angela);
            console.log("Rosa", f.Rosa);
            console.log("Celia", f.Celia);
        }
    }, 10)

}





