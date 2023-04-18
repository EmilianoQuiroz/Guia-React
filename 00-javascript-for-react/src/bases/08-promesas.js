/***********/
/* Promesas*/
/***********/
/**
 * Una Promise es un objeto que representa la terminación o el fracaso de una 
 * operación asíncrona. Esencialmente, una promesa es un objeto devuelto al cual 
 * se adjuntan funciones callback, en lugar de pasar callbacks a una función.
 */

import heroes from './data/heroes';


const promesa = new Promise((resolve, reject)=>{

    setTimeout(() => {
        /** Importamos los heroes de Data y los mostramos */
        const getHeroesId = (id) => heroes.find( heroe => heroe.id === id);
        console.log( getHeroesId(3));

        //console.log('cada 3 segundos')/** Lo que quiero que se ejecute */
        resolve();/** COn el resolve llamamos al catch */
    }, 3000);/** El tiempo en el que quiero que se ejecute en ms*/
});
/**
 * Con .then indicamos que la promesa se ejecuto correctamente
 */
promesa.then(()=>{
    console.log('La promesa se ejecuto correctamente')
})
/**
 * Con .catch podemos ejecutar algo cuando se produzca un error
 */

/**
 * Con .finally ejecutaremos una porcion de codigo luego del .them y el .catch
 */