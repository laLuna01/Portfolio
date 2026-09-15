import { describe, expect, it } from "vitest";
import { portfolioContent } from "./portfolio";

describe("portfolioContent", () => {
  it("keeps both locales structurally aligned", () => {
    expect(Object.keys(portfolioContent.en)).toEqual(Object.keys(portfolioContent.pt));
    expect(portfolioContent.en.projects.items).toHaveLength(
      portfolioContent.pt.projects.items.length,
    );
  });

  it("contains no numeric marketing metrics", () => {
    expect(portfolioContent.pt.home).not.toHaveProperty("stats");
    expect(portfolioContent.en.home).not.toHaveProperty("stats");
  });
});
