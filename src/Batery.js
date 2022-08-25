import React from 'react'
import './Batery.css';
import { useVars } from "./VarsContext";

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PercentIcon from '@mui/icons-material/Percent';

const Batery = ({charge}) => {
    const niveles=[90,80,70,60,50,40,30,20,10,0];
    const {vars} = useVars();
   
  return (
    <>
        {vars.bateria===false?
            niveles.map((data,key)=> charge > data ?
            <div key={key} className='rectangleActive'>
            </div>
            :
            <div key={key} className='rectangleHidden'>
            </div>
            ):
            niveles.map((data,key)=> charge > data?
            <div key={key} className='rectangleActiveCharge'>
            </div>
            :
            <div key={key} className='rectangleHidden'>
            </div>
            )
        }

        <div className='porcentaje'>
            <h2>{charge}</h2>
            <PercentIcon sx={{fontSize:"2rem"}}/>
            <ElectricBoltIcon sx={{fontSize:"2rem"}}/>
        </div>
       

    </>
    
  )
}

export default Batery