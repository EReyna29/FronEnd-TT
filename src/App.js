
import './App.css';
import {useState} from 'react'
import Tablero from './Pages/Tablero'
import Alertas from './Pages/Alertas'
import Footer from './Componentes/Footer'

import { VarsProvider } from "./Context/VarsContext";

function App() {

  const [alert, setAlert] = useState(false);

  
  return (

    <div className='background' >
      <VarsProvider>
        { alert===false ? <Tablero /> : <Alertas />  }

      <Footer alert={alert} setAlert={setAlert}/>
      </VarsProvider>
        
      
    </div>
  );
}

export default App;
