import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "./ProjectCard";

const labels = {
  technologies: "Tecnologias",
  repository: "Repositório",
  demo: "Ver projeto",
};

describe("ProjectCard", () => {
  it("omits project actions whose links are unavailable", () => {
    render(
      <ProjectCard
        project={{
          number: "02",
          title: "GetCards",
          category: "BackEnd",
          description: "Automação",
          tags: ["C#"],
          github: "https://github.com/laLuna01/GetCards_CP",
          live: "",
        }}
        labels={labels}
      />,
    );

    expect(screen.getByRole("link", { name: /repositório/i })).toHaveAttribute(
      "href",
      "https://github.com/laLuna01/GetCards_CP",
    );
    expect(screen.queryByRole("link", { name: /ver projeto/i })).not.toBeInTheDocument();
  });

  it("exposes every available action as a keyboard-reachable link", () => {
    render(
      <ProjectCard
        project={{
          number: "03",
          title: "Nike Page",
          category: "FrontEnd",
          description: "Landing page",
          tags: ["Next.js"],
          github: "https://github.com/laLuna01/Nike_Tailwind",
          live: "https://nike-tailwind-phi.vercel.app/",
        }}
        labels={labels}
      />,
    );

    expect(screen.getByRole("link", { name: /repositório/i })).toHaveAttribute("target", "_blank");
    expect(screen.getByRole("link", { name: /ver projeto/i })).toHaveAttribute("target", "_blank");
  });
});
