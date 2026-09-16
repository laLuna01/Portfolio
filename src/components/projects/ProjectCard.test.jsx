import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "./ProjectCard";

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
      />,
    );

    expect(screen.getByRole("link", { name: /repository/i })).toHaveAttribute(
      "href",
      "https://github.com/laLuna01/GetCards_CP",
    );
    expect(screen.queryByRole("link", { name: /view project/i })).not.toBeInTheDocument();
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
      />,
    );

    expect(screen.getByRole("link", { name: /open nike page repository/i })).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(screen.getByRole("link", { name: /view nike page demo/i })).toHaveAttribute(
      "target",
      "_blank",
    );
  });

  it.each([
    {
      labels: {
        technologies: "Tecnologias",
        repository: "Repositório",
        demo: "Ver projeto",
        repositoryAccessible: "Abrir repositório de {project}",
        demoAccessible: "Ver demonstração de {project}",
      },
      suffix: "abre em nova aba",
      repositoryName: "Abrir repositório de EcoVolt (abre em nova aba)",
      demoName: "Ver demonstração de EcoVolt (abre em nova aba)",
    },
    {
      labels: {
        technologies: "Technologies",
        repository: "Repository",
        demo: "View project",
        repositoryAccessible: "Open {project} repository",
        demoAccessible: "View {project} demo",
      },
      suffix: "opens in a new tab",
      repositoryName: "Open EcoVolt repository (opens in a new tab)",
      demoName: "View EcoVolt demo (opens in a new tab)",
    },
  ])(
    "includes the project title in localized destination-specific link names",
    ({ labels, suffix, repositoryName, demoName }) => {
      render(
        <ProjectCard
          project={{
            number: "01",
            title: "EcoVolt",
            category: "FullStack",
            description: "Energy platform",
            tags: ["Java"],
            github: "https://github.com/laLuna01/EcoVoltJava",
            live: "https://example.com/ecovolt",
            labels,
            newTabSuffix: suffix,
          }}
        />,
      );

      expect(screen.getByRole("link", { name: repositoryName })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: demoName })).toBeInTheDocument();
      expect(screen.getByText(labels.repository)).toBeInTheDocument();
      expect(screen.getByText(labels.demo)).toBeInTheDocument();
    },
  );
});
