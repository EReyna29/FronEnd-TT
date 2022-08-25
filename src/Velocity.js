import React from 'react'
import './Velocity.css'


const Velocity = ({velocidad}) => {
  return (
    <>
    <h1 className='velocidad'>{velocidad} </h1>
    <h1>km/h</h1>
    
    </>
  )
}

export default Velocity