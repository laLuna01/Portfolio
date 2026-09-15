import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "./LanguageProvider";
import { usePortfolio } from "./usePortfolio";

function Probe() {
  const { language, setLanguage, content } = usePortfolio();

  return (
    <>
      <span>{language}</span>
      <span>{content.nav.contact}</span>
      <button onClick={() => setLanguage("en")}>EN</button>
    </>
  );
}

describe("LanguageProvider", () => {
  it("switches language and persists the selection", async () => {
    localStorage.setItem("portfolio-language", "pt");
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );

    await user.click(screen.getByRole("button", { name: "EN" }));

    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(localStorage.getItem("portfolio-language")).toBe("en");
    expect(document.documentElement.lang).toBe("en");
  });
});
