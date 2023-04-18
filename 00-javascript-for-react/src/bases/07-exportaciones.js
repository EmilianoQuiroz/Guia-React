/*****************/
/* Exportaciones */
/*****************/

// Importamos el archivo heroes,js
// Snipped: imp
import heroes from './data/heroes';

// Obtenemos el heroe segun su id con el metodo find
// const getHeroesId = (id) => {
//     return heroes.find(( heroe ) => {
//         if( heroe.id == id ){
//             return true;
//         }
//     });
// }

// Forma simplificada de usar el metodo find()
const getHeroesId = (id) => heroes.find( heroe => heroe.id === id);

// Mostrapos por consola el Heroe mediante el id
console.log( getHeroesId(3));

// Ahora obtenemos el heroe segun el owner con el metodo filter()
const getHeroesByOwber = (owner) => heroes.filter( heroe => heroe.owner === owner);

// Imprimimos el resultado por consola
console.log( getHeroesByOwber('DC'));
