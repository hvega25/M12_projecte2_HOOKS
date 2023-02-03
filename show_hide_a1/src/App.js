import './App.css';
import { useState } from 'react';
function App() {

  const [visibility, setVisibility] = useState(true)

  return (
    <div className="App">
      
        <button onClick={() => setVisibility(!visibility)}>
          {visibility ? "Show":"Hide"}
        </button>
        {visibility && <h1>El texto es mostra</h1>}
    </div>
  );
}

export default App;
