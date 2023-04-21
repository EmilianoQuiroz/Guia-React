import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { NuevoComponente } from './NuevoComponente';
//Importamos los estilos CSS como compenente global
import './styles.css';
import { CounterApp } from './CounterApp';


/** Renderisamos nuestra aplicacion */
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <FirstApp /> */}
        <CounterApp value = { 10 }/>
    </React.StrictMode>
);