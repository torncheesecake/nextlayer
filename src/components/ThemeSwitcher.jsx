import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const THEME_KEY = "theme-mode";

// 'light' | 'dark' | 'auto'
function applyTheme(mode) {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  if (mode === "auto") {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    root.classList.add(prefersDark ? "dark" : "light");
  } else {
    root.classList.add(mode);
  }
}

export default function ThemeSwitcher() {
  const location = useLocation();

  // Hide on cyber security page
  if (location.pathname.startsWith("/cyber-security")) {
    return null;
  }

  const getInitial = () => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem(THEME_KEY) : null;
    return saved === "light" || saved === "dark" || saved === "auto"
      ? saved
      : "auto";
  };

  const [mode, setMode] = useState(getInitial);
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    applyTheme(mode);
  }, []);

  useLayoutEffect(() => {
    localStorage.setItem(THEME_KEY, mode);
    applyTheme(mode);
  }, [mode]);

  useEffect(() => {
    if (mode !== "auto") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("auto");
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [mode]);

  const getCurrentIcon = () => {
    if (mode === "auto") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      return prefersDark ? <Moon size={18} /> : <Sun size={18} />;
    }
    return mode === "dark" ? <Moon size={18} /> : <Sun size={18} />;
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-graphite dark:text-seasalt hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
        aria-label="Toggle theme"
      >
        {getCurrentIcon()}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-white dark:bg-techblack border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden z-50">
            <button
              type="button"
              onClick={() => {
                setMode("light");
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                mode === "light"
                  ? "bg-bittersweet text-seasalt"
                  : "text-techblack dark:text-seasalt hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Sun size={16} />
              <span>Light</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("dark");
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                mode === "dark"
                  ? "bg-bittersweet text-seasalt"
                  : "text-techblack dark:text-seasalt hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Moon size={16} />
              <span>Dark</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("auto");
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                mode === "auto"
                  ? "bg-bittersweet text-seasalt"
                  : "text-techblack dark:text-seasalt hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Monitor size={16} />
              <span>Auto</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
