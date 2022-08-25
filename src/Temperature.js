import React, { useState } from 'react'
import './Temperature.css';

import ThermostatIcon from '@mui/icons-material/Thermostat';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const Temperature = ({degree}) => {
  const niveles=[130,120,110,100,90,80,70,60,50];

  
  
  return (
    <>
        
        {
            niveles.map((data,key)=> degree> data?
            <div key={key} className={key<=3?'rectangleActive':'rectangleActive'}>
              
            </div>
            :
            <div key={key} className='rectangleHidden'>
              
            </div>
            )
        }
        <div className='porcentaje'>
            <h2>{degree}°C</h2>
            
            <ThermostatIcon sx={{fontSize:"2rem"}}/>
        </div>
       

    </>
    
    
  )
}

export default Temperature