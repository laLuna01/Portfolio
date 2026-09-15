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

  it("exposes the selected language with pressed state", () => {
    renderHeader();

    const portugueseButtons = screen.getAllByRole("button", { name: "PT" });
    const englishButtons = screen.getAllByRole("button", { name: "EN" });

    portugueseButtons.forEach((button) => expect(button).toHaveAttribute("aria-pressed", "true"));
    englishButtons.forEach((button) => expect(button).toHaveAttribute("aria-pressed", "false"));
  });

  it("opens and closes the mobile menu with the keyboard and restores trigger focus", async () => {
    const user = userEvent.setup();

    renderHeader();

    const trigger = screen.getByRole("button", { name: "Open navigation menu" });
    trigger.focus();
    await user.keyboard("{Enter}");

    const dialog = screen.getByRole("dialog", { name: "Navigation menu" });
    expect(within(dialog).getByRole("link", { name: "Trajetória" })).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog", { name: "Navigation menu" })).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
