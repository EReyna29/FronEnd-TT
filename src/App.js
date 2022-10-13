
import './App.css';
import {useState} from 'react'
import Tablero from './Pages/Tablero'
import Alertas from './Pages/Alertas'
import Footer from './Componentes/Footer'

import { VarsProvider } from "./Context/VarsContext";
import { IndicadoresProvider } from './Context/IndicadoresContext';

function App() {

  const [alert, setAlert] = useState(false);

  
  return (

    <div className='background' >
      <VarsProvider>
        <IndicadoresProvider>
          { alert===false ? <Tablero /> : <Alertas />  }

          <Footer alert={alert} setAlert={setAlert}/>
        </IndicadoresProvider>
      </VarsProvider>
        
      
    </div>
  );
}

export default App;
