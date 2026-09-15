import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Inter: () => ({ variable: "font-sans" }),
  JetBrains_Mono: () => ({ variable: "font-mono" }),
}));

vi.mock("@/components/layout/Header", () => ({
  default: () => null,
}));

vi.mock("@/i18n/LanguageProvider", () => ({
  LanguageProvider: ({ children }) => children,
}));

import { metadata } from "./layout";

describe("root metadata", () => {
  it("identifies Luana as a Fullstack developer without extra claims", () => {
    expect(metadata).toEqual({
      title: "Luana Matos — Desenvolvedora Fullstack",
      description: "Luana Matos — Desenvolvedora Fullstack",
    });
  });
});
