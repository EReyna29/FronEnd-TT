import React, { useEffect,useState } from 'react'
import './Temperature.css';

import ThermostatIcon from '@mui/icons-material/Thermostat';
import { useVars } from '../Context/VarsContext';
import { registroAlerta } from '../Services/mongo';
import { useIndicadores } from '../Context/IndicadoresContext';
import { ObtenerTemperatura,temp,bateria } from '../Services/lecturaArchivos'

const alerta={
    id:0,
    nombre:"",
    temperatura:0.0,
    carga:0.0,
    fecha:null,
    descripcion:""
  }
const Temperature = () => {
    const {vars,setVars}=useVars();
    const [degree, setDegree] = useState(temp);
    const {indicadores,setIndicadores} = useIndicadores();

    const handleAlertaCarga=()=>{
        if(degree!==null && degree!==undefined){
            const style=document.documentElement.style;
            console.log("HandleAlerta temp:"+ degree)
            if(parseInt(degree)<75)
            style.setProperty('--alertaTemperatura','rgba(140, 140, 140, 0.353)');
            else{
                style.setProperty('--alertaTemperatura','red');
                setIndicadores({...indicadores,"temperatura":true})
                agregarAlerta();
            }
        }
        
    }
    useEffect(()=>{
        console.log("trayendo temperatura")
        let interval = null;
        interval = setInterval(async() => {
            await ObtenerTemperatura()
            if(temp!==degree){
                
                console.log(temp);
                
                setDegree(temp)
                setVars({...vars,"temperatura":temp})
            }
        
        },1000);
        
        return () => {
            clearInterval(interval);
        };
    },[])

    useEffect(()=>{
        handleAlertaCarga(degree)
    },[degree])
    
    const agregarAlerta = () =>{
        alerta.codigo= "AT" + Date.now().toString();
        alerta.nombre="Temperatura alta"
        alerta.descripcion="La temperatura del motor se elevo a " + degree + "°C";
        alerta.temperatura=degree;
        alerta.carga=bateria;
        alerta.fecha=new Date(Date.now()).toString();
        
        registroAlerta(alerta);   
    }

    return (
    <>
        <div className="temperatura">
        <svg version="1.1" id="Capa_2" className='temperaturaContenedor'
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 612">
                <switch>
                    <g>
                        <g>
                            <path className="temperatura0" d="M215.83,198.49h165.33c0,0,16-2,16,14.67c0,0-0.67,17-17,17H215.83c0,0-15.94-0.87-15.94-15.94
                                C199.9,214.22,197.83,198.49,215.83,198.49z"/>
                            <path className="temperatura0" d="M97.17,316.74v143.83c0,0,2,13.92-14.67,13.92c0,0-17-0.58-17-14.79V316.74c0,0,0.87-13.86,15.94-13.86
                                C81.44,302.88,97.17,301.08,97.17,316.74z"/>
                            <path className="temperatura0" d="M485.83,359.15h37.33c0,0,23.33,0.67,23.33,23.33v92c0,0-3.33,28.67-18.67,28.67h-42V359.15z"/>
                            <polygon className="temperatura0" points="194.5,302.82 194.5,271.82 386.5,271.82 386.5,317.15 446.5,317.15 446.5,527.82 247.83,527.82 
                                199.83,479.82 141.17,479.82 141.17,302.82 			"/>
                            <line className="temperatura0" x1="97.24" y1="363.82" x2="141.17" y2="363.82"/>
                            <line className="temperatura0" x1="97.24" y1="413.82" x2="141.17" y2="413.82"/>
                            <line className="temperatura0" x1="446.5" y1="388.65" x2="485.83" y2="388.65"/>
                            <line className="temperatura0" x1="446.5" y1="471.82" x2="485.83" y2="471.82"/>
                            <line className="temperatura0" x1="264.5" y1="230.15" x2="264.5" y2="271.82"/>
                            <line className="temperatura0" x1="331.17" y1="230.15" x2="331.17" y2="271.82"/>
                            <g>
                                <path className="temperatura0" d="M227.7,84.18c-2.99,3.75-5.12,7.48-6.59,11.29c-1.47,3.8-2.34,7.61-2.62,11.34c-0.32,3.72-0.02,7.34,0.78,10.65
                                    c0.24,0.82,0.38,1.66,0.71,2.43c0.14,0.39,0.27,0.78,0.4,1.18c0.15,0.38,0.34,0.75,0.5,1.12l0.49,1.13
                                    c0.2,0.38,0.38,0.77,0.61,1.16c0.41,0.78,0.9,1.59,1.4,2.41c2.02,3.3,4.68,6.97,7.08,11.47c1.19,2.25,2.29,4.76,3.04,7.34
                                    c0.77,2.57,1.27,5.25,1.42,7.97c0.15,2.72-0.04,5.48-0.66,8.14c-0.61,2.67-1.65,5.26-3.07,7.51c-1.42,2.26-3.2,4.24-5.27,5.77
                                    c-2.05,1.53-4.39,2.6-6.77,2.96c2.95-3.78,4.29-7.76,4.71-11.58c0.23-1.91,0.15-3.73-0.09-5.51c-0.27-1.79-0.69-3.53-1.28-5.22
                                    c-0.6-1.69-1.31-3.34-2.17-4.92c-0.84-1.61-1.81-3.08-2.9-4.67c-2.21-3.17-5.03-6.6-7.69-10.92c-1.3-2.19-2.61-4.52-3.54-7.26
                                    c-0.23-0.67-0.49-1.33-0.7-2.01c-0.18-0.68-0.35-1.36-0.51-2.05c-0.37-1.36-0.52-2.75-0.69-4.12c-0.58-5.52,0.14-11.01,2-15.96
                                    c1.86-4.95,4.73-9.42,8.44-12.91C218.43,87.48,222.94,84.92,227.7,84.18z"/>
                            </g>
                            <g>
                                <path className="temperatura1" d="M317.62,92.57"/>
                            </g>
                            <g>
                                <path className="temperatura0" d="M301,84.18c-2.99,3.75-5.12,7.48-6.59,11.29c-1.47,3.8-2.34,7.61-2.62,11.34c-0.32,3.72-0.02,7.34,0.78,10.65
                                    c0.24,0.82,0.38,1.66,0.71,2.43c0.14,0.39,0.27,0.78,0.4,1.18c0.15,0.38,0.34,0.75,0.5,1.12l0.49,1.13
                                    c0.2,0.38,0.38,0.77,0.61,1.16c0.41,0.78,0.9,1.59,1.4,2.41c2.02,3.3,4.68,6.97,7.08,11.47c1.19,2.25,2.29,4.76,3.04,7.34
                                    c0.77,2.57,1.27,5.25,1.42,7.97c0.15,2.72-0.04,5.48-0.66,8.14c-0.61,2.67-1.65,5.26-3.07,7.51c-1.42,2.26-3.2,4.24-5.27,5.77
                                    c-2.05,1.53-4.39,2.6-6.77,2.96c2.95-3.78,4.29-7.76,4.71-11.58c0.23-1.91,0.15-3.73-0.09-5.51c-0.27-1.79-0.69-3.53-1.28-5.22
                                    c-0.6-1.69-1.31-3.34-2.17-4.92c-0.84-1.61-1.81-3.08-2.9-4.67c-2.21-3.17-5.03-6.6-7.69-10.92c-1.3-2.19-2.61-4.52-3.54-7.26
                                    c-0.23-0.67-0.49-1.33-0.7-2.01c-0.18-0.68-0.35-1.36-0.51-2.05c-0.37-1.36-0.52-2.75-0.69-4.12c-0.58-5.52,0.14-11.01,2-15.96
                                    c1.86-4.95,4.73-9.42,8.44-12.91C291.74,87.48,296.25,84.92,301,84.18z"/>
                            </g>
                            <g>
                                <path className="temperatura0" d="M374.9,84.18c-2.99,3.75-5.12,7.48-6.59,11.29c-1.47,3.8-2.34,7.61-2.62,11.34c-0.32,3.72-0.02,7.34,0.78,10.65
                                    c0.23,0.82,0.38,1.66,0.7,2.43c0.14,0.39,0.27,0.78,0.4,1.18c0.15,0.38,0.34,0.75,0.5,1.12l0.49,1.13
                                    c0.2,0.38,0.38,0.77,0.61,1.16c0.41,0.78,0.9,1.59,1.4,2.41c2.02,3.3,4.68,6.97,7.08,11.47c1.19,2.25,2.29,4.76,3.04,7.34
                                    c0.77,2.57,1.27,5.25,1.42,7.97c0.15,2.72-0.04,5.48-0.66,8.14c-0.61,2.67-1.65,5.26-3.07,7.51c-1.42,2.26-3.2,4.24-5.27,5.77
                                    c-2.05,1.53-4.39,2.6-6.77,2.96c2.95-3.78,4.29-7.76,4.71-11.58c0.23-1.91,0.15-3.73-0.09-5.51c-0.27-1.79-0.69-3.53-1.28-5.22
                                    c-0.6-1.69-1.31-3.34-2.17-4.92c-0.84-1.61-1.81-3.08-2.9-4.67c-2.21-3.17-5.03-6.6-7.69-10.92c-1.3-2.19-2.61-4.52-3.54-7.26
                                    c-0.23-0.67-0.49-1.33-0.7-2.01c-0.18-0.68-0.35-1.36-0.51-2.05c-0.37-1.36-0.52-2.75-0.69-4.12c-0.58-5.52,0.14-11.01,2-15.96
                                    c1.86-4.95,4.73-9.42,8.44-12.91C365.64,87.48,370.14,84.92,374.9,84.18z"/>
                            </g>
                        </g>
                    </g>
                </switch>
        </svg>
        <div className='porcentaje'>
            <h2>{degree}°C</h2>
            <ThermostatIcon sx={{fontSize:"2rem"}}/>
        </div>
        </div>
    </>
    
    
  )
}

export default Temperature