import { createContext, useEffect, useState, useContext } from "react";


const VarsContext= createContext();



const initialState = JSON.parse(localStorage.getItem("vars") || '{"carga":false,"bateria":false,"temperatura":false,"freno":false,"home":false}');


export const VarsProvider = ({children}) => {
    const [vars, setVars] = useState(initialState);

    useEffect(() =>{
        localStorage.setItem("vars",JSON.stringify(vars));

    },[vars]);

    return(
        <VarsContext.Provider value={{vars, setVars}}>
            {children}
        </VarsContext.Provider>
    );
};

export const useVars = () => useContext(VarsContext);