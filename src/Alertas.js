

import React,{useCallback, useEffect, useState} from 'react'
import './Alertas.css'

import {getAlertas,getNotificaciones} from  './firebase';

const Alertas = () => {
    const [alertas, setAlertas] = useState([])
    const [notificaciones,setNotificaciones] = useState([])
    const [handle,setHandle]=useState(true);
    

    const obtenerDatos = useCallback( async () => {
        if(handle===true){
            const alerts = await getAlertas();
            setAlertas(alerts);
        }
        else{
            const notf = await getNotificaciones();
            setNotificaciones(notf);
        }
        
        

    },[handle])

    useEffect(() => {
        obtenerDatos(); 
        
    },[handle])
    
  return (
    <>
    <div className='mainAlertas'>
        {handle ?<h1 className='titulo'>Alertas</h1>:<h1 className='titulo'>Notificaciones</h1>}
        <div className='Menu'>
            <button className='ItemAlert' onClick={()=>setHandle(true)} 
            style={handle? { "border": ".1rem solid rgba(255, 183, 0, 0.779)",
            "backgroundColor": "rgba(255, 183, 0, 0.779)"}:{}} >Alertas</button>
            <button className='ItemNot' onClick={()=>setHandle(false)}
            style={!handle? { "border": ".1rem solid rgba(255, 183, 0, 0.779)",
            "backgroundColor": "rgba(255, 183, 0, 0.779)"}:{}} >Notificaciones</button>
        </div>
        

        <table className='tabla'>
                {handle 
                ?
                <thead className='tabla-head'> 
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Temp </th>
                        <th>Bateria</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                :
                <thead className='tabla-head'> 
                    <tr>
                        <th>Código</th>
                        <th>Descripcion</th>
                        <th>palanca</th>
                        <th>Velocidad</th>
                        <th>Temp</th>
                        <th>Bateria</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                }
                
                
            
            <tbody className='tabla-body'>
            {handle ?
                alertas.map( (alert,key) => key%2===0?
                    <tr key={key} className='tabla-fila'>
                        <td className='tabla-celda'>{alert.id}</td>
                        <td className='tabla-celda'>{alert.nombre}</td>
                        <td className='tabla-celda'>{alert.desc}</td>
                        <td className='tabla-celda'>{alert.temp}°C</td>
                        <td className='tabla-celda'>{alert.carga}%</td>
                        <td className='tabla-celda'>{alert.fecha.toDate().toString().substring(0,25)}</td>
                    </tr>:
                    <tr key={key} className='tabla-fila-claro'>
                        <td className='tabla-celda'>{alert.id}</td>
                        <td className='tabla-celda'>{alert.nombre}</td>
                        <td className='tabla-celda'>{alert.desc}</td>
                        <td className='tabla-celda'>{alert.temp}°C</td>
                        <td className='tabla-celda'>{alert.carga}%</td>
                        <td className='tabla-celda'>{alert.fecha.toDate().toString().substring(0,25)}</td>
                    </tr>
                    
                )  
                :
                notificaciones.map( (notificacion,key) => key%2===0?
                    <tr key={key} className='tabla-fila'>
                        <td className='tabla-celda'>{notificacion.codigo}</td>
                        <td className='tabla-celda'>{notificacion.desc}</td>
                        <td className='tabla-celda'>{notificacion.palanca}</td>
                        <td className='tabla-celda'>{notificacion.velocidad}</td>
                        <td className='tabla-celda'>{notificacion.temp}°C</td>
                        <td className='tabla-celda'>{notificacion.carga}%</td>
                        <td className='tabla-celda'>{notificacion.fecha.toDate().toString().substring(0,25)}</td>
                    </tr>:
                    <tr key={key} className='tabla-fila-claro'>
                        <td className='tabla-celda'>{notificacion.codigo}</td>
                        <td className='tabla-celda'>{notificacion.desc}</td>
                        <td className='tabla-celda'>{notificacion.palanca}</td>
                        <td className='tabla-celda'>{notificacion.velocidad}</td>
                        <td className='tabla-celda'>{notificacion.temp}°C</td>
                        <td className='tabla-celda'>{notificacion.carga}%</td>
                        <td className='tabla-celda'>{notificacion.fecha.toDate().toString().substring(0,25)}</td>
                    </tr>

                )            
            }
                    
            </tbody>
        </table>
        

        </div>
    
    </>
  )
}

export default Alertas