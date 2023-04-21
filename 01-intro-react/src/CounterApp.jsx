import React from 'react'
import PropTypes from 'prop-types';// Importamos los proptypes

export const CounterApp = ({ value }) => {
 
    const sumarUnidad = () => { 
        console.log('+1')
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>
        <button onClick={ sumarUnidad }>
            +1
        </button>
    </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}