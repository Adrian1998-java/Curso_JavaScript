console.log("### VAR ###");

/*
DECLARACION VAR:  declaraciones globales y pueden ser transformados en cualquier momento
*/
var nombre_var= "Juan";
if(nombre_var == "Juan"){
    var edad_var = 30;
    var nombre_var = "Miguel";
    console.log("nombre Var", nombre_var);
}

console.log("nombre Var", nombre_var);
console.log("edad_var", edad_var);

console.log("### LET ###");
/*
DECLARACION LET:  Se utiliza para declarar variables en contextos especificos y pueden cambiar su valor en dicho contexto, se destruyen fuera del contexto para ahorrar memoria en el navegador
*/

let nombre_let = "Juan";

if(nombre_let == "Juan"){
    let edad_let = 30;
    let nombre_let = "Miguel";
    console.log("nombre Let", nombre_let);
    console.log("edad_let", edad_let);
}

console.log("nombre Let", nombre_let);


console.log("### CONST ###");
/*
DECLARACION CONST: Se utiliza para declarar variables en contextos especificos y no pueden cambiar su valor en dicho contexto y se destruyen por fuera del contexto por lo tanto ahorra memoria
*/
const nombre_const = "Juan";

if(nombre_const == "Juan"){
    const edad_const = 30;
    console.log("edad const", edad_const);
    const nombre_const = "Miguel";
    console.log("nombre Const", nombre_const);
    
}

console.log("nombre const", nombre_const);




