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
    expect(
      screen.getAllByRole("link", {
        name: /Abrir repositório de .+ \(abre em nova aba\)/,
      }),
    ).toHaveLength(4);
    expect(
      screen.getAllByRole("link", {
        name: /Ver demonstração de .+ \(abre em nova aba\)/,
      }),
    ).toHaveLength(2);
    expect(
      screen.getByRole("link", {
        name: "Abrir repositório de EcoVolt (abre em nova aba)",
      }),
    ).toHaveAttribute("href", "https://github.com/laLuna01/EcoVoltJava");
    expect(
      screen.getByRole("link", {
        name: "Abrir repositório de GetCards (abre em nova aba)",
      }),
    ).toHaveAttribute("href", "https://github.com/laLuna01/GetCards_CP");
  });
});
