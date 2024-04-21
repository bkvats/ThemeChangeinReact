import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ToggleBtn() {
    const {dark, setDark} = useContext(ThemeContext)
    return (
        <div className="m-10">
            <label htmlFor="theme" className="inline-block h-10 w-20 border-gray-900 border-2 rounded-3xl cursor-pointer dark:bg-gray-900 relative">
            <input
            type="checkbox"
            id="theme"
            className="sr-only peer"
            onChange={() => {
                setDark(!dark);
            }}
            />
                <div className="bg-gray-900 h-7 w-7 left-1 top-1 rounded-full peer-checked:left-11 duration-200 dark:bg-white absolute"></div>
            </label>
        </div>
    )
}