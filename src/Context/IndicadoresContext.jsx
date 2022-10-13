import { createContext, useEffect, useState, useContext } from "react";


const IndicadoresContext= createContext();



const initialState = JSON.parse(localStorage.getItem("indicadores") || '{"carga":false,"bateria":false,"temperatura":false,"freno":false,"home":false}');


export const IndicadoresProvider = ({children}) => {
    const [indicadores, setIndicadores] = useState(initialState);

    useEffect(() =>{
        localStorage.setItem("indicadores",JSON.stringify(indicadores));

    },[indicadores]);

    return(
        <IndicadoresContext.Provider value={{indicadores, setIndicadores}}>
            {children}
        </IndicadoresContext.Provider>
    );
};

export const useIndicadores = () => useContext(IndicadoresContext);