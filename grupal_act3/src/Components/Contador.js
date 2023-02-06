import React from 'react';
import { useState } from 'react'; // Importar el useState para implementarlo
import Boton from './Boton'; // Llamar a mi archivo Boton para pasarle unas props

// Componente Contador
const Contador = () => {

    // Definir mi estado numero con valor 0 inicial para luego actualizarlo
    const [numero, setNumero] = useState(0)

    // Metodos incrementar, decrementar y reset
    const incrementar = () => {
        // Actualizar el setNumero e incrementarlo a 1 por cada click
        setNumero(numero + 1);
    }
    const decrementar = () => {
        // Actualizar el setNumero y decrementarlo a 1 por cada click
        setNumero(numero - 1);
    }
    const reset = () => {
        // Actualizar el setNumero y dejar el numero a 0
        setNumero(0);
    }
    
    return(
        <div>
            {/* Llamar al nuevo que se actualizara */}
            <p>{numero}</p>
            {/* Pasarle unas props y llamar a mis metodos para utilizar a mi archivo Boton.js */}
            <Boton increment={incrementar} decrement={decrementar} reset={reset} />
        </div>
    )
}

// Exportar mi componente Contador
export default Contador;