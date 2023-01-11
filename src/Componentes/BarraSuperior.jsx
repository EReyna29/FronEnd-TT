import React, { useEffect, useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ContrastIcon from '@mui/icons-material/Contrast';
import Temperature from '../Componentes/Temperature';
import { ObtenerIntermitentes, inter } from '../Services/lecturaArchivos'

import './BarraSuperior.css'

const BarraSuperior = ({degree}) => {
    const [derecho,setDerecho]=useState(false);
    const [izquierdo,setIzquierdo]=useState(false);
    const [intermitentes,setIntermitentes]=useState(false);
    const [numeroTema,setNumeroTema]=useState(1);

    useEffect(()=>{
        let interval = null;
        interval = setInterval(async() => {

            const res =await ObtenerIntermitentes()
            if(res.Intermitentes !== intermitentes)
                handleIntermitentes()
            if(res.DireccionalDer !== derecho)
                handleIzquierdo()
            if(res.DireccionalIzq !== izquierdo)
                handleDerecho()
            
        },200);
    
        return () => {
        clearInterval(interval);
        };
    })
    
    //Acción del botón Intermitente izquierdo
    const handleIzquierdo = () =>{
        if(intermitentes===false){
            const left= document.getElementById("left");
            setIzquierdo(!izquierdo);
            if(izquierdo===false){
                left.className="izquierdo intermitentesParpadear";
            }
            else{
                left.className="izquierdo";
            }
        }
        
    }

    //Acción del botón Intermitentes
    const handleIntermitentes = () =>{
        const left= document.getElementById("left");
        const right= document.getElementById("right");
        setIntermitentes(!intermitentes);
        
        if(intermitentes===false){
            left.className="izquierdo intermitentesParpadear";
            right.className="derecho intermitentesParpadear";
        }
        else{
            left.className="izquierdo";
            right.className="derecho";
        }
    }
    
    //Acción del botón Intermitente derecho
    const handleDerecho = () =>{
        if(intermitentes===false){
            const right= document.getElementById("right");
            setDerecho(!derecho);
            if(derecho===false ){
                right.className="derecho intermitentesParpadear";
            }
            else{
                right.className="derecho";
            }
        }
        
    }

     //Asigna el tema del tablero
    useEffect(()=>{
        if(numeroTema===6){
            setNumeroTema(1);
        }
        handleSwitchTheme(numeroTema);
    },[numeroTema])

      //Acción del botón del tema
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
        <div className='bar'>
            <button id='left' className='izquierdo' onClick={()=>handleIzquierdo()}>
                    <ChevronLeftIcon 
                    sx={izquierdo===false? 
                        {fontSize:"4rem"}:
                        {fontSize:"4rem",color:"rgb(0, 210, 0)"}
                        }
                    />
            </button>
            <Temperature degree={degree} />
            <button id='right' className='derecho' onClick={()=>handleDerecho()}>
                    <ChevronRightIcon 
                    sx={derecho===false? 
                        {fontSize:"4rem"}:
                        {fontSize:"4rem",color:"rgb(0, 210, 0)"}
                        }
                    />
            </button>
            <button className='theme' onClick={()=>setNumeroTema(numeroTema+1)}>
                <ContrastIcon sx={{fontSize:"3.5rem"}}  />
            </button>
        </div>
    )
}

export default BarraSuperior