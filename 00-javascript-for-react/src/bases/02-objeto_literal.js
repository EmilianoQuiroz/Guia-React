/*********************/
/* Objetos literales */
/*********************/
/**
 * - Un objeto es la estructura de datos más usada en javascript, compuesta de pares 
 * ordenados y agrupados en claves y valores.
 * - Se denomina objeto literal al objeto cuyas propiedades están declaradas 
 * textualmente en el código.
 * -Los objetos pueden almacenar métodos en su interior.
 * - Para acceder a las propiedades de un objeto dentro de un método es necesario 
 * usar la palabra reservada this por scope de las variables.
 */
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';


console.log( persona );
console.log( persona2 )
