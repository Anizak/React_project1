import { createContext, useContext, useState } from "react";


const AlertContext = createContext();
export const useAlert = () => {
    return useContext(AlertContext);
}

const AlertProvider = ({children}) =>{
    const [alert, setAlert] = useState(false);

    const toggle = () =>{
        setAlert((prev)=> !prev);
    }

    return <AlertContext.Provider value={{
        visible : alert,
        toggle
    }}>
        {children}
    </AlertContext.Provider>
}

export default AlertProvider;