import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { LanguageProvider } from "@/i18n/LanguageProvider";

describe("Home", () => {
  it("renders the workspace in Portuguese", () => {
    localStorage.setItem("portfolio-language", "pt");

    render(
      <LanguageProvider>
        <Home />
      </LanguageProvider>,
    );

    expect(screen.getByRole("heading", { name: /Luana Matos/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "GitHub (abre em nova aba)" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "explorador" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "estado" })).toHaveTextContent(
      "sistema: pronto",
    );
    expect(screen.getByRole("list", { name: "Arquivos do portfólio" })).toHaveTextContent(
      "apresentacao.md",
    );
    expect(screen.getByRole("list", { name: "Arquivos do portfólio" })).toHaveTextContent(
      "trajetoria/",
    );
    expect(screen.queryByText("system: ready")).not.toBeInTheDocument();

    expect(screen.queryByText(/commits feitos/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("img", { name: /profile/i })).not.toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Links profissionais" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Área de trabalho" })).toBeInTheDocument();
    expect(screen.getByRole("list", { name: "Arquivos do portfólio" })).toBeInTheDocument();
  });

  it("renders email as a same-context mail link", () => {
    localStorage.setItem("portfolio-language", "pt");

    render(
      <LanguageProvider>
        <Home />
      </LanguageProvider>,
    );

    const emailLink = screen.getByRole("link", { name: "Email" });
    expect(emailLink).toHaveAttribute("href", "mailto:luana.smatos01@gmail.com");
    expect(emailLink).not.toHaveAttribute("target");
  });

  it("renders the workspace in English", () => {
    localStorage.setItem("portfolio-language", "en");

    render(
      <LanguageProvider>
        <Home />
      </LanguageProvider>,
    );

    expect(screen.getByRole("region", { name: "explorer" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "status" })).toHaveTextContent(
      "system: ready",
    );
    expect(screen.getByRole("list", { name: "Portfolio files" })).toHaveTextContent(
      "introduction.md",
    );
    expect(screen.getByRole("list", { name: "Portfolio files" })).toHaveTextContent(
      "trajectory/",
    );
  });
});
