
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

function callback(res){
    const persona = res.results[0];
    console.log('Nombre: ', persona.name.first, persona.name.last);
    console.log('Género: ', persona.gender);
    console.log('País: ', persona.location.country);
    console.log('Estado: ', persona.location.state);
    console.log('Ciudad: ', persona.location.city);
    console.log('Dirección: ', persona.location.street.name, persona.location.street.number);
    console.log('Código postal: ', persona.location.postcode);
    console.log('Email: ', persona.email);
    console.log('Nombre de usuario: ', persona.login.username);
    console.log('Password: ', persona.login.password);
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(callback);
