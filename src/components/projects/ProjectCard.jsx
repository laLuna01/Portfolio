import Image from "next/image";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { portfolioContent } from "@/content/portfolio";

const defaultLabels = portfolioContent.en.projects.labels;
const defaultNewTabSuffix = portfolioContent.en.accessibility.externalLinkSuffix;

function projectLinkLabel(template, title) {
  return template.replace("{project}", title);
}

export function ProjectCard({ project }) {
  const labels = project.labels ?? defaultLabels;
  const newTabSuffix = project.newTabSuffix ?? defaultNewTabSuffix;

  return (
    <article className="project-card">
      {project.image ? (
        <div className="project-card__image">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={585}
            height={460}
            sizes="(min-width: 64rem) 34rem, (min-width: 48rem) 50vw, 100vw"
          />
        </div>
      ) : null}

      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.number}</span>
          <span>{project.category}</span>
        </div>
        <h2>{project.title}</h2>
        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__tags" aria-label={labels.technologies}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          {project.live ? (
            <ExternalLink
              href={project.live}
              accessibleLabel={projectLinkLabel(labels.demoAccessible, project.title)}
              newTabSuffix={newTabSuffix}
            >
              {labels.demo}
            </ExternalLink>
          ) : null}
          {project.github ? (
            <ExternalLink
              href={project.github}
              accessibleLabel={projectLinkLabel(labels.repositoryAccessible, project.title)}
              newTabSuffix={newTabSuffix}
            >
              {labels.repository}
            </ExternalLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
