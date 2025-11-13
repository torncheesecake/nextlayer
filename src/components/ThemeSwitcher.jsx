import { Moon, Sun } from "lucide-react";
import { useEffect, useLayoutEffect, useState } from "react";
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
  const getInitial = () => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem(THEME_KEY) : null;
    return saved === "light" || saved === "dark" || saved === "auto"
      ? saved
      : "auto";
  };
  const [mode, setMode] = useState(getInitial);
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
  const btnBase =
    "flex h-10 w-10 items-center justify-center rounded-full transition-colors";
  const active = "bg-biscay text-seasalt shadow-md";
  const inactive =
    "bg-seasalt dark:bg-graphite border-none dark:border-seasalt text-graphite dark:text-seasalt hover:bg-biscay-light2";
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Light theme"
        title="Light mode"
        className={`${btnBase} ${mode === "light" ? active : inactive}`}
        onClick={() => setMode("light")}
      >
        <Sun />
      </button>
      <button
        type="button"
        aria-label="Dark theme"
        title="Dark mode"
        className={`${btnBase} ${mode === "dark" ? active : inactive}`}
        onClick={() => setMode("dark")}
      >
        <Moon />
      </button>
      <button
        type="button"
        aria-label="Auto theme"
        title="Match device"
        className={`${btnBase} font-bold ${mode === "auto" ? active : inactive}`}
        onClick={() => setMode("auto")}
      >
        A
      </button>
    </div>
  );
}
