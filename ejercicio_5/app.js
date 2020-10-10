
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

function callback(nombre){
    console.log(nombre);
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(callback);
