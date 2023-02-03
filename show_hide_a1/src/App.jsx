import './App.css'; // Importar Styles css
import { useState } from 'react'; // Importar el useState
function App() {

  // Tener un control con el texto (Por defecto en true)
  const [visibility, setVisibility] = useState(true)

  return (
    <div className="App">
        {/* Tener interaccion al hacer click con el texto para mostrarlo y ocultarlo */}
        <button onClick={() => setVisibility(!visibility)}>
          {/* Cambiar value del boton conforme este el texto o no */}
          {visibility ? "Show":"Hide"}
        </button>
        {/* Mostrar texto */}
        {visibility && <h1>El texto es mostra</h1>}
    </div>
  );
}

// Exportar la funcion App para que se muestre el contenido
export default App;
