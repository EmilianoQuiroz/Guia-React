/************/
/* Arreglos */
/************/
/**
 * Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos 
 * para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el 
 * tipo de los elementos de un array son variables. Dado que la longitud de un array 
 * puede cambiar en cualquier momento, y los datos se pueden almacenar en ubicaciones 
 * no contiguas, no hay garantía de que los arrays de JavaScript sean densos; esto 
 * depende de cómo el programador elija usarlos. En general estas características son 
 * cómodas, pero si, en su caso particular, no resultan deseables, puede considerar 
 * el uso de arrays con tipo.
 */
const arreglo = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

//SPREAD
/** Con Spread (...) podemos copiar de manera simple una parte o la totalidad de un 
 * elemento array o un objeto en JavaScript. *
 **/
let arreglo2 = [ ...arreglo, 5 ];

// MAP
/** map() es un método incorporado en los arreglos, para iterar a través de los 
 * elementos dentro de una colección de arreglos en JavaScript. Piensa en él, como 
 * un bucle para avanzar de un elemento a otro en una lista, manteniendo el orden y 
 * la posición de cada elemento. 
 **/
const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
