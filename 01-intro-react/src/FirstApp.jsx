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
export const FirstApp = () => {
  return (
    <>
      <h1> Santiago Quiroz </h1>
      <h2> Ingeniero de software </h2>
      {/**
       * De esta manera podemos pasar un objeto como varible 
       * dentro de nuestro functional component
       */}
      {/* <code>{ JSON.stringify( objeto )}</code> */}

      {/* <h2>{funcion(3,6)}</h2> */}
    </>
  )
}
