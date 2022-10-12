import React, { useState } from 'react'
import { useEffect } from 'react';
import './Velocity.css'


const Velocity = ({velocidad}) => {
  const [color,setColor] = useState("");

  useEffect(()=>{
    if(velocidad>80){
      setColor("redl");
    }
  },[velocidad])
  return (
    <div className="velocity">
        <h1 className={`velocidad ${color}`}>{velocidad} </h1>
        <h2 className={`letrakm ${color}`}>km/h</h2>
      <div className='intermitentes'>
            {/*svg de luces altas */}
            <svg version="1.1" id="Capa_2" className='altasContenedor'
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 612">
            <switch>
              <g >
                <line className="altas" x1="418.33" y1="158" x2="553" y2="124"/>
                <line className="altas" x1="418.33" y1="248.95" x2="553" y2="214.95"/>
                <line className="altas" x1="418.33" y1="339.9" x2="553" y2="305.9"/>
                <line className="altas" x1="418.33" y1="427.68" x2="553" y2="393.68"/>
                <path className="altas" d="M365,132v345.33c0,0-149.33,35.33-252-62.67S113,204,113,204S181.67,115.33,365,132z"/>
                <line className="altas" x1="306" y1="129.91" x2="306" y2="483.53"/>
              </g>
            </switch>
            </svg>
            {/*svg de luces bajas */}
            <svg version="1.1" id="Capa_2" className='bajasContenedor'
              xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 612 612">
            <switch>
              <g >
                <g>
                  <line className="bajas" x1="418.33" y1="449.54" x2="553" y2="483.54"/>
                  <line className="bajas" x1="418.33" y1="358.59" x2="553" y2="392.59"/>
                  <line className="bajas" x1="418.33" y1="267.64" x2="553" y2="301.64"/>
                  <line className="bajas" x1="418.33" y1="179.85" x2="553" y2="213.85"/>
                  <path className="bajas" d="M365,475.54V130.2c0,0-149.33-35.33-252,62.67s0,210.67,0,210.67S181.67,492.2,365,475.54z"/>
                  <line className="bajas" x1="306" y1="477.62" x2="306" y2="124"/>
                </g>
              </g>
            </switch>
            </svg>
            {/*svg de luces cuartos */}
            <svg version="1.1" id="Capa_2" className='cuartosContenedor'
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 612">
            <switch>
              <g>
                <g>
                  <g>
                    <line className="cuartos" x1="138.9" y1="361.6" x2="65" y2="380.2"/>
                    <line className="cuartos" x1="140.1" y1="310.9" x2="63.9" y2="310.8"/>
                    <line className="cuartos" x1="65" y1="239.1" x2="138.9" y2="257.7"/>
                  </g>
                  <path className="cuartos" d="M164,388.4V227.2c0,0,69.7-16.5,117.6,29.3s0,98.3,0,98.3S249.6,396.2,164,388.4z"/>
                </g>
                <g>
                  <g>
                    <line className="cuartos" x1="473.1" y1="361.8" x2="547" y2="380.5"/>
                    <line className="cuartos" x1="471.9" y1="311.1" x2="548.1" y2="311"/>
                    <line className="cuartos" x1="547" y1="239.3" x2="473.1" y2="258"/>
                  </g>
                  <path className="cuartos" d="M448,388.7V227.5c0,0-69.7-16.5-117.6,29.3s0,98.3,0,98.3S362.4,396.5,448,388.7z"/>
                </g>
              </g>
            </switch>
            </svg>
          </div>
    </div>
  )
}

export default Velocity