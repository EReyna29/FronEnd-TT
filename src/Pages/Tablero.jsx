import React, { useCallback } from 'react'
import {useState,useEffect} from 'react'
import { useVars } from "../Context/VarsContext";

import '../App.css';
import Batery from '../Componentes/Batery'

import Velocity from '../Componentes/Velocity'
import {registroAlerta} from  '../Services/mongo';
import BarraSuperior from '../Componentes/BarraSuperior';
import CentroAlertas from '../Componentes/CentroAlertas';
import { handleFrenoMano } from '../Services/handleEvents';
import { useIndicadores } from '../Context/IndicadoresContext';
import { ObtenerPalanca, pal } from '../Services/lecturaArchivos'


// const position = ["P","D","N","R"];

const alerta={
  id:0,
  nombre:"",
  temperatura:0.0,
  carga:0.0,
  alarma:false,
  fecha:null,
  descripcion:""
}
// const getRandomArbitrary=(min, max)=> {
//   return Math.random() * (max - min) + min;
// }
const Tablero = () => {
    
    const {vars,setVars} = useVars();
    const {indicadores,setIndicadores}=useIndicadores();
    const [charge, setCharge] = useState(vars.carga);
    const [degree, setDegree] = useState(vars.temperatura);
    //const [velocidad, setVelocidad] = useState(vars.velocidad);
    const [palanca,setPalanca]=useState(pal);
    const [frenoMano,setFrenoMano]=useState(true);

    useEffect(()=>{
      console.log("trayendo velocidad")
      let interval = null;
      interval = setInterval(async() => {
        
        
        if(pal!==palanca && pal!==undefined && pal!==null){
          await ObtenerPalanca()
          console.log(pal);
          setPalanca(pal)
          setVars({...vars,"palanca":pal})
        }
        
      },5);
      
      return () => {
        clearInterval(interval);
      };
    },[palanca])
    //Se agrega las alertas 
    const addEvent =useCallback( () =>{
      if(indicadores.carga===true){
        alerta.codigo= "AC" + Date.now().toString();
        alerta.nombre="Carga baja"
        alerta.descripcion="La carga del banco de baterias bajo a " + vars.carga + "%";
        alerta.temperatura=vars.temperatura;
        alerta.carga=vars.carga;
        alerta.fecha=new Date(Date.now()).toString();
      }
      
      registroAlerta(alerta);
      //await registroNotificacion(alerta)

  },[indicadores.carga])

    //Valida los indicadores del tablero
    useEffect(() => {
      let indicadores,carga=false,temp=false,pal=false;
      if(charge<=50)
        carga=true;
      if(degree>=80)
        temp=true;
      if(palanca==="P")
        pal=true;

      indicadores={"carga":carga,
      "bateria":false,
      "temperatura":temp,
      "freno":false,
      "frenoMano":frenoMano,
      "home":pal,
      "cargando":false,
      "lucesAltas":false,
      "lucesBajas":false,
      "lucesCuartos":false,
      "cajuela":false,
      "cofre":false,
      "puertaDI":false,
      "puertaDD":false,
      "puertaTI":false,
      "puertaTD":false
      };

      setIndicadores(indicadores); 
      
      if(carga || temp){
        addEvent();
      }
    }, [charge,degree,palanca])

    const handleAlertaFrenoMano =()=>{
      setFrenoMano(!frenoMano)
      handleFrenoMano(frenoMano);
    }
    
    
  return (
      <>
        <BarraSuperior degree={degree}/>
        <div className="mainTablero">

          <Batery charge={charge} />
          <div className="signal">
            <CentroAlertas />
            <button className="palanca" onClick={()=>setPalanca("P")}>
              <h1>{palanca}</h1>
            </button>
            <button className='alertFreno' onClick={()=>handleAlertaFrenoMano()}>
              {/* svg de freno de Mano */}
              <svg version="1.1" className='frenoManoContenedor'
                xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 612 612">
              <switch>
                <g >
                  <g id="Capa_2">
                    <ellipse className="st1" cx="309" cy="303.5" rx="169" ry="166.5"/>
                    <g>
                      <path className="st2" d="M286.03,340.85v82.62h-29.3V208.86c22.17-0.97,35.55-1.46,40.14-1.46c62.31,0,93.47,20.85,93.47,62.55
                        c0,48.25-27.54,72.37-82.62,72.37C304.39,342.32,297.16,341.83,286.03,340.85z M286.03,235.23v79.25
                        c12.4,0.98,18.95,1.46,19.63,1.46c36.33,0,54.5-14.31,54.5-42.92c0-26.17-19.39-39.26-58.16-39.26
                        C298.09,233.76,292.77,234.25,286.03,235.23z"/>
                    </g>
                    <path className="st3" d="M111,173.33c0,0-88.67,122,0,266.67"/>
                    <path className="st3" d="M502.87,172.67c0,0,88.67,122,0,266.67"/>
                  </g>
                </g>
              </switch>
              </svg>
            </button>
          </div>
          <Velocity/>
      </div>
      </>
  )
}

export default Tablero