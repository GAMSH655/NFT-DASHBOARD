import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleButton = () => {
    const { darkMode, ToggleTheme } = useContext(ThemeContext);

    return (
        <div onClick={ToggleTheme} className="cursor-pointer p-2">
            {darkMode ? (
                <FaSun className="inline m-2 text-yellow-500" />
            ) : (
                <FaMoon className="inline m-2 text-gray-800" />
            )}
        </div>
    );
};

export default ToggleButton;
