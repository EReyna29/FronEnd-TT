import React, { useEffect, useMemo, useState } from 'react'
import { useIndicadores } from '../Context/IndicadoresContext';
import { useVars } from '../Context/VarsContext';
import { handleCinturon,
    handlePuertaDelanteraIzquierda,
    handlePuertaDelanteraDerecha,
    handlePuertaTraseraIzquierda,
    handlePuertaTraseraDerecha,
    handleCajuela,
    handleCofre } from '../Services/handleEvents';
import { registroNotificacion } from '../Services/mongo';
import './CentroAlertas.css'

import { ObtenerTablero,tablero } from '../Services/lecturaArchivos'


const notificacion={
    codigo:0,
    palanca:"",
    temperatura:0.0,
    carga:0.0,
    fecha:null,
    descripcion:""
}

const initialState = async()=>{
    const res = await ObtenerTablero();
    console.log("InitialState:" +res.Cinturon);
    return res.Cinturon;
     
}

const CentroAlertas = () => {
    const {vars}=useVars();
    const {indicadores,setIndicadores}=useIndicadores();
    const [kmTotales]=useState(0);
    const [cinturon,setCinturon]=useState(false);
    const [puertaDI,setPuertaDI]=useState(false);
    const [puertaDD,setPuertaDD]=useState(false);
    const [puertaTI,setPuertaTI]=useState(false);
    const [puertaTD,setPuertaTD]=useState(false);
    const [cajuela,setCajuela]=useState(false);
    const [cofre,setCofre]=useState(false);

    useEffect(()=>{
        let interval = null;
        interval = setInterval(async() => {

            const res =await ObtenerTablero()
            if(res.Cinturon !== cinturon)
                setCinturon(res.Cinturon)
            if(res.puertaDI !== puertaDI)
                setPuertaDI(res.puertaDI)
            if(res.puertaDD !== puertaDD)
                setPuertaDD(res.puertaDD)
            if(res.puertaTI !== puertaTI)
                setPuertaTI(res.puertaTI)
            if(res.puertaTD !== puertaTD)
                setPuertaTD(res.puertaTD)
            if(res.Cajuela !== cajuela)
                setCajuela(res.Cajuela)
            if(res.Cofre !== cofre)
                setCofre(res.Cofre)
    
        },10);
    
        return () => {
        clearInterval(interval);
        };
    },[])

    useEffect(()=>{
        handleCajuela(cajuela);
        setIndicadores({...indicadores,cajuela:!cajuela});

    },[cajuela])

    useEffect(()=>{
        handleCofre(cofre);
        setIndicadores({...indicadores,cofre:!cofre});

    },[cofre])

    useEffect(()=>{
        handleCinturon(cinturon);
        setIndicadores({...indicadores,cinturon:!cinturon});

    },[cinturon])

    useEffect(()=>{
        handlePuertaDelanteraIzquierda(puertaDI);
        setIndicadores({...indicadores,puertaDI:!puertaDI});

    },[puertaDI])

    useEffect(()=>{
        handlePuertaTraseraIzquierda(puertaTI);
        setIndicadores({...indicadores,puertaTI:!puertaTI});

    },[puertaTI])

    useEffect(()=>{
        handlePuertaDelanteraDerecha(puertaDD);
        setIndicadores({...indicadores,puertaDD:!puertaDD});

    },[puertaDD])

    useEffect(()=>{
        handlePuertaTraseraDerecha(puertaTD);
        setIndicadores({...indicadores,puertaTD:!puertaTD});

    },[puertaTD])


    const handleAlertaCajuela =(isOpen)=>{
        setCajuela(!cajuela);
        // if(isOpen)
        //     agregarNotificacionCajuela()
    }

    // const agregarNotificacionCajuela = () =>{
    //     notificacion.codigo= "NCA" + Date.now().toString();
    //     notificacion.palanca=vars.palanca;
    //     notificacion.descripcion="La cajuela esta abierta";
    //     notificacion.temperatura=vars.temperatura;
    //     notificacion.carga=vars.carga;
    //     notificacion.fecha=new Date(Date.now()).toString();

    //     registroNotificacion(notificacion);
    // }
    const handleAlertaCofre =(isOpen)=>{
        setCofre(!cofre)
        // if(isOpen)
        //     agregarNotificacionCofre()
    }

    // const agregarNotificacionCofre = () =>{
    //     notificacion.codigo= "NCO" + Date.now().toString();
    //     notificacion.palanca=vars.palanca;
    //     notificacion.descripcion="El cofre esta abierto";
    //     notificacion.temperatura=vars.temperatura;
    //     notificacion.carga=vars.carga;
    //     notificacion.fecha=new Date(Date.now()).toString();

    //     registroNotificacion(notificacion);
    // }
    const handleAlertaCinturon =(isOpen)=>{
        setCinturon(!cinturon)
        // if(isOpen)
        //     agregarNotificacionCinturon()
    }

    // const agregarNotificacionCinturon = () =>{
    //     notificacion.codigo= "NCI" + Date.now().toString();
    //     notificacion.palanca=vars.palanca;
    //     notificacion.descripcion="El cinturon esta abierto";
    //     notificacion.temperatura=vars.temperatura;
    //     notificacion.carga=vars.carga;
    //     notificacion.fecha=new Date(Date.now()).toString();

    //     registroNotificacion(notificacion);
    // }

    const handleAlertaPuertaDI =(isOpen)=>{
        setPuertaDI(!puertaDI)
        // if(isOpen)
        //     agregarNotificacionPDI()
    }

    // const agregarNotificacionPDI = () =>{
    //     notificacion.codigo= "NPDI" + Date.now().toString();
    //     notificacion.palanca=vars.palanca;
    //     notificacion.descripcion="Puerta Delantera Piloto abierta";
    //     notificacion.temperatura=vars.temperatura;
    //     notificacion.carga=vars.carga;
    //     notificacion.fecha=new Date(Date.now()).toString();

    //     registroNotificacion(notificacion);
    // }
    const handleAlertaPuertaDD =(isOpen)=>{
        setPuertaDD(!puertaDD)
        // if(isOpen)
        //     agregarNotificacionPDD()
    }

    // const agregarNotificacionPDD = () =>{
    //     notificacion.codigo= "NPDD" + Date.now().toString();
    //     notificacion.palanca=vars.palanca;
    //     notificacion.descripcion="Puerta Delantera Copiloto abierta";
    //     notificacion.temperatura=vars.temperatura;
    //     notificacion.carga=vars.carga;
    //     notificacion.fecha=new Date(Date.now()).toString();

    //     registroNotificacion(notificacion);
    // }

    const handleAlertaPuertaTI =(isOpen)=>{
        setPuertaTI(!puertaTI)
        // if(isOpen)
        //     agregarNotificacionPTI()
    }

    // const agregarNotificacionPTI = () =>{
    //     notificacion.codigo= "NPTI" + Date.now().toString();
    //     notificacion.palanca=vars.palanca;
    //     notificacion.descripcion="Puerta Trasera Piloto abierta";
    //     notificacion.temperatura=vars.temperatura;
    //     notificacion.carga=vars.carga;
    //     notificacion.fecha=new Date(Date.now()).toString();

    //     registroNotificacion(notificacion);
    // }

    const handleAlertaPuertaTD =(isOpen)=>{
        setPuertaTD(!puertaTD)
        // if(isOpen)
        //     agregarNotificacionPTD()
    }

    // const agregarNotificacionPTD = () =>{
    //     notificacion.codigo= "NPTD" + Date.now().toString();
    //     notificacion.palanca=vars.palanca;
    //     notificacion.descripcion="Puerta Trasera Copiloto abierta";
    //     notificacion.temperatura=vars.temperatura;
    //     notificacion.carga=vars.carga;
    //     notificacion.fecha=new Date(Date.now()).toString();

    //     registroNotificacion(notificacion);
    // }

    
    return (
        <div className="squareCentral">
            <div className="squareCentralGrid"> 
            {/* svg de cinturon*/}
            <svg version="1.1" id="Capa_2" className='cinturonContenedor' onClick={()=>handleAlertaCinturon(!indicadores.cinturon)}
            xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 612 612">
            
            <switch>
            <g >
                <circle className="cinturon" cx="306" cy="136.69" r="64.67"/>
                <line className="cinturon" x1="494.33" y1="135.69" x2="260.35" y2="369.68"/>
                <path className="cinturon" d="M541,454c0,0-223.33-198-463.33,0"/>
                <path className="cinturon" d="M265,456.67c0,0,44-57.33,84.67,0v74h70c0,0,62-276.67-113.67-320.67c0,0-159.68-0.82-112.7,320.67h73.53
                L265,456.67z"/>
            </g>
            </switch>
            </svg>
            {/* svg de puertas // Nota: para activar cada puerta tenemos que agregar la clase "activa" */}
            <svg version="1.1" id="Capa_2" className='puertasContenedor'
            xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 612 612"
            >
            <switch>
            <g >
                {/* puerta conductor delantera*/}
                <path className="puertaDI" onClick={()=>handleAlertaPuertaDI(!indicadores.puertaDI)} d="M189,231.33L101.67,282c0,0-11.33,6.67-5.33,15.33c0,0,3.33,10.67,16.67,5.33L189,258"/>
                {/* puerta conductor trasera*/}
                <path className="puertaTI" onClick={()=>handleAlertaPuertaTI(!indicadores.puertaTI)} d="M189,331.75l-87.33,50.67c0,0-11.33,6.67-5.33,15.33c0,0,3.33,10.67,16.67,5.33l76-44.67"/>
                {/* puerta copiloto delantera*/}
                <path className="puertaDD" onClick={()=>handleAlertaPuertaDD(!indicadores.puertaDD)} d="M430.8,235.17l87.33,50.67c0,0,11.33,6.67,5.33,15.33c0,0-3.33,10.67-16.67,5.33l-76-44.67"/>
                {/* puerta copiloto trasera*/}
                <path className="puertaTD" onClick={()=>handleAlertaPuertaTD(!indicadores.puertaTD)}d="M430.8,331.75l87.33,50.67c0,0,11.33,6.67,5.33,15.33c0,0-3.33,10.67-16.67,5.33l-76-44.67"/>
                <g>
                <path className="puertas" d="M294.33,246.67h89.33L400.33,186c0,0-76-42-178.67,0l14,60.67H261"/>
                <path className="puertas" d="M255.67,476.67h108l12.67-37.33c0,0-55.33-29.33-132.67,0L255.67,476.67z"/>
                <path className="puertas" d="M362.33,68v21.33c0,0-5.33,20,14,26c0,0,34.67,10,32.67-30.67"/>
                <path className="puertas" d="M258.65,68v21.33c0,0,5.33,20-14,26c0,0-34.67,10-32.67-30.67"/>
                <path className="puertas" d="M441,484.67c0,0-10,62.67-50.67,64.67H235.61c0,0-57.28-1.33-57.28-76.67l14.67-58V242l-14.67-48.67v-64.67
                    c0,0,6-62.67,96.67-65.33h74c0,0,86.67-3.33,92,64.67v64l-15.33,50.67V412L437,451.48"/>
                </g>
            </g>
            </switch>
            </svg>
            {/* svg de cajuela  
                // Nota: revisar por que no funciona la clase activa
                // Solución: Poner las clases en orden de aparición
                // .cajuela{}
                // .activa{}
            */}
            <svg version="1.1" id="Capa_2" className='cajuelaContenedor' onClick={()=>handleAlertaCajuela(!indicadores.cajuela)}
            xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 612 612">
            <switch>
            <g >
                <path className="cajuela" d="M362.33,202c0,0,42-6,60,30.67L449,278h91.33v72.67c0,0,8.67,47.33-26,48H475"/>
                <line className="cajuela" x1="286.33" y1="402" x2="376.33" y2="402"/>
                <line className="cajuela" x1="256.33" y1="402" x2="226.33" y2="402"/>
                <path className="cajuela" d="M130.33,402H61v-83.33c0,0,7.33-28,40-30.67l79.33-7.33l46-58c0,0,12-20.06,44.67-21.03h60.33"/>
                <line className="cajuela" x1="86.33" y1="380.67" x2="61" y2="380.67"/>
                <g>
                <path className="cajuela" d="M540.33,308.67c0,0-30.67-5.33-30,16c0,0-6.67,23.33,30,16.67"/>
                </g>
                <g>
                <path className="cajuela" d="M62.67,325.9c0,0,30.67-5.33,30,16c0,0,6.67,23.33-30,16.67"/>
                </g>
                <path className="cajuela" d="M412.33,286.67h-192c0,0,22-55.33,55.33-55.33h86.67C362.33,231.33,393.67,222,412.33,286.67z"/>
                <line className="cajuela" x1="316.33" y1="231.33" x2="316.33" y2="286.67"/>
                <circle className="cajuela" cx="180.67" cy="405.43" r="45.67"/>
                <circle className="cajuela" cx="426.71" cy="402" r="45.67"/>
                <path className="cajuela" d="M445.67,264.67l68.67-63.03c0,0,11.33-12.97,20-4.3c0,0,11.33,9.33,0,20.67L477,273.33"/>
                <path className="cajuela" d="M492.52,176.67c0,0-24.88-24.98-74.85,0"/>
                <polyline className="cajuela" points="412.33,154.67 412.33,181.33 435,189.33 		"/>
            </g>
            </switch>
            </svg>
            {/* svg de cofre */}
            <svg version="1.1" id="Capa_2" className='cofreContenedor' onClick={()=>handleAlertaCofre(!indicadores.cofre)}
            xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 612 612"
            >

            <switch>
            <g >
                <path className="cofre" d="M362.33,190c0,0,42-6,60,30.67L449,266h91.33v72.67c0,0,8.67,47.33-26,48H475"/>
                <line className="cofre" x1="286.33" y1="390" x2="376.33" y2="390"/>
                <line className="cofre" x1="256.33" y1="390" x2="226.33" y2="390"/>
                <path className="cofre" d="M130.33,390H61v-83.33c0,0,7.33-28,40-30.67l79.33-7.33l46-58c0,0,12-20.06,44.67-21.03h60.33"/>
                <line className="cofre" x1="86.33" y1="368.67" x2="61" y2="368.67"/>
                <g>
                <path className="cofre" d="M540.33,296.67c0,0-30.67-5.33-30,16c0,0-6.67,23.33,30,16.67"/>
                </g>
                <g>
                <path className="cofre" d="M62.67,313.9c0,0,30.67-5.33,30,16c0,0,6.67,23.33-30,16.67"/>
                </g>
                <path className="cofre" d="M412.33,274.67h-192c0,0,22-55.33,55.33-55.33h86.67C362.33,219.33,393.67,210,412.33,274.67z"/>
                <line className="cofre" x1="316.33" y1="219.33" x2="316.33" y2="274.67"/>
                <circle className="cofre" cx="180.67" cy="393.43" r="45.67"/>
                <circle className="cofre" cx="426.71" cy="390" r="45.67"/>
                {/*Flecha*/}
                <g>
                <path className="cofre" d="M108.28,164.67c0,0,24.87-24.98,74.85,0"/>
                <polyline className="cofre" points="188.46,142.67 188.46,169.33 165.8,177.33 			"/>
                </g>
                <path className="cofre" d="M149.67,267.33c0,0-58.19-53.33-71.76-37.33c0,0-12.9,4-16.9-6.67c0,0-7.33-11.33,7.33-17.33
                c0,0,34.67-10.94,59.33,12.87l59.14,41.64"/>
                <line className="cofre" x1="110.95" y1="237.41" x2="101" y2="276"/>
            </g>
            </switch>
            </svg>
            </div>
            <h2 className='kmtotales'>ODO {kmTotales} </h2>
        </div>
    )
}

export default CentroAlertas