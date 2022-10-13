

export const handleAltas=(lucesAltas)=>{
    const style=document.documentElement.style;
    if(lucesAltas===false)
    style.setProperty('--lucesAltas','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--lucesAltas','rgb(0, 112, 250)');
}

export const handleBajas=(lucesBajas)=>{
    const style=document.documentElement.style;
    if(lucesBajas===false)
    style.setProperty('--lucesBajas','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--lucesBajas','green');

}

export const handleCuartos=(lucesCuartos)=>{
    const style=document.documentElement.style;
    if(lucesCuartos===false)
    style.setProperty('--lucesCuartos','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--lucesCuartos','green');
}

export const handleAlertaCarga=(carga)=>{
    const style=document.documentElement.style;
    if(carga===false)
    style.setProperty('--alertaCarga','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--alertaCarga','red');
}

export const handleBateria=(bateria)=>{
    const style=document.documentElement.style;
    if(bateria===false)
    style.setProperty('--alertaBateria','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--alertaBateria','red');
}

export const handleFreno=(freno)=>{
    const style=document.documentElement.style;
    if(freno===false)
    style.setProperty('--alertaFreno','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--alertaFreno','red');
}

export const handleFrenoMano=(frenoMano)=>{
    const style=document.documentElement.style;
    if(frenoMano===false)
    style.setProperty('--alertaFrenoMano','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--alertaFrenoMano','red');
}

export const handleCajuela=(cajuela)=>{
    const style=document.documentElement.style;
    if(cajuela===false)
    style.setProperty('--alertaCajuela','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--alertaCajuela','red');
}

export const handleCofre=(cofre)=>{
    const style=document.documentElement.style;
    if(cofre===false)
    style.setProperty('--alertaCofre','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--alertaCofre','red');
}

export const handlePuertaDelanteraIzquierda=(puerta)=>{
    const style=document.documentElement.style;
    if(puerta===false)
    style.setProperty('--alertaPDIzquierda','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--alertaPDIzquierda','red');
}

export const handlePuertaDelanteraDerecha=(puerta)=>{
    const style=document.documentElement.style;
    if(puerta===false)
    style.setProperty('--alertaPDDerecha','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--alertaPDDerecha','red');
}

export const handlePuertaTraseraIzquierda=(puerta)=>{
    const style=document.documentElement.style;
    if(puerta===false)
    style.setProperty('--alertaPTIzquierda','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--alertaPTIzquierda','red');
}

export const handlePuertaTraseraDerecha=(puerta)=>{
    const style=document.documentElement.style;
    if(puerta===false)
    style.setProperty('--alertaPTDerecha','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--alertaPTDerecha','red');
}

export const handleCinturon=(cinturon)=>{
    const style=document.documentElement.style;
    if(cinturon===false)
    style.setProperty('--alertaCinturon','rgba(140, 140, 140, 0.353)');
    else
    style.setProperty('--alertaCinturon','red');
}
