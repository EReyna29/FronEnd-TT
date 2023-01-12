import React, { useEffect, useState } from 'react';

import WarningIcon from '@mui/icons-material/WarningRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import './Footer.css'
import { handleAlertaCarga, handleBateria, handleFreno } from '../Services/handleEvents.js';
import { useIndicadores } from '../Context/IndicadoresContext.jsx';
import { registroAlerta } from '../Services/mongo';
import { useVars } from '../Context/VarsContext';
import { ObtenerBateria,bateria,temp } from '../Services/lecturaArchivos'

const alerta={
    id:0,
    nombre:"",
    temperatura:0.0,
    carga:0.0,
    fecha:null,
    descripcion:""
}
const Footer = ({alert,setAlert}) => {
    const {vars}=useVars()
    const {indicadores,setIndicadores}= useIndicadores();
    const [power,setPower]= useState(1);
    const [km]= useState(0);

    useEffect(()=>{

        if(bateria<=50){
            handleAlertaCarga(true)
            //agregarAlertaBancoBateria()
        }
    },[indicadores.carga])
    
    // const agregarAlertaBancoBateria = () =>{
    //     alerta.codigo= "AC" + Date.now().toString();
    //     alerta.nombre="Carga baja"
    //     alerta.descripcion="La carga del banco de baterias bajo a " + bateria + "%";
    //     alerta.temperatura=temp;
    //     alerta.carga=bateria;
    //     alerta.fecha=new Date(Date.now()).toString();
        
    //     registroAlerta(alerta);   
    // }
    const handleAlertaBateria=(bandera)=>{
        handleBateria(bandera)
        setIndicadores({...indicadores,"bateria":!indicadores.bateria});
        // if(bandera)
        //     agregarAlertaBateria()
    }

    // const agregarAlertaBateria = () =>{
    //     alerta.codigo= "AB" + Date.now().toString();
    //     alerta.nombre="Bateria baja"
    //     alerta.descripcion="La bateria auxiliar no tiene la suficiente carga";
    //     alerta.temperatura=temp;
    //     alerta.carga=bateria;
    //     alerta.fecha=new Date(Date.now()).toString();
        
    //     registroAlerta(alerta);   
    // }
    const handleAlertaFreno=(freno)=>{
        handleFreno(freno)
        setIndicadores({...indicadores,"freno":!indicadores.freno});
        // if(freno){
        //     agregarAlertaFreno();
        // }
        
    }

    const agregarAlertaFreno = () =>{
        alerta.codigo= "AF" + Date.now().toString();
        alerta.nombre="Liquido de Freno bajo"
        alerta.descripcion="El líquido de Freno esta por debajo del nivel requerido";
        alerta.temperatura=temp;
        alerta.carga=bateria;
        alerta.fecha=new Date(Date.now()).toString();

        registroAlerta(alerta);
    
    }
    
    
    const handleCharge = ()=>{
        setIndicadores({...indicadores,"cargando":!indicadores.cargando});   
    }

    const handlePowerIcon=()=>{
        const style=document.documentElement.style;
        switch(power){
            case 1: 
                style.setProperty('--colorPower','rgb(6, 246, 6)');
                break;
            case 2: style.setProperty('--colorPower','yellow');    
                break;
            case 3: style.setProperty('--colorPower','red');    
                break;
            default: break;
        }
        
        if(power===3){
            setPower(1);
        }
        else
            setPower(power+1);
    }

    return (
        <div className="footer" >
            <div className="contenedor">
                <div className="iconsWarning">
                    <button className='powerIcon'>
                        <PowerSettingsNewIcon sx={{fontSize:"3rem"}} onClick={()=>handlePowerIcon()}/>
                    </button>
                    
                    <button className='alertCharge' onClick={()=>handleCharge()}>
                        {/**SVG carga*/}
                        <svg version="1.1" className='cargaContenedor'
                                xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 612 612">
                            <switch>
                                <g>
                                    <g id="Capa_2">
                                        {
                                            indicadores.cargando===false?
                                            indicadores.carga===false? 
                                            <>
                                                <path className="carga" d="M123,146.67v-41.33h108.67v41.33c0,0,66-12.67,65.33,53.33l0.01,266.67c0,0-3.34,42-62.67,43.33h-132
                                                    c0,0-40,0.67-42-46.67L63,204.67C63,204.67,55,147.33,123,146.67z"/>
                                                <polyline className="carga" points="213,230.67 150,293.67 209,338 145,402 			"/>
                                                <path className="carga" d="M465.67,316.33v149c0,0,4.67,40.67-40,41.33c0,0-44,0.67-45.33-36.67v-93.33c0,0-7.99-58.67-83.33-42"/>
                                                <line className="carga" x1="440.33" y1="210.33" x2="491.67" y2="210.33"/>
                                                <line className="carga" x1="421.67" y1="163.33" x2="421.67" y2="99.33"/>
                                                <line className="carga" x1="507.67" y1="99.33" x2="507.67" y2="163.33"/>
                                                <path className="carga" d="M471,316.33c73.33-0.33,76.67-71,76.67-71v-74.67H385v72.83c0,0-2.67,71.17,72.67,72.83"/>
                                            </>:<>
                                                <path className="carga" d="M123,146.67v-41.33h108.67v41.33c0,0,66-12.67,65.33,53.33l0.01,266.67c0,0-3.34,42-62.67,43.33h-132
                                                    c0,0-40,0.67-42-46.67L63,204.67C63,204.67,55,147.33,123,146.67z"/>
                                                <polyline className="carga" points="213,230.67 150,293.67 209,338 145,402 			"/>
                                                <path className="carga alertaCarga" d="M465.67,316.33v149c0,0,4.67,40.67-40,41.33c0,0-44,0.67-45.33-36.67v-93.33c0,0-7.99-58.67-83.33-42"/>
                                                <line className="carga alertaCarga" x1="440.33" y1="210.33" x2="491.67" y2="210.33"/>
                                                <line className="carga alertaCarga" x1="421.67" y1="163.33" x2="421.67" y2="99.33"/>
                                                <line className="carga alertaCarga" x1="507.67" y1="99.33" x2="507.67" y2="163.33"/>
                                                <path className="carga alertaCarga" d="M471,316.33c73.33-0.33,76.67-71,76.67-71v-74.67H385v72.83c0,0-2.67,71.17,72.67,72.83"/>
                                            </>:<>
                                                <path className="carga cargando" d="M123,146.67v-41.33h108.67v41.33c0,0,66-12.67,65.33,53.33l0.01,266.67c0,0-3.34,42-62.67,43.33h-132
                                                    c0,0-40,0.67-42-46.67L63,204.67C63,204.67,55,147.33,123,146.67z"/>
                                                <polyline className="carga cargando" points="213,230.67 150,293.67 209,338 145,402 			"/>
                                                <path className="carga cargando" d="M465.67,316.33v149c0,0,4.67,40.67-40,41.33c0,0-44,0.67-45.33-36.67v-93.33c0,0-7.99-58.67-83.33-42"/>
                                                <line className="carga cargando" x1="440.33" y1="210.33" x2="491.67" y2="210.33"/>
                                                <line className="carga cargando" x1="421.67" y1="163.33" x2="421.67" y2="99.33"/>
                                                <line className="carga cargando" x1="507.67" y1="99.33" x2="507.67" y2="163.33"/>
                                                <path className="carga cargando" d="M471,316.33c73.33-0.33,76.67-71,76.67-71v-74.67H385v72.83c0,0-2.67,71.17,72.67,72.83"/>
                                            </>
                                        }
                                    </g>
                                </g>
                            </switch>
                        </svg>
                    </button>

                    {/**SVG bateria*/}
                    <svg version="1.1" id="Capa_2" className='bateriaContenedor' onClick={()=>handleAlertaBateria(!indicadores.bateria)}
                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 612">
                        <switch>
                            <g >
                                <polygon className="bateria" points="410.98,530.81 489.63,530.81 450.31,463.74 410.98,396.67 371.66,463.74 332.33,530.81 		"/>
                                <polyline className="bateria" points="457.95,476.78 477,476.78 477,251.33 501.67,251.33 501.67,196.67 107.67,196.67 107.67,249.33 
                                    135,249.33 135,476.78 364.02,476.78 		"/>
                                <polyline className="bateria" points="251,196.67 263,171.33 351,171.33 362.33,196.67 		"/>
                                <g>
                                    <rect x="149.67" y="166.67" className="st0" width="69.33" height="30"/>
                                    <rect x="166.33" y="134" className="st0" width="39.33" height="32.67"/>
                                </g>
                                <g>
                                    <rect x="391.67" y="166.67" className="st0" width="69.33" height="30"/>
                                    <rect x="408.33" y="134" className="st0" width="39.33" height="32.67"/>
                                </g>
                                <line className="bateria" x1="171.67" y1="287.33" x2="199" y2="287.33"/>
                                <line className="bateria" x1="414.33" y1="287.33" x2="441.67" y2="287.33"/>
                                <line className="bateria" x1="428" y1="301" x2="428" y2="273.67"/>
                                <polygon className="bateria" points="318.33,295.33 239,374.67 293.67,374.67 293.67,432.67 371,355.33 318.33,355.33 		"/>
                                <line className="bateria" x1="136" y1="250.33" x2="478" y2="250.33"/>
                                <g>
                                    <path className="bateria" d="M407.18,484.37c-0.27-0.46-0.85-1.88-1.76-4.25c-3.03-7.95-4.55-14-4.55-18.16c0-3.83,0.83-6.55,2.49-8.17
                                        s4.4-2.42,8.23-2.42c6.4,0,9.6,3.7,9.6,11.09c0,2.13-1.58,8.01-4.75,17.66c-0.82,2.48-1.38,3.97-1.69,4.48
                                        c-0.86,1.37-2.18,2.06-3.95,2.06C409.31,486.66,408.11,485.9,407.18,484.37z M406.15,502.45c1.39,1.36,3.05,2.04,4.98,2.04
                                        s3.59-0.68,4.98-2.04s2.09-3,2.09-4.93s-0.7-3.57-2.09-4.93s-3.05-2.04-4.98-2.04s-3.59,0.68-4.98,2.04s-2.09,3-2.09,4.93
                                        S404.75,501.09,406.15,502.45z"/>
                                </g>
                            </g>
                        </switch>
                    </svg>


                    {/**SVG liquido de frenos*/}
                    <svg version="1.1" className='frenoContenedor' onClick={()=>handleAlertaFreno(!indicadores.freno)}
                    xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 612 612" >
                    <g id="Capa_3">
                        <path className="freno0" d="M147,282.7c0,0,13.3-5.3,28,12l16,21.3c0,0,17.3,22,32.7-2.7l16.7-21.3c0,0,15.3-23.3,34,1.3l16.7,23.3
                            c0,0,15.3,24,36,0l18-26.7c0,0,17.3-17.3,32.7,0l16.7,25.3c0,0,20,20.7,40-0.7l15.3-24c0,0,15.3-12.2,21.3-8.8
                            s-0.7,183.4-162,180.8C309,462.7,152.3,466,147,282.7z"/>
                    </g>
                    <g id="Capa_2">
                        <ellipse className="freno1" cx="309" cy="303.5" rx="169" ry="166.5"/>
                        <path className="freno2" d="M111,173.3c0,0-88.7,122,0,266.7"/>
                        <path className="freno2" d="M502.9,172.7c0,0,88.7,122,0,266.7"/>
                    </g>
                    </svg>

                </div>
                
                <h2 className='km'>TRIP {km} </h2>
                <button className='alert' onClick={()=>setAlert(!alert)} disabled={!indicadores.home}>
                    {alert===false? <WarningIcon sx={indicadores.home===false? {fontSize:"3rem"}:{fontSize:"3rem",color:"orange"}} />
                    :<HomeRoundedIcon sx={{fontSize:"3rem", color:"orange"}} />
                    }
                </button>
            </div>
        </div>
    )
}

export default Footer