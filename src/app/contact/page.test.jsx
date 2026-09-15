import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { usePortfolio } from "@/i18n/usePortfolio";
import ContactPage from "./page";

function LanguageControl() {
  const { setLanguage } = usePortfolio();

  return <button onClick={() => setLanguage("en")}>English</button>;
}

function renderContact() {
  return render(
    <LanguageProvider>
      <LanguageControl />
      <ContactPage />
    </LanguageProvider>,
  );
}

describe("ContactPage", () => {
  it("combines the Portuguese form with email, LinkedIn, and GitHub only", () => {
    localStorage.setItem("portfolio-language", "pt");
    renderContact();

    expect(screen.getByRole("heading", { name: "Contato", level: 1 })).toBeVisible();
    expect(screen.getByRole("region", { name: "nova-mensagem.mail" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Canais diretos" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Enviar e-mail" })).toHaveAttribute(
      "href",
      "mailto:luana.smatos01@gmail.com",
    );
    expect(
      screen.getByRole("link", { name: "Abrir LinkedIn (abre em nova aba)" }),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/luana-sousa-matos-a00462232/");
    expect(
      screen.getByRole("link", { name: "Abrir GitHub (abre em nova aba)" }),
    ).toHaveAttribute("href", "https://github.com/laLuna01");
    expect(screen.queryByText("(+55) 11 98516-5812")).not.toBeInTheDocument();
    expect(screen.queryByText("Zona Sul - São Paulo, Brasil")).not.toBeInTheDocument();
  });

  it("updates every contact interface label to English", async () => {
    localStorage.setItem("portfolio-language", "pt");
    const user = userEvent.setup();
    renderContact();

    await user.click(screen.getByRole("button", { name: "English" }));

    expect(screen.getByRole("heading", { name: "Contact", level: 1 })).toBeVisible();
    expect(screen.getByRole("region", { name: "new-message.mail" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Direct channels" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Send email" })).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Open LinkedIn (opens in a new tab)" }),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Open GitHub (opens in a new tab)" }),
    ).toBeVisible();
  });
});
