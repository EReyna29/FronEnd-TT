import { createContext, useState, useContext, useEffect } from "react";

const VarsContext= createContext();
const position = ["P","D","N","R"];

const getRandomArbitrary=(min, max)=> {
  return Math.random() * (max - min) + min;
}

const initialState = {
    carga:Math.round(getRandomArbitrary(0,100)),
    temperatura:Math.round(getRandomArbitrary(50,100)),
    velocidad:Math.round(getRandomArbitrary(20,100)),
    palanca:position[Math.round(getRandomArbitrary(1,3))]
}

//const initialState = JSON.parse(localStorage.getItem("vars") || '{"carga":0,"velocidad":0,"temperatura":0,"palanca":"P"}');

export const VarsProvider = ({children}) => {
    const [vars, setVars] = useState(initialState);

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