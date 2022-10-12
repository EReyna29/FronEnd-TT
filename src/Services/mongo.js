export const getAlerts = async () =>{
    
    try{
        const alertas = await fetch('http://localhost:3001/api/alertas')
        .then(response => response.json())

        return alertas;
    }catch(error){
        console.error(error);
    }

}

export const getNotifications = async () =>{
    
    try{
        const notificaciones = await fetch('http://localhost:3001/api/notificaciones')
        .then(response => response.json());

        return notificaciones;
    }catch(error){
        console.error(error);
    }

}
export const registroAlerta = async(alerta) =>{
    
    try{
        console.log(alerta);
        console.log(JSON.stringify(alerta))
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
    try{
        await fetch('http://localhost:3001/api/notificaciones',{
            method: 'POST',
            body: JSON.stringify({
                codigo: notificacion.codigo,
                nombre: notificacion.nombre,
                descripcion: notificacion.descripcion,
                carga: notificacion.carga,
                palanca: "N",
                temperatura: notificacion.temperatura,
                velocidad: notificacion.velocidad
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
      .then(response => response.json())
    }catch(error){
    }
}