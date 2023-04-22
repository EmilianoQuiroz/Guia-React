//Importamos los Hooks
import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types';// Importamos los proptypes

export const CounterApp = ({ value }) => {
 
    const [ counter, setCounter] = useState( value );
    const sumarUnidad = () => { 
        // console.log('+1')
        /**
         * Cuando mandamos a llamar al setCounter le estamos diciendo a React que el
         * estado cambio, en este caso se le suma uno en cada render
         */
        setCounter( counter + 1);
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ sumarUnidad }>
            +1
        </button>
    </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}