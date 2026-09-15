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

  it("marks external links as opening in a new tab", () => {
    render(<ExternalLink href="https://github.com">GitHub</ExternalLink>);

    expect(screen.getByRole("link", { name: "GitHub (opens in a new tab)" })).toHaveAttribute(
      "href",
      "https://github.com",
    );
    expect(screen.getByRole("link", { name: "GitHub (opens in a new tab)" })).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(screen.getByRole("link", { name: "GitHub (opens in a new tab)" })).toHaveAttribute(
      "rel",
      "noreferrer noopener",
    );
    expect(screen.getByText("↗")).toBeInTheDocument();
  });
});
