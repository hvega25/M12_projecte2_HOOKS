import React, {useState} from "react";

const Texto = () => {
    const [colorText, setColorText] = useState('green');

    return (
        <div className='hola'>
            <button onClick={() => {
                setColorText(colorText == 'green' ? 'red' : 'green')
            }}> cambio

            </button>
            <h1 style={{ color: colorText }} > Cambio de color</h1>
        </div>
    );

}




export default Texto;