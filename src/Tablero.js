import React, { useCallback } from 'react'
import {useState,useEffect} from 'react'
import { useVars } from "./VarsContext";


import './App.css';
import Batery from './Batery.js'
import Temperature from './Temperature.js'
import Velocity from './Velocity.js'
import {registroAlerta} from  './firebase';

import ContrastIcon from '@mui/icons-material/Contrast';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Timestamp } from 'firebase/firestore';


const position = ["P","D","N","R"];

const alerta={
  id:0,
  nombre:"",
  temp:0.0,
  carga:0.0,
  alarma:false,
  fecha:null,
  desc:""
}



const Tablero = () => {
    
    const {vars,setVars} = useVars();
    const [charge, setCharge] = useState();
    const [degree, setDegree] = useState();
    const [velocidad, setVelocidad] = useState();
    const [palanca,setPalanca]=useState();
    const [freno,setFreno]=useState(true);
    const [derecho,setDerecho]=useState(false);
    const [izquierdo,setIzquierdo]=useState(false);
    const [numeroTema,setNumeroTema]=useState(1);

    const getRandomArbitrary=(min, max)=> {
      return Math.random() * (max - min) + min;
    }

    const addEvent =useCallback( async () =>{
      if(vars.temperatura===true){
        alerta.id= "AT" + Date.now().toString();
        alerta.nombre="Temperatura alta"
        alerta.desc="La temperatura del motor se elevo a " + degree + "°C";
        alerta.temp=degree;
        alerta.carga=charge;
        alerta.fecha=Timestamp.now();

      }
      else if(vars.carga===true){
        alerta.id= "CT" + Date.now().toString();
        alerta.nombre="Bateria baja"
        alerta.desc="La carga del banco de baterias bajo a " + charge + "%";
        alerta.temp=degree;
        alerta.carga=charge;
        alerta.fecha=Timestamp.now();

      }
      await registroAlerta(alerta)

  },[charge,degree,vars.temperatura,vars.carga])

    useEffect(() => {
      setCharge(Math.round(getRandomArbitrary(0,100)));
      setDegree(Math.round(getRandomArbitrary(80,130)));
      setVelocidad(Math.round(getRandomArbitrary(40,80)));
      setPalanca(position[Math.round(getRandomArbitrary(1,3))]);


    }, [])

    useEffect(() => {
      let vars,carga=false,temp=false,pal=false;
      if(charge<=50)
        carga=true;
      if(degree>=120)
        temp=true;
      if(palanca==="P")
        pal=true;

      vars={"carga":carga,"bateria":false,"temperatura":temp,"freno":freno,"home":pal};

      setVars(vars); 
      
      if(carga || temp){
        addEvent();
      }

      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setVars,charge,degree,velocidad,palanca,freno])

    useEffect(()=>{
      if(numeroTema===6){
        setNumeroTema(1);
      }
      handleSwitchTheme(numeroTema);
    },[numeroTema])

    const handleIzquierdo = () =>{
      const left= document.getElementById("left");
      setIzquierdo(!izquierdo);
      if(izquierdo===false){
        left.className="alert intermitentesParpadear";
      }
      else{
        left.className="alert";
      }
      
    }
    

    const handleDerecho = () =>{
      const right= document.getElementById("right");
      setDerecho(!derecho);
      if(derecho===false){
        right.className="derecho intermitentesParpadear";
      }
      else{
        right.className="derecho";
      }
      
    }

    const handleSwitchTheme = () =>{
      const style=document.documentElement.style;
      switch(numeroTema){
        case 1: 
                style.setProperty('--color','rgb(6, 246, 6)');
                style.setProperty('--colorHidden','rgba(0, 96, 0, 0.562)');
                style.setProperty('--backgroundColor','rgb(6, 246, 6)');
                style.setProperty('--backgroundColorHidden','rgba(0, 96, 0, 0.562)');
                style.setProperty('--backgroundColorCharge','orange');
                style.setProperty('--colorTema','rgb(255, 166, 0)');
                break;

        case 2: style.setProperty('--color','rgb(255, 166, 0)');
                style.setProperty('--colorHidden','rgba(144, 94, 0, 0.705)');
                style.setProperty('--backgroundColor','rgb(255, 166, 0)');
                style.setProperty('--backgroundColorHidden','rgba(144, 94, 0, 0.705)');
                style.setProperty('--backgroundColorCharge','orange');
                style.setProperty('--colorTema','rgb(0, 40, 200)');
                break;
        case 3: style.setProperty('--color','rgb(0, 40, 200)');
                style.setProperty('--colorHidden','rgba(0, 33, 165, 0.8)');
                style.setProperty('--backgroundColor','rgb(0, 40, 200)');
                style.setProperty('--backgroundColorHidden','rgba(0, 33, 165, 0.8)');
                style.setProperty('--backgroundColorCharge','orange');
                style.setProperty('--colorTema','rgb(255, 255, 0)');
                break;
              
        case 4: style.setProperty('--color','rgb(255, 255, 0)');
                style.setProperty('--colorHidden','rgba(170, 170, 0, 0.752)');
                style.setProperty('--backgroundColor','rgb(255, 255, 0)');
                style.setProperty('--backgroundColorHidden','rgba(170, 170, 0, 0.752)');
                style.setProperty('--backgroundColorCharge','orange');
                style.setProperty('--colorTema','rgb(187, 109, 255)');
                break;
        case 5: style.setProperty('--color','rgb(187, 109, 255)');
                style.setProperty('--colorHidden','rgba(168, 69, 255, 0.709)');
                style.setProperty('--backgroundColor','rgb(187, 109, 255)');
                style.setProperty('--backgroundColorHidden','rgba(168, 69, 255, 0.709)');
                style.setProperty('--backgroundColorCharge','orange');
                style.setProperty('--colorTema','rgb(6, 246, 6)');
                break;
        
        default: break;
      }
      
      
      
      

    }
    
    
  return (
      <>
      <div className='bar'>
        <button id='left' className='izquierdo' onClick={()=>handleIzquierdo()}>
                <ChevronLeftIcon 
                sx={izquierdo===false? 
                      {fontSize:"4rem"}:
                      {fontSize:"4rem",color:"rgb(0, 210, 0)"}
                    }
                />
        </button>
        
        <button id='right' className='derecho' onClick={()=>handleDerecho()}>
                <ChevronRightIcon 
                sx={derecho===false? 
                      {fontSize:"4rem"}:
                      {fontSize:"4rem",color:"rgb(0, 210, 0)"}
                    }
                />
        </button>
      </div>
      <div className="mainTablero">
      <div className="batery">
          <Batery charge={charge} />
          
      </div>

      <div className="temperature">
        <Temperature degree={degree} />
      </div>

      <div className="signal">
        <img src='./media/cinturon.png' alt='prueba' className='cinturon'></img>
        <img src='./media/puertas.png' alt='prueba' className='imagen'></img>
        <img src='./media/cajuela.png' alt='prueba' className='imagen'></img>

        
        <button className="palanca" onClick={()=>setPalanca("P")}>
          <h1>{palanca}</h1>
        </button>
        <button className='alert' onClick={()=>setFreno(!freno)}>
          <ErrorOutlineIcon sx={freno===true? {fontSize:"4rem"}:{fontSize:"4rem",color:"rgb(222, 0, 0)"}}/>
        </button>

      </div>
      
        <div className="velocity">
          <Velocity velocidad={velocidad}/>
          <button className='theme' onClick={()=>setNumeroTema(numeroTema+1)}>
            <ContrastIcon sx={{fontSize:"3.5rem"}}  />
          </button>
          
          <div className='intermitentes'>
            <img src='./media/lucesAltas.png' alt='prueba' className='imagen'></img>
            <img src='./media/lucesBajas.png' alt='prueba' className='imagen'></img>
          </div>
        </div>

      </div>
      
      </>
    
  )
}

export default Tablero