
import './App.css';
import {useState} from 'react'

import Tablero from './Tablero.js'
import Alertas from './Alertas.js'
import Footer from './Footer.js'

import { VarsProvider } from "./VarsContext";




function App() {

  const [alert, setAlert] = useState(false);

  
  return (

    <div className='background' >
      <VarsProvider>
        { alert===false ? <Tablero /> : <Alertas />  }

      <Footer alert={alert} setAlert={setAlert}></Footer>

      </VarsProvider>
        
      
    </div>
  );
}

export default App;
