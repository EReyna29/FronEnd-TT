import React from 'react'
import './Batery.css';
import { useVars } from "../Context/VarsContext";

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PercentIcon from '@mui/icons-material/Percent';
import { useState } from 'react';
import { useEffect } from 'react';

const Batery = ({charge}) => {
  const niveles=[90,80,70,60,50,40,30,20,10,0];
  const {vars} = useVars();
  const [color,setColor]=useState();

  useEffect(()=>{
    if(charge>90){
      setColor("green");
    }
    else if(charge>70){
      setColor("yellow");
    }
    else if (charge>50){
      setColor("orange");
    }
    else{
      setColor("red");
    }
  },[charge])

  const bateriaCargando = () => {
    return (
        niveles.map((data,key)=> charge > data ?
        <div key={key} className='rectangleActiveCharge'>
        </div>
        :
        <div key={key} className='rectangleHidden'>
        </div>
        )
    )
  }

  const bateriaNormal= () =>{
    return(
      niveles.map((data,key)=> charge > data?
        <div key={key} className={`rectangleActive ${color}`}>
        </div>
        :
        <div key={key} className='rectangleHidden'>
        </div>
        )
    )
  }
  return (
    <div className="batery">
      {vars.bateria===false? bateriaNormal(): bateriaCargando()
      }

      <div className='porcentaje'>
        <h2>{charge}</h2>
        <PercentIcon sx={{fontSize:"2rem"}}/>
        <ElectricBoltIcon sx={{fontSize:"2rem"}}/>
      </div>
    </div>
  )
}

export default Batery