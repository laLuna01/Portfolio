"use client";

import { usePortfolio } from "@/i18n/usePortfolio";

export default function LanguageSwitch() {
  const { language, setLanguage, content } = usePortfolio();

  return (
    <div className="language-switch" aria-label={content.accessibility.language}>
      {["en", "pt"].map((option) => {
        const selected = language === option;

        return (
          <button
            key={option}
            type="button"
            className={`language-switch__option${selected ? " language-switch__option--selected" : ""}`}
            aria-pressed={selected}
            onClick={() => setLanguage(option)}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
