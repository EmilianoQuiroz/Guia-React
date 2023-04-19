import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';

/** Renderisamos nuestra aplicacion */
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp />
    </React.StrictMode>
);