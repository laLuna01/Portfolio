import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import SkillsPage from "./page";

describe("SkillsPage", () => {
  it("organizes the existing technologies into five visible layers", () => {
    localStorage.setItem("portfolio-language", "pt");

    render(
      <LanguageProvider>
        <SkillsPage />
      </LanguageProvider>,
    );

    expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(5);
    expect(screen.getByRole("heading", { name: "Frontend" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Backend" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Dados" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Infraestrutura" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Ferramentas" })).toBeVisible();
    expect(screen.getByText("React.js")).toBeVisible();
    expect(screen.getByText("Spring Boot")).toBeVisible();
    expect(screen.getByText("SQL")).toBeVisible();
    expect(screen.getByText("Docker")).toBeVisible();
    expect(screen.getByText("Figma")).toBeVisible();
  });
});
