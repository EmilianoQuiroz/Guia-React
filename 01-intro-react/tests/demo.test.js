test('Esta prueba no tiene que fallar', () => {
    if ( 1 === 0 ) {
        throw new Error('No se puede dividir por 0');
    }
})