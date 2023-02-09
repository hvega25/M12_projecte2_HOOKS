import React from 'react';

// Componente Boton
// Pasarle como parametro, una desestructuración y pasarla los nombre que se ha definido
// en vez de pasarle una props y llamarle con props. y el nombre, es una forma mas limpia de llamar
// un componente a otro
const Boton = ({increment, decrement, reset}) => {
    return (
        <div>
            {/* Definir 3 botones y con un evento de tipo click, llamar a mis 3 funciones */}
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

// Exportar mi componente Boton
export default Boton;