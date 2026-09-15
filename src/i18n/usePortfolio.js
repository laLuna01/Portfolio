import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

export function usePortfolio() {
  return useContext(LanguageContext);
}
