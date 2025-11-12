import React, { useEffect, useState } from "react";
import { Sun, Moon, SunMoon } from 'lucide-react'

const themePrefKey = "theme-mode";

export default function ThemeSwitcher() {
  // Light, dark, or auto
  const [theme, setTheme] = useState("auto");

  // Handle theme change
  useEffect(() => {
    function applyTheme(mode) {
      document.documentElement.classList.remove("dark", "light");
      if (mode === "auto") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.add("light");
        }
      } else {
        document.documentElement.classList.add(mode);
      }
    }
    applyTheme(theme);
    localStorage.setItem(themePrefKey, theme);

    // Listen for changes if auto
    if (theme === "auto") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme("auto");
      mediaQuery.addEventListener("change", handleChange);
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, [theme]);

  // Load theme from localStorage when the page loads
  useEffect(() => {
    const saved = localStorage.getItem(themePrefKey);
    if (saved === "dark" || saved === "light" || saved === "auto") {
      setTheme(saved);
    }
  }, []);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label="Light theme"
        title="Light mode"
        className={`flex items-center justify-center w-10 h-10 text-lg transition-colors duration-300 rounded-full btn btn-circle btn-ghost ${theme === "light" ? "bg-nlc-blue text-white ring-2 ring-nlc-blue" : ""}`}
        onClick={() => setTheme("light")}
      >
        <Sun className="dark:text-white" />
      </button>
      <button
        type="button"
        aria-label="Dark theme"
        title="Dark mode"
        className={`flex items-center justify-center w-10 h-10 text-lg transition-colors duration-300 rounded-full btn btn-circle btn-ghost ${theme === "dark" ? "bg-nlc-blue text-white ring-2 ring-nlc-blue" : ""}`}
        onClick={() => setTheme("dark")}
      >
        <Moon className="dark:text-white" />
      </button>
      <button
        type="button"
        aria-label="Auto theme"
        title="Match device theme"
        className={`flex items-center justify-center w-10 h-10 text-lg transition-colors duration-300 rounded-full btn btn-circle btn-ghost ${theme === "auto" ? "bg-nlc-blue text-white ring-2 ring-nlc-blue" : ""}`}
        onClick={() => setTheme("auto")}
      >
        <SunMoon />
      </button>
    </div>
  );
}