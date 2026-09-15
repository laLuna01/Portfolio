"use client";

import { Timeline } from "@/components/trajectory/Timeline";
import { PageIntro } from "@/components/ui/PageIntro";
import { WindowFrame } from "@/components/ui/WindowFrame";
import { usePortfolio } from "@/i18n/usePortfolio";

const sectionIds = {
  personal: "trajectory-personal",
  experience: "trajectory-experience",
  education: "trajectory-education",
  certifications: "trajectory-certifications",
};

function Credentials({ title, label, headingId, items }) {
  return (
    <section className="trajectory__credentials" aria-labelledby={headingId}>
      <WindowFrame title={label}>
        <h2 id={headingId} className="trajectory__section-title">{title}</h2>
        <ul className="trajectory__credential-list">
          {items.map((item) => (
            <li key={`${item.institution}-${item.course}`} className="trajectory__credential">
              <p className="trajectory__period">{item.period}</p>
              <h3>{item.institution}</h3>
              <p>{item.course}</p>
            </li>
          ))}
        </ul>
      </WindowFrame>
    </section>
  );
}

export default function TrajectoryPage() {
  const { content } = usePortfolio();
  const { trajectory } = content;

  return (
    <main className="page-shell">
      <div className="container trajectory">
        <PageIntro
          eyebrow={trajectory.labels.eyebrow}
          title={trajectory.title}
          description={trajectory.intro}
        />

        <section className="trajectory__personal" aria-labelledby={sectionIds.personal}>
          <WindowFrame title={trajectory.labels.profileWindow}>
            <h2 id={sectionIds.personal} className="trajectory__section-title">
              {trajectory.personal.title}
            </h2>
            <p className="trajectory__personal-copy">{trajectory.personal.summary}</p>
          </WindowFrame>
        </section>

        <section className="trajectory__experience" aria-labelledby={sectionIds.experience}>
          <div className="trajectory__section-heading">
            <p className="interface-label">{trajectory.labels.experienceEyebrow}</p>
            <h2 id={sectionIds.experience} className="trajectory__section-title">
              {trajectory.experience.title}
            </h2>
          </div>
          <Timeline items={trajectory.experience.items} />
        </section>

        <div className="trajectory__credentials-grid">
          <Credentials
            title={trajectory.education.title}
            label={trajectory.labels.educationWindow}
            headingId={sectionIds.education}
            items={trajectory.education.items}
          />
          <Credentials
            title={trajectory.certifications.title}
            label={trajectory.labels.certificationsWindow}
            headingId={sectionIds.certifications}
            items={trajectory.certifications.items}
          />
        </div>
      </div>
    </main>
  );
}
