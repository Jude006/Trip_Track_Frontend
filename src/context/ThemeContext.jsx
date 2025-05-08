// ThemeContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Export context as named export
export const ThemeContext = createContext();

// Export provider as named export
export default function ThemeProvider  ({ children }){
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('theme');
        return savedMode ? savedMode === 'dark' : 
               window.matchMedia('(prefers-color-scheme: dark)').matches;
    }); 

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(prev => !prev);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};