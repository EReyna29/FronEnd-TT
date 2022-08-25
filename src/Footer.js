import React, { useState } from 'react';
import { useVars } from './VarsContext.js';

import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';

import ThermostatIcon from '@mui/icons-material/Thermostat';
import WarningIcon from '@mui/icons-material/WarningRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Footer = ({alert,setAlert}) => {
    const {vars,setVars}= useVars();
    const [power,setPower]= useState(1);
    
    

    const handleCharge = ()=>{
        let obj={"carga":vars.carga,"bateria":!vars.bateria, "temperatura":vars.temperatura,"freno":vars.freno,"home":vars.home};
        setVars(obj);
        

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
            <button className='powerIcon'>
                <PowerSettingsNewIcon sx={{fontSize:"4rem"}} onClick={()=>handlePowerIcon()}/>
            </button>
            
            
            <button className='alert' onClick={()=>handleCharge()}>
                <ElectricalServicesIcon 
                sx={vars.bateria===false?
                    vars.carga===false? 
                        {fontSize:"4rem"}:
                        {fontSize:"4rem",color:"rgb(222, 0, 0)"}:
                    {fontSize:"4rem",color:"rgb(255, 174, 0)"}}
                />
            </button>
            
            <ThermostatIcon className='alert' sx={vars.temperatura===false? {fontSize:"4rem"}:{fontSize:"4rem",color:"rgb(222, 0, 0)"}}/>
            <h2 className='kmtotales'>ODO  </h2>
            <h2 className='km'>TRIP </h2>
            <button className='alert' onClick={()=>setAlert(!alert)} disabled={!vars.home}>
                {alert===false? <WarningIcon sx={vars.home===false? {fontSize:"4rem"}:{fontSize:"4rem",color:"orange"}} />
                :<HomeRoundedIcon sx={{fontSize:"4rem", color:"orange"}} />
                }
            </button>
            </div>
    )
}

export default Footer