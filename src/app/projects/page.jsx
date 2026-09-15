"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { usePortfolio } from "@/i18n/usePortfolio";

export default function ProjectsPage() {
  const { content } = usePortfolio();
  const { projects } = content;

  return (
    <main className="page-shell">
      <div className="container projects-page">
        <PageIntro
          eyebrow={projects.label}
          title={projects.title}
          description={projects.intro}
        />
        <div className="projects-grid">
          {projects.items.map((project) => (
            <ProjectCard key={project.title} project={project} labels={projects.labels} />
          ))}
        </div>
      </div>
    </main>
  );
}
