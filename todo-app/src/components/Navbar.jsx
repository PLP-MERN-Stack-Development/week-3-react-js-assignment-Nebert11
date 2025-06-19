import { useContext } from "react";
import {ThemeContext } from "../Context/ThemeContext";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <nav className="bg-gray-800 dark:bg-blue-900 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white dark:text-yellow-300">ToDo App</h1>
                <ThemeToggle/>
            </div>
        </nav>
    );
};


export default Navbar;