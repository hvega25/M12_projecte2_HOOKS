import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {


  const [colorText, setColorText] = useState('green');

  return (
    <div className='App'>
      <button onClick={() => {
        setColorText(colorText == 'green' ? 'red' : 'green')
      }}> cambio

      </button>
      <h1 style={{ color: colorText }} > Cambio de color</h1>
    </div>
  );

}



export default App;
