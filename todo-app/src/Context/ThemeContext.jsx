import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Get initial theme from localStorage or system preference
    const getInitialTheme = () => {
        if (typeof window !== "undefined" && window.localStorage) {
            const storedTheme = window.localStorage.getItem("theme");
            if (storedTheme) return storedTheme;
            // If no theme stored, use system preference
            const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
            if (userMedia.matches) return "dark";
        }
        return "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;