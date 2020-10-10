
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
var pokemon = "pikachu";

obtenerPokemon(pokemon)
.then(res => {
    console.log('Nombre: ', res.name);
    const habilidades = res.abilities;    
        habilidades.forEach(element => {
            console.log('Habilidad: ',element.ability.name);
        });
})
.catch(error => {
    console.error("Pokemón no encontrado", error)});


