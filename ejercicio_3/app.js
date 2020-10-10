
const obtenerPokemon = require("./library");

// Codigo funcion callback
function funcionCallback(pokemon){
    const name = pokemon.name;
    console.log('Nombre: ', name);
    const habilidades = pokemon.abilities;    
        habilidades.forEach(element => {
            console.log('Habilidad: ',element.ability.name);
        });
    
    
}




// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("bulbasaur", funcionCallback);
