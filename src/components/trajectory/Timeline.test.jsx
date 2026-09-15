import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Timeline } from "./Timeline";

describe("Timeline", () => {
  it("renders experience in source order", () => {
    const items = [
      { company: "A", role: "One", period: "2024" },
      { company: "B", role: "Two", period: "2023" },
    ];

    render(<Timeline items={items} />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("A");
    expect(screen.getAllByRole("listitem")[1]).toHaveTextContent("B");
  });
});
