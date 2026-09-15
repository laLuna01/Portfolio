import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { LanguageProvider } from "@/i18n/LanguageProvider";

describe("Home", () => {
  it("keeps the home focused on introduction and links", () => {
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
    expect(screen.queryByText(/commits feitos/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("img", { name: /profile/i })).not.toBeInTheDocument();
  });
});
