import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import ProjectsPage from "./page";

describe("ProjectsPage", () => {
  it("shows all four existing projects together with only their available actions", () => {
    localStorage.setItem("portfolio-language", "pt");

    render(
      <LanguageProvider>
        <ProjectsPage />
      </LanguageProvider>,
    );

    expect(screen.getByRole("heading", { name: "EcoVolt" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "GetCards" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Nike Page" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Salesforce ++" })).toBeVisible();
    expect(screen.getAllByRole("link", { name: /repositório/i })).toHaveLength(4);
    expect(screen.getAllByRole("link", { name: /ver projeto/i })).toHaveLength(2);
  });
});
