// Importamos Proptypes
// Por defecto en vite no viene instalada asiq ue hay que instalarlo
import PropTypes from 'prop-types'; // Con PropTypes podemos definirle el tipo a las properties
import React from 'react'
// export function App() {
//     return (
//         <h1>Hola mundo!!!</h1>
//     );
// }

// import React from 'react'
/**
 * Los objetos no pueden pasarse como variables dentro de un Functional component
 * lo que se puede hacer es pasarlos con JSON.stringify( Objeto ), de esta manera
 * el objeto se transforma en JSON con lo cual nuestro FC lo puede leer sin problema
 */

// Objeto
const objeto = {
  mensaje:'Bienvenido ',
  empleado:'Santiago Quiroz'
};

/**
 * Las funciones tambien se pueden pasar como variable dentro de nuestro FC, aunque
 * estas pueden ir dentro del FC se recomienda siempre ponerlas por fuera
 */

//Funcion
const funcion = (a,b)=> {
  return a + b; 
}

// Componente funcional
export const FirstApp = ( { title, subTitle } ) => {

  return (
    <>
      <h1> { title } </h1>
      <h2> { subTitle } </h2>
      {/**
       * De esta manera podemos pasar un objeto como varible 
       * dentro de nuestro functional component
       */}
      {/* <code>{ JSON.stringify( objeto )}</code> */}

      {/* <h2>{funcion(3,6)}</h2> */}
    </>
  )
}

//Definimos las proptypes
/**
 * Con estas proptypes le decimos a dato que hora va a tener un  tipo especifico
 * ahora este pasaria a tener una especie de tipado estricto
 * Esto cuando trabajamos con typescript ya no es necesario
 * Con .isRequired definimos que el dato tiene que ser requerido obligatoriamente 
 */
FirstApp.propType = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}