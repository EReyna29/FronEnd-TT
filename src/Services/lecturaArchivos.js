export let vel;
export let temp;
export let bateria;
export let pal;
export let tablero;
export let luces;
export let inter;



export const ObtenerVelocidad= async ()=>{
    
    await fetch('velocidad.txt')
    .then(res => res.text())
    .then(content => {
        vel = content
    });
    //console.log(vel);
        
    return vel;
    
}


export const ObtenerTemperatura= async ()=>{
    //const controller = new AbortController()
    await fetch('temperatura.txt')
    .then(res => res.text())
    .then(content => {
        temp = content
    });
    //console.log(temp);
    return temp;
}

export const ObtenerBateria= async ()=>{
    //const controller = new AbortController()
    await fetch('bateria.txt')
    .then(res => res.text())
    .then(content => {
        bateria = content
    });
    //console.log(bateria);
    return bateria;
}

export const ObtenerPalanca= async ()=>{
    //const controller = new AbortController()
    await fetch('palanca.txt')
    .then(res => res.text())
    .then(content => {
        pal = content
    });
    //console.log(pal);
    return pal;
}

export const ObtenerTablero = async ()=>{
    //const controller = new AbortController()
    await fetch('tablero.json')
    .then(res => res.json())
    .then(content => {
        tablero = content
    });
    //console.log(tablero);
    return tablero;
}

export const ObtenerIntermitentes = async ()=>{
    //const controller = new AbortController()
    await fetch('intermitentes.json')
    .then(res => res.json())
    .then(content => {
        inter = content
    });
    //console.log(inter);
    return inter;
}

export const ObtenerLuces = async ()=>{
    //const controller = new AbortController()
    await fetch('luces.json')
    .then(res => res.json())
    .then(content => {
        luces = content
    });
    //console.log(luces);
    return luces;
}