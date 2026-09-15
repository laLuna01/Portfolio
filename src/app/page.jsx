"use client";

import { DesktopScene } from "@/components/home/DesktopScene";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { usePortfolio } from "@/i18n/usePortfolio";

export default function Home() {
  const { content } = usePortfolio();
  const { identity, home } = content;

  return (
    <main className="page-shell">
      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
        <div className="max-w-xl">
          <p className="interface-label m-0 text-sm font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
            {home.role}
          </p>
          <h1 className="mt-3 text-5xl font-bold leading-none tracking-[-0.05em] sm:text-6xl">
            {identity.name}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-[var(--muted)]">{home.summary}</p>

          <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-3" aria-label="Professional links">
            <ExternalLink href={identity.github}>GitHub</ExternalLink>
            <ExternalLink href={identity.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={`mailto:${identity.email}`}>Email</ExternalLink>
          </nav>
        </div>

        <DesktopScene name={identity.name} role={home.role} />
      </section>
    </main>
  );
}
