import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {


  const [numero, setNumero] = useState(444) //se utiliza para la segunda parte con los tres botones 
  const [numero1, setNumero1] = useState(0) //se utiliza para la primera parte con el botón increntar

  const Incrementar = () => {
    setNumero1(numero1 + 1)
  }

  const Incrementar1 = () => {
    setNumero(numero + 1)
  }

  const Decrementar = () => {
    setNumero(numero - 1)
  }

  const Reset = () => {
    setNumero(0)
  }

  return (
    <div className="App">
      <h1> Primera parte </h1>
      <button onClick={Incrementar}>Incrementar</button><br />
      {numero1}
      <h1> Segunda Parte </h1>
      <button onClick={Incrementar1}>Incrementar</button>
      <button onClick={Decrementar}>Decrementar</button>
      <button onClick={Reset}>Reset</button><br />
      {numero}
    </div>
  );


}



export default App;
