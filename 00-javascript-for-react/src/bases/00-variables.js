/**************************/
/* Variables y constantes */
/**************************/

const nombre = 'Santaigo';
const apellido = 'Quiroz';

let valorDado = 5;
valorDado = 4; // Vatiable global, se puede acceder a esta desde cualquier parte del codigo

console.log( nombre, apellido, valorDado )

// var No se debe de usar...
if ( true ) {
    const nombre = 'Peter';// Variable local
    // Solo se puede acceder a ella dentro del ambito en el qe fue creada, en este caso el if
    console.log(nombre)
}

console.log( valorDado );