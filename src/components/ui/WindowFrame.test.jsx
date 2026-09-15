import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ExternalLink } from "./ExternalLink";
import { PageIntro } from "./PageIntro";
import { WindowFrame } from "./WindowFrame";

describe("WindowFrame", () => {
  it("renders a semantic region while hiding decorative controls", () => {
    render(<WindowFrame title="terminal">content</WindowFrame>);

    expect(screen.getByRole("region", { name: "terminal" })).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("renders the page introduction as a labelled heading group", () => {
    render(
      <PageIntro
        eyebrow="portfolio.exe"
        title="Projects"
        description="Selected work."
      />,
    );

    expect(screen.getByText("portfolio.exe")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: "Projects" })).toBeInTheDocument();
    expect(screen.getByText("Selected work.")).toBeInTheDocument();
  });

  it("uses the provided localized new-tab suffix in the accessible name", () => {
    render(
      <ExternalLink href="https://github.com" newTabSuffix="abre em nova aba">
        GitHub
      </ExternalLink>,
    );

    expect(screen.getByRole("link", { name: "GitHub (abre em nova aba)" })).toHaveAttribute(
      "href",
      "https://github.com",
    );
    expect(screen.getByRole("link", { name: "GitHub (abre em nova aba)" })).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(screen.getByRole("link", { name: "GitHub (abre em nova aba)" })).toHaveAttribute(
      "rel",
      "noreferrer noopener",
    );
    expect(screen.getByText("↗")).toBeInTheDocument();
  });
});
