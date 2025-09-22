import React, { createContext, useState } from 'react';

const NameContext = createContext();

function NameProvider({ children }) {
    const [name, setName] = useState("Chiraag");

    const toggleName = () => {
        setName((prev) => (prev === "Chiraag" ? "Talview" : "Chiraag"));
    }

    return (
        <NameContext.Provider value={{ name, toggleName }}>
            {children}
        </NameContext.Provider>
    )
}

export { NameContext, NameProvider };