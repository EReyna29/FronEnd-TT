export const getAlerts = async () =>{
    
    try{
        const alertas = await fetch('http://localhost:3001/api/alertas')
        .then(response => response.json())
        
        return alertas.reverse();
    }catch(error){
        console.error(error);
    }

}

export const getNotifications = async () =>{
    
    try{
        const notificaciones = await fetch('http://localhost:3001/api/notificaciones')
        .then(response => response.json());

        return notificaciones.reverse();
    }catch(error){
        console.error(error);
    }

}
export const registroAlerta = async(alerta) =>{

    try{
        await fetch('http://localhost:3001/api/alertas',{
            method: 'POST',
            body: JSON.stringify({
                codigo: alerta.codigo,
                nombre: alerta.nombre,
                descripcion: alerta.descripcion,
                fecha: alerta.fecha,
                carga: alerta.carga,
                temperatura: alerta.temperatura,
                velocidad:alerta.velocidad
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
    }catch(error){
    }
}

export const registroNotificacion = async (notificacion) =>{
    console.log(notificacion)
    try{
        await fetch('http://localhost:3001/api/notificaciones',{
            method: 'POST',
            body: JSON.stringify({
                codigo: notificacion.codigo,
                descripcion: notificacion.descripcion,
                carga: notificacion.carga,
                palanca: notificacion.palanca,
                temperatura: notificacion.temperatura,
                fecha:notificacion.fecha
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
      .then(response => response.json())
    }catch(error){
    }
}