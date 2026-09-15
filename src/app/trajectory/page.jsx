"use client";

import { Timeline } from "@/components/trajectory/Timeline";
import { PageIntro } from "@/components/ui/PageIntro";
import { WindowFrame } from "@/components/ui/WindowFrame";
import { usePortfolio } from "@/i18n/usePortfolio";

function Credentials({ title, windowTitle, items }) {
  return (
    <section className="trajectory__credentials" aria-labelledby={windowTitle}>
      <WindowFrame title={windowTitle}>
        <h2 id={windowTitle} className="trajectory__section-title">{title}</h2>
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
          eyebrow="trajectory.log"
          title={trajectory.title}
          description={trajectory.intro}
        />

        <section className="trajectory__personal" aria-labelledby="personal-summary">
          <WindowFrame title="profile.txt">
            <h2 id="personal-summary" className="trajectory__section-title">
              {trajectory.personal.title}
            </h2>
            <p className="trajectory__personal-copy">{trajectory.personal.summary}</p>
          </WindowFrame>
        </section>

        <section className="trajectory__experience" aria-labelledby="experience">
          <div className="trajectory__section-heading">
            <p className="interface-label">01 / experience</p>
            <h2 id="experience" className="trajectory__section-title">
              {trajectory.experience.title}
            </h2>
          </div>
          <Timeline items={trajectory.experience.items} />
        </section>

        <div className="trajectory__credentials-grid">
          <Credentials
            title={trajectory.education.title}
            windowTitle="education.log"
            items={trajectory.education.items}
          />
          <Credentials
            title={trajectory.certifications.title}
            windowTitle="certifications.log"
            items={trajectory.certifications.items}
          />
        </div>
      </div>
    </main>
  );
}
