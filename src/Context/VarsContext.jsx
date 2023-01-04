import { createContext, useState, useContext, useEffect } from "react";
import { ObtenerVelocidad,ObtenerTemperatura,ObtenerBateria,ObtenerPalanca } from '../Services/lecturaArchivos'


const VarsContext= createContext();


const functionInitial = async ()=>{
    let initialState = {
        carga:Math.round(parseInt(await ObtenerBateria())),
        temperatura:Math.round(parseInt(await ObtenerTemperatura())),
        velocidad:Math.round(parseInt(await ObtenerVelocidad())),
        palanca:await ObtenerPalanca()
    }
    return initialState
}



//const initialState = JSON.parse(localStorage.getItem("vars") || '{"carga":0,"velocidad":0,"temperatura":0,"palanca":"P"}');

export const VarsProvider = ({children}) => {
    const [vars, setVars] = useState(functionInitial);

    useEffect(()=>{
        localStorage.setItem("vars",JSON.stringify(vars));
    },[vars])
    return(
        <VarsContext.Provider value={{vars, setVars}}>
            {children}
        </VarsContext.Provider>
    );
};

export const useVars = () => useContext(VarsContext);