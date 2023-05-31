
describe('Pruebas en <DemoComponent />', () => { 
    test('Esta prueba no tiene que fallar', () => {
        // Pasos de la prueba
        //1. Inicializacion. Preparamos el ambiente de pruebas
        const message1 = 'Hola mundo';
        //2. Estimulo. Lo que aplicamos al sujeto de prueba
        const message2 = message1.trim();
        //3. Observar el comportamiento
        expect( message1 ).toBe( message2 );
    })
})
