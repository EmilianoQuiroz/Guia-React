/*********************************/
/* Desestructuracion de Arreglos */
/*********************************/

const personajes = ['Goku','Vegeta','Trunks'];
const [ , , personaje3 ] = personajes;
console.log( personaje3 );


const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 
console.log(letras, numeros);


// Ejercicio
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre();
