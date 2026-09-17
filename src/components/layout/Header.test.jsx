import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import Header from "./Header";

const { usePathname } = vi.hoisted(() => ({ usePathname: vi.fn() }));

vi.mock("next/navigation", () => ({ usePathname }));

function renderHeader() {
  return render(
    <LanguageProvider>
      <Header />
    </LanguageProvider>,
  );
}

describe("Header", () => {
  beforeEach(() => {
    localStorage.setItem("portfolio-language", "pt");
    usePathname.mockReturnValue("/");
  });

  it("marks the active route semantically and with a non-color state", () => {
    usePathname.mockReturnValue("/projects");

    renderHeader();

    const activeLinks = screen.getAllByRole("link", { name: "Projetos" });
    expect(activeLinks).toHaveLength(1);
    activeLinks.forEach((link) => {
      expect(link).toHaveAttribute("aria-current", "page");
      expect(link).toHaveClass("header-link--active");
    });
  });

  it("renders the desktop-like identity and resume controls", () => {
    renderHeader();

    const signature = screen.getByRole("link", { name: /Luana Matos\.exe/i });
    expect(signature.querySelector('[data-pixel-icon="computer"]')).toBeInTheDocument();
    expect(within(signature).getByText("software developer")).toBeInTheDocument();

    const resume = screen.getByRole("link", { name: "CV" });
    expect(resume).toHaveClass("header-resume-link--button");
    expect(resume.querySelector('[data-pixel-icon="folder"]')).toBeInTheDocument();
  });

  it("exposes the selected language with pressed state", () => {
    renderHeader();

    const portugueseButtons = screen.getAllByRole("button", { name: "PT" });
    const englishButtons = screen.getAllByRole("button", { name: "EN" });

    portugueseButtons.forEach((button) => {
      expect(button).toHaveAttribute("aria-pressed", "true");
      expect(button).toHaveClass("language-switch__option--selected");
    });
    englishButtons.forEach((button) => {
      expect(button).toHaveAttribute("aria-pressed", "false");
      expect(button).not.toHaveClass("language-switch__option--selected");
    });
  });

  it("opens and closes the mobile menu with the keyboard and restores trigger focus", async () => {
    const user = userEvent.setup();

    renderHeader();

    const trigger = screen.getByRole("button", { name: "Abrir menu de navegação" });
    trigger.focus();
    await user.keyboard("{Enter}");

    const dialog = screen.getByRole("dialog", { name: "Menu de navegação" });
    expect(within(dialog).getByRole("link", { name: "Trajetória" })).toBeInTheDocument();
    expect(within(dialog).getByRole("navigation", { name: "Navegação principal" })).toBeInTheDocument();
    expect(within(dialog).getByRole("group", { name: "Idioma" })).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog", { name: "Menu de navegação" })).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("localizes desktop navigation and language control group names", async () => {
    const user = userEvent.setup();
    renderHeader();

    expect(screen.getByRole("navigation", { name: "Navegação principal" })).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "Idioma" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "EN" }));

    expect(screen.getByRole("navigation", { name: "Primary navigation" })).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "Language" })).toBeInTheDocument();
  });
});
