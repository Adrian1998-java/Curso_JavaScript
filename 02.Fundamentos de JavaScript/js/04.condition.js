/*
CONDICIONES
*/
var a = 5;
var b = 10;

if(a > b){
    console.log("a es mayor que b")
}else if(a == b){

    console.log("a es lo mismo que b")
}else{
    console.log("a no es lo mismo que b y, a es menos que b");
}

/*
CAMBIOS
*/
var dia = "domingo";

switch(dia){
    case "sabado":
        console.log("voy a estudias PHP");
        break;
    case "sabado":
        console.log("voy a estudias JavaScript");
        break;
    case "jueves":
        console.log("voy a estudias Html");
        break;
    case "domingo":
        console.log("voy a descansar");
        break;
    default: console.log("Voy a estudiar javascript")
}


