"use client";

import { SkillGroup } from "@/components/skills/SkillGroup";
import { PageIntro } from "@/components/ui/PageIntro";
import { usePortfolio } from "@/i18n/usePortfolio";

export default function SkillsPage() {
  const { content } = usePortfolio();
  const { skills } = content;

  return (
    <main className="page-shell">
      <div className="container skills-page">
        <PageIntro eyebrow={skills.label} title={skills.title} description={skills.intro} />
        <div className="skills-grid">
          {skills.groups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </main>
  );
}
