import Image from "next/image";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function ProjectCard({ project, labels }) {
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
          {project.live ? <ExternalLink href={project.live}>{labels.demo}</ExternalLink> : null}
          {project.github ? (
            <ExternalLink href={project.github}>{labels.repository}</ExternalLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
