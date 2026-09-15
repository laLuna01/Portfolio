"use client";

import { createContext, useEffect, useState } from "react";
import { portfolioContent, supportedLanguages } from "@/content/portfolio";

export const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("pt");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-language");
    const detected = navigator.language.toLowerCase().startsWith("en") ? "en" : "pt";

    setLanguageState(supportedLanguages.includes(stored) ? stored : detected);
  }, []);

  const setLanguage = (next) => {
    if (!supportedLanguages.includes(next)) return;

    localStorage.setItem("portfolio-language", next);
    document.documentElement.lang = next;
    setLanguageState(next);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, content: portfolioContent[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
