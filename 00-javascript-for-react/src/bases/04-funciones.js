/*************/
/* Funciones */
/*************/

/**
 * Las funciones son uno de los bloques de construcción fundamentales en JavaScript. 
 * Una función en JavaScript es similar a un procedimiento — un conjunto de 
 * instrucciones que realiza una tarea o calcula un valor, pero para que un 
 * procedimiento califique como función, debe tomar alguna entrada y devolver 
 * una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar 
 * una función, debes definirla en algún lugar del ámbito desde el que deseas 
 * llamarla.
 */

/** Funcion clasica */
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

/**
 * Funciones flecha
 * Poseen una sintaxis mas simple en comparacion a las funciones clasicas
 */
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

// console.log( saludar('Goku') )

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );


const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papu1502'
});


const user = getUser();
console.log(user);

// Tarea
const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Santiago');
console.log( usuarioActivo );