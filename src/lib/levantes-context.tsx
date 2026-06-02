import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang, Theme } from "./levantes-data";

interface Ctx {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  userOverrode: boolean;
}

const LevantesCtx = createContext<Ctx | null>(null);

function defaultThemeByTime(): Theme {
  if (typeof window === "undefined") return "day";
  const h = new Date().getHours() + new Date().getMinutes() / 60;
  // Day 07:00 — 20:30, otherwise Night
  return h >= 7 && h < 20.5 ? "day" : "night";
}

export function LevantesProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("day");
  const [lang, setLang] = useState<Lang>("en");
  const [userOverrode, setUserOverrode] = useState(false);

  useEffect(() => {
    // Session-only manual override
    const stored = sessionStorage.getItem("levantes-theme");
    if (stored === "day" || stored === "night") {
      setThemeState(stored);
      setUserOverrode(true);
    } else {
      setThemeState(defaultThemeByTime());
    }
    const storedLang = localStorage.getItem("levantes-lang");
    if (storedLang === "en" || storedLang === "gr") setLang(storedLang);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "night") root.classList.add("night");
    else root.classList.remove("night");
    root.style.colorScheme = theme === "night" ? "dark" : "light";
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang === "gr" ? "el" : "en";
    localStorage.setItem("levantes-lang", lang);
  }, [lang]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    setUserOverrode(true);
    sessionStorage.setItem("levantes-theme", t);
  };

  const value = useMemo<Ctx>(() => ({
    theme,
    setTheme,
    toggleTheme: () => setTheme(theme === "day" ? "night" : "day"),
    lang,
    setLang,
    toggleLang: () => setLang(lang === "en" ? "gr" : "en"),
    userOverrode,
  }), [theme, lang, userOverrode]);

  return <LevantesCtx.Provider value={value}>{children}</LevantesCtx.Provider>;
}

export function useLevantes() {
  const ctx = useContext(LevantesCtx);
  if (!ctx) throw new Error("useLevantes must be used inside LevantesProvider");
  return ctx;
}
