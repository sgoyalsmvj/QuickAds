"use client";
import { useTheme } from "@/context/themeContext";
import React, { useEffect } from "react";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={handleToggle}
      className={` p-1 m-2 w-[50px] h-[25px] bg-gray-400 dark:bg-gray-700 rounded-full flex items-center transition-colors   duration-900 ${
        darkMode ? "justify-end" : "justify-start"
      }`}
    >
      <div className="w-[20px] h-[20px] bg-white rounded-full shadow-md transition-transform duration-300 transform"></div>
    </button>
  );
};

export default DarkModeToggle;
