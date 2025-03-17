import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    
    const ToggleTheme = () => {
        setDarkMode(prev => !prev);
    };
    
    
    return (
        <ThemeContext.Provider value={{ darkMode, ToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
