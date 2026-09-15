import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SkillGroup } from "./SkillGroup";

describe("SkillGroup", () => {
  it("keeps every technology identifiable in visible text", () => {
    render(
      <SkillGroup
        group={{
          title: "Backend",
          description: "Serviços e integrações.",
          items: ["Java", "Spring Boot"],
        }}
      />,
    );

    expect(screen.getByRole("heading", { name: "Backend" })).toBeVisible();
    expect(screen.getByText("Java")).toBeVisible();
    expect(screen.getByText("Spring Boot")).toBeVisible();
  });
});
